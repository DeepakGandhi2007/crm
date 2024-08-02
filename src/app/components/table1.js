"use client";
import { useState, useEffect, useCallback } from "react";
import { Spin } from "antd";
const TableOne = ({ devData, loading, finalData }) => {
     const [totalBudget,setTotalBudget] = useState(0)
    const [totalLeads, setTotalLeads] = useState(0)
    const [totalSpend, setTotalSpend] = useState(0)
    const [totalCost, setTotalCost] = useState(0)
    const calc = () => {
         devData.map((data)=>{
          setTotalBudget(prev=> prev + (Number(data.dailyBudget)/100))
          
          setTotalLeads(prev=> prev + Number(data.leads))
          setTotalSpend(prev=> prev + (data.spend))
          setTotalCost(prev=> prev + (data.leads == 0 ? Number(data.leads) : Number(data.spend) / Number(data.leads)  ))
      })
    }
    
     useEffect(()=>{
     calc()
  }, [finalData])
 
 
  return (
    <div
      className={`w-full transition-all duration-200 h-[500px] mt-10 relative overflow-y-auto  ${
        finalData.length != 0
          ? "shadow-md rounded-lg"
          : "flex justify-center items-center"
      }`}
    >
      {devData.length != 0 && !loading ? (
        <table class="w-full   border-collapse  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs sticky top-0 left-0 text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-3 py-3">
                Campaign Name
              </th>
              <th scope="col" className="px-3 py-3">
                Daily Budget
              </th>
              <th scope="col" className="px-2 py-3">
                Spend
              </th>
              <th scope="col" className="px-2 py-3">
                Results
              </th>
              <th scope="col" className="px-2 py-3">
                Cost Result
              </th>
            </tr>
          </thead>
          <tbody>
            {devData.map((devs, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b hover:bg-gray-50  "
                >
                  <td class="px-3 py-3 text-gray-900"> {devs.campaignName} </td>

                  <td class="px-3 py-3 text-gray-900">
                    {devs.dailyBudget ? devs.dailyBudget / 100 : 0}
                  </td>

                  <td class="px-2 py-3 text-gray-900">{devs.spend}</td>
                  <td class="px-2 py-3 text-gray-900">{devs.leads}</td>
                  <td class="px-2 py-3 text-gray-900">
                    {devs.leads == 0
                      ? devs.leads
                      : (devs.spend / devs.leads).toFixed(2)}
                  </td>
                </tr>
              );
            })}
            
             {
               !loading && devData.length != 0 ?  <tr  className="bg-green-500 text-black border-b   "> 
                 <td class="px-3 py-3 text-gray-900">Total</td>
                 <td class="px-3 py-3 text-gray-90 ">{(totalBudget).toFixed(2)}</td>
                 <td class="px-2 py-3 text-gray-90">{(totalSpend).toFixed(2)}</td>
                 <td class="px-2 py-3 text-gray-90">{totalLeads}</td>
                 <td class="px-2 py-3 text-gray-90">{(totalCost).toFixed(2)}</td>
                 
            </tr>: null
           }
          </tbody>
        </table>
      ) : loading ? (
        <Spin />
      ) : (
        <p className={`text-3xl !m-0 font-Satoshi font-[500] `}>
          No data available.
        </p>
      )}
    </div>
  );
};

export default TableOne;
