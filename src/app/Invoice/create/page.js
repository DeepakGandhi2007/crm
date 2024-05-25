"use client";
import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import RootLayout from '@/app/components/layout';
import SearchableSelect from '@/app/Leads/dropdown';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation'

function Invoice() {
    const [toastShown, setToastShown] = useState(false);
    const router = useRouter();
    const [isDateInput, setIsDateInput] = useState(false);
    const [useClient, setUseClient] = useState('');
    const [useseller, setseller] = useState('');

    const toggleInputType = () => {
        setIsDateInput((prevIsDateInput) => !prevIsDateInput);
    };

    useEffect(() => {

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            alert('Please open this page from a desktop.');
            router.back();
        }
        if (toastShown == false) {
            toast.success('Congratulations!! On closing your amazing new deal! Kindly fill out the form below to submit the transaction details.', {
                autoClose: 2000,
                closeButton: false
            });
            setToastShown(true)
        }
    }, []);

    const options1 = [
        { value: 'Sale', label: 'Sale' },
        { value: 'Rent', label: 'Rent' },

    ]
    const options2 = [
        { value: 'Open', label: 'Open' },
        { value: 'Closed', label: 'Closed' },

    ]
    const options3 = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },

    ]
    const options4 = [
        { value: 'Ready ', label: 'Ready ' },
        { value: 'Off Plan', label: 'Off Plan' },

    ]
    const options5 = [
        { value: 'Apartment', label: 'Apartment' },
        { value: 'Villa', label: 'Villa' },
        { value: 'Townhouse', label: 'Townhouse' },
        { value: 'Commercial', label: 'Commercial' },

    ]
    const options6 = [
        { value: 'Emaar Properties', label: 'Emaar Properties' },
        { value: 'DAMAC Properties', label: 'DAMAC Properties' },
        { value: 'Nakheel Properties', label: 'Nakheel Properties' },
        { value: 'Meraas', label: 'Meraas' },
        { value: 'MAG Property Development', label: 'MAG Property Development' },
        { value: 'Sobha Realty', label: 'Sobha Realty' },
        { value: 'Danube Properties', label: 'Danube Properties' },
        { value: 'Azizi Developments', label: 'Azizi Developments' },
        { value: 'Al Futtaim Group Real Estate', label: 'Al Futtaim Group Real Estate' },

    ]
    const options7 = [
        { value: 'Studio', label: 'Studio' },
        { value: '1 Bed', label: '1 Bed' },
        { value: '2 Bed', label: '2 Bed' },
        { value: '3 Bed', label: '3 Bed' },
        { value: '4 Bed', label: '4 Bed' },
        { value: '5 Bed', label: '5 Bed' },
        { value: '6 Bed', label: '6 Bed' },
        { value: '7 Bed', label: '7 Bed' },
        { value: '8 Bed', label: '8 Bed' },

    ]

    const options8 = [
        { value: 'Yes', label: 'Direct From Developer (Yes)' },
        { value: 'No', label: 'Direct From Developer (No)' },

    ]

    const options9 = [
        { value: 'Yes', label: 'Direct From Seller / Owner (Yes)' },
        { value: 'No', label: 'Direct From Seller / Owner (No)' },

    ]
        const options11 = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },

    ]


    const handleUseClientChange = (value) => {
        setUseClient(value.value);
    };
    const handleUseClientChange2 = (value) => {
        setseller(value.value);
    };
    const searchParams = useSearchParams()

    const leadId = searchParams.get('leadId')

    const [FormData, SetFormData] = React.useState({
        closuredate: "",
        Leadid: leadId,
        userId: "",
        expecteddate: "",
        buyername: "",
        SaleRent: "",
        Status: "",
        MOU: "",
        Readyoffplan: "",
        Handoverdate: "",
        Developer: "",
        tName: "",
        tContact: "",
        tEmail: "",
        tNatinality: "",
        tPassport: "",
        tPassportexpiry: "",
        tdob: "",
        tLocalResident: "",
        tEmirated: "",
        tEmiratedexpiry: "",
        directseller: "",
        sName: "",
        sContact: "",
        sEmail: "",
        sNatinality: "",
        sPassport: "",
        sPassportexpiry: "",
        sdob: "",
        sLocalResident: "",
        sEmirated: "",
        sEmiratedexpiry: "",
        Property: "",
        Developername: "",
        bedrooms: "",
        BUA: "",
        Plotarea: "",
        Plot: "",
        unitadd: "",
        Price: "",
        Loyalty: "",
        unitNumber: "",
        Cancelled: "",
        Dewa: "",
        Contract: "",
        Title: "",
        NewTitle: "",
        External: "",
        assigneddate: "",
        agentname:"",
        leadsource:"",
        othercommnet:"",
        approved: 0,
    })
        const [lead, setLead] = useState(null);
      useEffect(() => {
    const fetchLead = async () => {
        try {
            const response = await axios.get(`/api/Lead/${leadId}`);
            const leadData = response.data.data;
            console.log(leadData,"leadData")
            setLead(response.data.data);
            SetFormData(prevFormData => ({
                ...prevFormData,
                buyername: leadData.Name,
                tName: leadData.Name,
                tEmail: leadData.Email,
                tContact: leadData.Phone,
                assigneddate: leadData.LeadAssignedDate,
                agentname:leadData.Assigned.username,
                leadsource:leadData.Source
            }));
        } catch (error) {
            console.error('Error fetching lead:', error);
        }
    };

    if (leadId) {
        fetchLead();
    }
}, [leadId]);
    const handleSelectChange = (FormData, selectedOption) => {
        SetFormData(prevFormData => ({
            ...prevFormData,
            [FormData]: selectedOption.value
        }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {

            const response = await axios.post("/api/invoice/add", FormData);
            console.log("FormData add success", response.data);
            toast.success('Upload successful');
        }
        catch (error) {
            console.log(error);

        }

    }



    return (
        <RootLayout>
            <div className="card-body mt-4">
                <div>
                    <div className='container-fluid'>
                        <div className='row'>
                         <div className='col-md-12 bg-blue text-white text-center pb-0 mb-3'>
                                <h4 className='text-white'>Customer Details</h4>
                            </div>
                             <div className="mb-4 col-md-6">
                                <input disabled className="form-control" type="text"
                                 value={FormData.buyername} onChange={(e) => SetFormData({ ...FormData, buyername: e.target.value })}
                                    placeholder="Buyer Cutomer Name" />
                            </div>
                                                                <div className="mb-4 col-md-6">
                                        <input disabled className="form-control" value={FormData.tContact} type="number" onChange={(e) => SetFormData({ ...FormData, tContact: e.target.value })}
                                            placeholder="Contact Number" />
                                    </div>
                                    <div className="mb-4 col-md-6">
                                        <input disabled className="form-control" value={FormData.tEmail} type="text" onChange={(e) => SetFormData({ ...FormData, tEmail: e.target.value })}
                                            placeholder="Email" />
                                    </div>
                                    
                                     <div className="mb-4 col-md-6">
                                        <input disabled className="form-control" value={FormData.assigneddate} type="text"
                                            placeholder="Assigned Date" />
                                    </div>
                                     <div className="mb-4 col-md-6">
                                        <input disabled className="form-control" value={FormData.agentname} type="text"
                                            placeholder="Agent Name" />
                                    </div>
                                    <div className="mb-4 col-md-6">
                                        <input disabled className="form-control" value={FormData.leadsource} type="text"
                                            placeholder="Lead Source" />
                                    </div>
                            
                            <div className='col-md-12 bg-blue text-white text-center pb-0 mb-3'>
                                <h4 className='text-white'>Deal Details</h4>
                            </div>

                            <div className="mb-4 col-md-6">
                                <input
                                    className="form-control"
                                    type={isDateInput ? 'date' : 'text'}
                                    onFocus={toggleInputType}
                                    onChange={(e) => SetFormData({ ...FormData, closuredate: e.target.value })}
                                    placeholder="Date of Closure"
                                />

                            </div>
                            <div className="mb-4 col-md-6">
                             <SearchableSelect options={options11} onChange={(selectedOption) => handleSelectChange('expecteddate', selectedOption)} placeholder="EOI Collected..." />
                               
                            </div>


                           

                            <div className="mb-4 col-md-6">
                                <SearchableSelect options={options1} onChange={(selectedOption) => handleSelectChange('SaleRent', selectedOption)} placeholder="Sale / Rent..." />
                            </div>
                            <div className="mb-4 col-md-6">
                                <SearchableSelect options={options2} onChange={(selectedOption) => handleSelectChange('Status', selectedOption)} placeholder="Status of Deal..." />
                            </div>
                            <div className="mb-4 col-md-6">
                                <SearchableSelect options={options3} onChange={(selectedOption) => handleSelectChange('MOU', selectedOption)} placeholder="MOU / Contract Signed / SPA Signed..." />
                            </div>
                            <div className="mb-4 col-md-6">
                                <SearchableSelect options={options4} onChange={(selectedOption) => handleSelectChange('Readyoffplan', selectedOption)} placeholder="Ready / Off-plan..." />
                            </div>

                            <div className="mb-4 col-md-6">
                                <input
                                    className="form-control"
                                    type={isDateInput ? 'date' : 'text'}
                                    onFocus={toggleInputType}
                                    onChange={(e) => SetFormData({ ...FormData, Handoverdate: e.target.value })}
                                    placeholder="Handover Date
                                    "
                                />

                            </div>

                            <div className="mb-4 col-md-6">
                                <SearchableSelect options={options8} onChange={(selectedOption) => handleSelectChange('Developer', selectedOption)} placeholder="Direct from Developer..." />
                            </div>
                            {FormData.Developer === 'No' && (
                                <>
                                    <div className='col-md-12 bg-blue text-white text-center pb-0 mb-3'>
                                        <h4 className='text-white'>Buyer Details</h4>
                                    </div>


                                    <div className="mb-4 col-md-6">
                                        <input className="form-control" disabled  value={FormData.tName} type="text" onChange={(e) => SetFormData({ ...FormData, tName: e.target.value })}
                                            placeholder="Buyer/ Tentant Name" />
                                    </div>
                                    <div className="mb-4 col-md-6">
                                        <input disabled className="form-control" value={FormData.tContact} type="text" onChange={(e) => SetFormData({ ...FormData, tContact: e.target.value })}
                                            placeholder="Contact Number" />
                                    </div>
                                    <div className="mb-4 col-md-6">
                                        <input disabled className="form-control" value={FormData.tEmail} type="text" onChange={(e) => SetFormData({ ...FormData, tEmail: e.target.value })}
                                            placeholder="Email" />
                                    </div>
                                    <div className="mb-4 col-md-6">
                                        <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, tNatinality: e.target.value })}
                                            placeholder="Nationality" />
                                    </div>
                                    <div className="mb-4 col-md-6">
                                        <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, tPassport: e.target.value })}
                                            placeholder="Passport Number" />
                                    </div>
                                    <div className="mb-4 col-md-6">
                                        <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, tPassportexpiry: e.target.value })}
                                            placeholder="Passport Expiry" />
                                    </div>
                                    <div className="mb-4 col-md-6">
                                        
                                              <input
                                    className="form-control"
                                    type={isDateInput ? 'date' : 'text'}
                                    onFocus={toggleInputType}
                                    onChange={(e) => SetFormData({ ...FormData, tdob: e.target.value })}
                                    placeholder="Date of Birth"
                                />
                                    </div>
                                    <div className="mb-4 col-md-6">
                                        <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, tLocalResident: e.target.value })}
                                            placeholder="Local/Resident" />
                                    </div>
                                    <div className="mb-4 col-md-6">
                                        <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, tEmirated: e.target.value })}
                                            placeholder="Emirated Id No" />
                                    </div>
                                    <div className="mb-4 col-md-6">
                                        <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, tEmiratedexpiry: e.target.value })}
                                            placeholder="Emirated Expiry" />
                                    </div>
                                </>
                            )}
                            <div className="mb-4 col-md-6">
                                <SearchableSelect options={options9} onChange={(selectedOption) => handleSelectChange('directseller', selectedOption)} placeholder="Direct from Seller / Owner..." />
                            </div>
                            {FormData.directseller === 'Yes' && (
                                <>

                                    <div className='col-md-12 bg-blue text-white text-center pb-0 mb-3'>
                                        <h4 className='text-white'>Seller / Owner Details</h4>
                                    </div>
                                    <div className="mb-4 col-md-6">
                                        <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, sName: e.target.value })}
                                            placeholder="Name of Seller or Owner
                                            " />
                                    </div>
                                    <div className="mb-4 col-md-6">
                                        <input className="form-control" type="number" onChange={(e) => SetFormData({ ...FormData, sContact: e.target.value })}
                                            placeholder="Contact Number" />
                                    </div>
                                    <div className="mb-4 col-md-6">
                                        <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, sEmail: e.target.value })}
                                            placeholder="Email" />
                                    </div>
                                    <div className="mb-4 col-md-6">
                                        <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, sNatinality: e.target.value })}
                                            placeholder="Nationality" />
                                    </div>
                                    <div className="mb-4 col-md-6">
                                        <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, sPassport: e.target.value })}
                                            placeholder="Passport Number" />
                                    </div>
                                    <div className="mb-4 col-md-6">
                                        <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, sPassportexpiry: e.target.value })}
                                            placeholder="Passport Expiry" />
                                    </div>
                                    <div className="mb-4 col-md-6">
                                     
                                              <input
                                    className="form-control"
                                    type={isDateInput ? 'date' : 'text'}
                                    onFocus={toggleInputType}
                                    onChange={(e) => SetFormData({ ...FormData, sdob: e.target.value })}
                                    placeholder="Date of Birth"
                                />
                                    </div>
                                    <div className="mb-4 col-md-6">
                                        <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, sLocalResident: e.target.value })}
                                            placeholder="Local / Resident" />
                                    </div>
                                    <div className="mb-4 col-md-6">
                                        <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, sEmirated: e.target.value })}
                                            placeholder="Emirated Id No" />
                                    </div>
                                    <div className="mb-4 col-md-6">
                                        <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, sEmiratedexpiry: e.target.value })}
                                            placeholder="Emirated Expiry" />
                                    </div>
                                </>
                            )}
                            <div className='col-md-12 bg-blue text-white text-center pb-0 mb-3'>
                                <h4 className='text-white'>Property Type</h4>
                            </div>
                            <div className="mb-4 col-md-6">
                                <SearchableSelect options={options5} onChange={(selectedOption) => handleSelectChange('Property', selectedOption)} placeholder="Property Type..." />
                            </div>
                            <div className="mb-4 col-md-6">
                                <SearchableSelect options={options6} onChange={(selectedOption) => handleSelectChange('Developername', selectedOption)} placeholder="Developer..." />
                            </div>
                            <div className="mb-4 col-md-6">
                                <SearchableSelect options={options7} onChange={(selectedOption) => handleSelectChange('bedrooms', selectedOption)} placeholder="No. of bedrooms..." />
                            </div>
                            <div className="mb-4 col-md-6">
                                <input className="form-control" type="number" onChange={(e) => SetFormData({ ...FormData, BUA: e.target.value })}
                                    placeholder="BUA in Sq.ft" />
                            </div>
                            <div className="mb-4 col-md-6">
                                <input className="form-control" type="number" onChange={(e) => SetFormData({ ...FormData, Plotarea: e.target.value })}
                                    placeholder="Plot area in Sq.ft" />
                            </div>
                            <div className="mb-4 col-md-6">
                                <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, Plot: e.target.value })}
                                    placeholder="Plot No" />
                            </div>
                            <div className="mb-4 col-md-6">
                                <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, unitadd: e.target.value })}
                                    placeholder="Unit Complete Address " />
                            </div>
                            <div className="mb-4 col-md-6">
                                <input className="form-control" type="number" onChange={(e) => SetFormData({ ...FormData, Price: e.target.value })}
                                    placeholder="Price" />
                            </div>
                            <div className="mb-4 col-md-6">
                                <input className="form-control" type="number" onChange={(e) => SetFormData({ ...FormData, Loyalty: e.target.value })}
                                    placeholder="Loyalty Bonus (% and Amount)" />
                            </div>
                            <div className="mb-4 col-md-6">
                                <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, unitNumber: e.target.value })}
                                    placeholder="Unit Number" />
                            </div>
                            <div className="mb-4 col-md-6">
                                <input className="form-control" type="number" onChange={(e) => SetFormData({ ...FormData, Cancelled: e.target.value })}
                                    placeholder="Cancelled Price" />
                            </div>
                            <div className="mb-4 col-md-6">
                                <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, Dewa: e.target.value })}
                                    placeholder="DEWA Premise" />
                            </div>
                            <div className="mb-4 col-md-6">
                                <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, Contract: e.target.value })}
                                    placeholder="Contract Number" />
                            </div>
                            <div className="mb-4 col-md-6">
                                <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, Title: e.target.value })}
                                    placeholder="Title Deed" />
                            </div>
                            <div className="mb-4 col-md-6">
                                <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, NewTitle: e.target.value })}
                                    placeholder="New Title Deed" />
                            </div>
                            <div className="mb-4 col-md-6">
                                <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, External: e.target.value })}
                                    placeholder="External Agent " />
                            </div>
                             <div className="mb-4 col-md-6">
                                <input className="form-control" type="text" onChange={(e) => SetFormData({ ...FormData, othercommnet: e.target.value })}
                                    placeholder="Other comments " />
                            </div>

                            <div className="mb-4">
                                <button className='btn btn-primary w-100' onClick={onSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </RootLayout >


    )
}

export default Invoice
