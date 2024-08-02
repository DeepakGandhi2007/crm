import axios from 'axios';
import { NextResponse } from 'next/server'; // Ensure this import if you're using Next.js
import { JWT } from 'google-auth-library';
import { google } from 'googleapis';
import path from 'path';
import fs from 'fs';

const accessToken = "EAAQrsH4giisBO7R7Dz34VJCj6TS4DzNjLrh9lZCfgNXpsuThjKdKO1U0uMZAxlIr8ZA4IwC5Cl7wIgipjBycg9C6zqvErXGE7Xd1szZCKWigOmKUiYU4C0fi3uAhcEvxmSte1Xb2ZA1tMZAABE0aJJbvZAXPwm5rUzRjOFfOTWl67hCn0NlU5fZBhSznEwHe5LNvbImh4Wao";
const adAccounts = ['act_3823127191257337', 'act_112713589486777'];
const reportDate = '2024-07-31';


function get_country_from_campaign_name(campaign_name) {
    const lowerCaseName = campaign_name.toLowerCase();
    const patterns = {
        Pakistan: /pak(?:istan|l)?/,
        India: /india/,
        UAE: /uae/,
        Australia: /australia?/,
        Singapore: /singapore/,
        Israel: /israel/,
        France: /france/,
        Turkey: /turkey/,
        Saudi: /saudi/,
        Canada: /canada/,
        Bangladesh: /bangladesh/,
    };

    // Check each pattern
    for (const [country, pattern] of Object.entries(patterns)) {
        if (pattern.test(lowerCaseName)) {
            return country;
        }
    }

    return 'Other';
}


async function fetchAllData(url, params) {
    let results = [];
    let response = await axios.get(url, { params });
    results = results.concat(response.data.data);

    while (response.data.paging && response.data.paging.next) {
        response = await axios.get(response.data.paging.next);
        results = results.concat(response.data.data);
    }

    return results;
}


async function executeWithRetry(func, args = [], maxRetries = 5, initialDelay = 5000) {
    let attempt = 0;

    while (attempt < maxRetries) {
        try {
            return await func(...args);
        } catch (error) {
            attempt++;
            if (attempt >= maxRetries) {
                throw error;
            }
            const waitTime = initialDelay * (2 ** attempt) + Math.random() * 1000;
            console.log(`API rate limit reached or error occurred. Retrying in ${waitTime / 1000} seconds...`);
            await new Promise(resolve => setTimeout(resolve, waitTime));
        }
    }
}


export async function GET(request) {
    try {
        const results = [];
        const seenCampaignIds = new Set();
        for (const accountId of adAccounts) {
            const campaignsResponse = await executeWithRetry(
                fetchAllData,
                [`https://graph.facebook.com/v20.0/${accountId}/campaigns`, {
                    access_token: accessToken,
                    fields: 'id,name,budget_remaining,daily_budget,adsets{daily_budget,insights{spend}},insights{actions}',
                    time_range: JSON.stringify({
                        since: '2024-07-31',
                        until: '2024-07-31'
                    }),
                    filtering: JSON.stringify([{
                        field: 'spend',
                        operator: 'GREATER_THAN',
                        value: 1
                    }])
                }]
            );

            for (const campaign of campaignsResponse) {
                const country = get_country_from_campaign_name(campaign.name);
                results.push({
                    ...campaign,
                    country
                });
            }
        }

        return NextResponse.json({
            message: "Results found",
            data: results
        });

    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}