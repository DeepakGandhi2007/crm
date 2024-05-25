import connect from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Invoice from "@/models/invoice";
import logger from "@/utils/logger";
import axios from "axios";
import jwt from 'jsonwebtoken'; // Import jwt directly here
import ActivityLog from "@/models/Activity";

connect();


export async function POST(request) {
    try {

        const reqBody = await request.json();
        const token = request.cookies.get('token')?.value || '';
        const decoded = jwt.decode(token);
        const userId = decoded.id;
        const username = decoded.name;
        reqBody.Userid = userId;
        const { closuredate, Leadid, expecteddate, buyername, SaleRent, Status, MOU, Readyoffplan, Handoverdate, Developer, tName, tContact, tEmail, tNatinality, tPassport, tPassportexpiry, tdob, tLocalResident, tEmirated, tEmiratedexpiry, directseller, sName, sContact, sEmail, sNatinality, sPassport, sPassportexpiry, sdob, sLocalResident, sEmirated, sEmiratedexpiry, Property, Developername, bedrooms, BUA, Plotarea, Plot, unitadd, Price, Loyalty, unitNumber, Cancelled, Dewa, Contract, Title, NewTitle, External, approved,assigneddate,agentname,leadsource,othercommnet } = reqBody;


        const newInvoice = new Invoice({
            closuredate: closuredate,
            expecteddate: expecteddate,
            Userid: userId,
            Leadid: Leadid,
            buyername: buyername,
            SaleRent: SaleRent,
            Status: Status,
            MOU: MOU,
            Readyoffplan: Readyoffplan,
            Handoverdate: Handoverdate,
            Developer: Developer,
            tennant: {
                Name: tName,
                Contact: tContact,
                Email: tEmail,
                Natinality: tNatinality,
                Passport: tPassport,
                Passportexpiry: tPassportexpiry,
                dob: tdob,
                LocalResident: tLocalResident,
                Emirated: tEmirated,
                Emiratedexpiry: tEmiratedexpiry

            },
            directseller: directseller,
            seller: {
                Name: sName,
                Contact: sContact,
                Email: sEmail,
                Natinality: sNatinality,
                Passport: sPassport,
                Passportexpiry: sPassportexpiry,
                dob: sdob,
                LocalResident: sLocalResident,
                Emirated: sEmirated,
                Emiratedexpiry: sEmiratedexpiry

            },
            Property: Property,
            Developername: Developername,
            bedrooms: bedrooms,
            BUA: BUA,
            Plotarea: Plotarea,
            Plot: Plot,
            unitadd: unitadd,
            Price: Price,
            Loyalty: Loyalty,
            unitNumber: unitNumber,
            Cancelled: Cancelled,
            Dewa: Dewa,
            Contract: Contract,
            Title: Title,
            NewTitle: NewTitle,
            External: External,
            approved: approved,
            assigneddate:assigneddate,
            agentname:agentname,
            leadsource:leadsource,
            othercommnet:othercommnet
        });

        const savedInvoice = await newInvoice.save();

        return NextResponse.json({
            message: "Lead created",
            success: true,
            savedInvoice,
        });


    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}