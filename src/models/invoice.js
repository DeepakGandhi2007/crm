import mongoose from "mongoose";
import User from "./Users";

const invoiceSchema = new mongoose.Schema({
    closuredate: String,
    expecteddate: String,
    Userid: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    Leadid: { type: mongoose.Schema.Types.ObjectId, ref: 'Leads' },
    timestamp: { type: Date, default: Date.now },
    buyername: String,
    SaleRent: String,
    Status: String,
    MOU: String,
    Readyoffplan: String,
    Handoverdate: String,
    Developer: String,
    tennant: {
        Name: {
            type: String,

        },
        Contact: {
            type: String,

        },
        Email: {
            type: String,

        },
        Natinality: {
            type: String,

        },
        Passport: {
            type: String,

        },
        Passportexpiry: {
            type: String,

        },
        dob: {
            type: String,

        },
        LocalResident: {
            type: String,

        },
        Emirated: {
            type: String,

        },
        Emiratedexpiry: {
            type: String,

        },

    },
    directseller: String,
    seller: {
        Name: {
            type: String,

        },
        Contact: {
            type: String,

        },
        Email: {
            type: String,

        },
        Natinality: {
            type: String,

        },
        Passport: {
            type: String,

        },
        Passportexpiry: {
            type: String,

        },
        dob: {
            type: String,

        },
        LocalResident: {
            type: String,

        },
        Emirated: {
            type: String,

        },
        Emiratedexpiry: {
            type: String,

        },

    },
    Property: String,
    Developername: String,
    bedrooms: String,
    BUA: String,
    Plotarea: String,
    Plot: String,
    unitadd: String,
    Price: String,
    Loyalty: String,
    unitNumber: String,
    Cancelled: String,
    Dewa: String,
    Contract: String,
    Title: String,
    NewTitle: String,
    External: String,
    approved: String,
    othercommnet: String,
    assigneddate: String,
    agentname: String,
    leadsource: String,
    cancelreason: String,
    sorucelead: String,
    approvedby: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }],


});

const Invoice = mongoose.models.Invoice || mongoose.model("Invoice", invoiceSchema);

export default Invoice;
