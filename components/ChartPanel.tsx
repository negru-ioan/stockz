"use client";

import { useContext, useState, useEffect } from "react";
import LineChart from "./LineChart";
import { StockContext } from "@/context/StockContext";

function ChartPanel() {
   const { stock, tabs, selectedTab, setSelectedTab } =
      useContext(StockContext);
   const translateTabs: { [key: string]: string } = {
      "1h": "1H",
      "1day": "1D",
      "1month": "1M",
      "1week": "1W",
   };
   return (
      <div className="flex justify-center w-full rounded-lg border border-gray-400 pt-0 bg-white my-[75px] sm:my-7">
         <div className="flex flex-col max-sm:flex-col-reverse items-center w-full">
            {/* Title */}
            <div className="flex justify-between w-full max-sm:p-2 sm:px-5 sm:py-3 items-center">
               <h1 className="text-2xl max-sm:hidden">
                  {stock.meta.symbol}{" "}
                  <span className="text-apple-400">· 1D · NASDAQ</span>
               </h1>
               <p className="relative top-0 left-0 text-xl max-sm:hidden">
                  ${Number(stock.values[0].open).toFixed(2)}
               </p>
               <div className="max-sm:w-full">
                  {/* <Tabs tabs={tabs} selectedTab={selectedTab} changeTab={changeTab} /> */}

                  <div className="max-sm:w-full grid grid-cols-4 gap-2 h-min rounded-lg bg-apple-100 mt-1 p-1">
                     {tabs.map((tab) => {
                        return (
                           <div
                              key={tab}
                              onClick={() => setSelectedTab(tab)}
                              className={`border-slate-200 py-1 px-3 cursor-pointer ${
                                 selectedTab === tab
                                    ? "bg-white text-black rounded-lg border border-slate-300"
                                    : "text-slate-600"
                              }`}
                           >
                              <p className="text-sm text-center">
                                 {translateTabs[tab]}
                              </p>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>
            <div className="w-full flex mx-auto my-auto">
               <div className="p-1 pl-0 w-full md:h-52 lg:h-96 my-auto sm:shadow-xl">
                  <LineChart
                     data={stock.values
                        .map((obj) => parseFloat(Number(obj.open).toFixed(2)))
                        .reverse()}
                     labels={stock.values.map((obj) => obj.datetime).reverse()}
                     status={stock.status}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default ChartPanel;
