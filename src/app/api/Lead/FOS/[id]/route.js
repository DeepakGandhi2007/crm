import getDataFromToken from "@/helpers/getDataFromtoken";
import { NextRequest, NextResponse } from "next/server";
import Leads from "@/models/Leads";
import User from "@/models/Users";
import connect from "@/dbConfig/dbConfig";

connect();

export async function GET(request, { params }) {
    const id = params.id;

    try {
        const Leaddata = await Leads.find({ Assigned: id }).populate('tags marketingtags Assigned');;
        return NextResponse.json({
            mesaaage: "Leads found",
            data: Leaddata
        })

    }
    catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}