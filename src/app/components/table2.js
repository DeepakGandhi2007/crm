"use client";
import { useState, useEffect } from "react";
import { Spin } from "antd";
const TableTwo = ({ devData, loading }) => {
  const [tableData, setTableData] = useState([]);
    const [totalBudget,setTotalBudget] = useState(0)
    const [totalLeads, setTotalLeads] = useState(0)
    const [totalSpend, setTotalSpend] = useState(0)
    const [totalCost, setTotalCost] = useState(0)
  useEffect(() => {
    const aggregatedData = devData.reduce((acc, curr) => {
      const dailyBudget = Number(curr.dailyBudget) || 0;
      const Leads = Number(curr.leads);
      const spend = Number(curr.spend);
      if (acc[curr.country]) {
        acc[curr.country].leads += Leads;
        acc[curr.country].spend += spend;
        acc[curr.country].dailyBudget += dailyBudget;
      } else {
        acc[curr.country] = {
          country: curr.country,
          leads: Number(curr.leads),
          spend: Number(curr.spend),
          dailyBudget,
        };
      }
      return acc;
    }, {});
    const result = Object.values(aggregatedData);
    setTableData(result);
    
  }, []);
  
  useEffect(()=>{
      tableData.map((data)=>{
          setTotalBudget(prev=> prev + (data.dailyBudget/100))
          setTotalLeads(prev=> prev + (data.leads))
          setTotalSpend(prev=> prev + (data.spend))
          setTotalCost(prev=> prev + (data.spend / data.leads))
      })
  }, [tableData])
  
  function budgetPercent(budget, spend) {
    const calc = ((budget/100) * 100) / (totalBudget) ;
    return calc.toFixed(2);
  }
  function leadsPercent(leads) {
    const calc = ((leads) * 100) / (totalLeads) ;
    return calc.toFixed(2);
  }
  
  return (
    <div
      className={`w-full transition-all duration-200  mt-10 relative overflow-y-auto  ${
        devData.length != 0 && loading
          ? "shadow-md rounded-lg"
          : "flex justify-center items-center"
      }`}
    >
      {devData.length != 0 && !loading ? (
        <table class="w-full   border-collapse  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs sticky top-0 left-0 text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-3 py-3">
                Country
              </th>
              <th scope="col" className="px-3 py-3">
                Total Budget AED
              </th>
              <th scope="col" className="px-2 py-3">
                Budget %
              </th>
              <th scope="col" className="px-2 py-3">
                Total Spend AED
              </th>
              <th scope="col" className="px-2 py-3">
                Total Leads
              </th>
              <th scope="col" className="px-2 py-3">
                Cost/Lead AED
              </th>
              <th scope="col" className="px-2 py-3">
                Lead %
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((devs, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b hover:bg-gray-50  "
                >
                  <td class="px-3 py-3 text-gray-900"> {devs.country} </td>

                  <td class="px-3 py-3 text-gray-900">
                    {devs.dailyBudget
                      ? (devs.dailyBudget / 100).toFixed(2)
                      : 0.0}
                  </td>

                  <td class="px-2 py-3 text-gray-900">
                    {budgetPercent(devs.dailyBudget, devs.spend)}
                  </td>
                  <td class="px-2 py-3 text-gray-900">{devs.spend.toFixed(2)}</td>
                  <td class="px-2 py-3 text-gray-900">{devs.leads}</td>
                  <td class="px-2 py-3 text-gray-900">
                    {
                      (devs.spend / devs.leads).toFixed(2)
                    }
                  </td>
                  <td class="px-2 py-3 text-gray-900">
                    {
                        leadsPercent(devs.leads)
                    }
                  </td>
                </tr>
              );
            })}
           {
               !loading && tableData.length != 0 ?  <tr  className="bg-green-500 text-black border-b   "> 
                 <td class="px-3 py-3 text-gray-900">Total</td>
                 <td class="px-3 py-3 text-gray-90 ">{totalBudget.toFixed(2)}</td>
                 <td class="px-2 py-3 text-gray-90">100</td>
                 <td class="px-2 py-3 text-gray-90">{totalSpend.toFixed(2)}</td>
                 <td class="px-2 py-3 text-gray-90">{totalLeads}</td>
                 <td class="px-2 py-3 text-gray-90">{totalCost.toFixed(2)}</td>
                 <td class="px-2 py-3 text-gray-90">100</td>
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

export default TableTwo;
