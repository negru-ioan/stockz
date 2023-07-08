"use client";

import { useContext, useEffect } from "react";
import LineChart from "./LineChart";
import { StockContext } from "@/context/StockContext";
import { SelectedTab } from "@/types";
import Tabs from "./Tabs";

function ChartPanel({ symbol }: { symbol: string }) {
   const { stock, tabs, selectedTab, setSelectedTab, changeStock, changeTab } =
      useContext(StockContext);

   useEffect(() => {
      changeStock({
         symbol,
         interval: "1month",
         outputsize: "30",
         format: "json",
      });
   }, []);

   return (
      <div className="box justify-center pt-0 mb-12 mt-[75px] sm:my-7">
         <div className="flex flex-col max-sm:flex-col-reverse items-center w-full">
            <div className="flex justify-between w-full max-sm:p-2 sm:px-5 sm:py-3 items-center">
               <h1 className="text-2xl max-sm:hidden">
                  {stock.meta.symbol}
                  {" · "}
                  <span className="text-apple-400">{stock.meta.exchange}</span>
               </h1>
               <p className="relative top-0 left-0 text-xl max-sm:hidden">
                  ${Number(stock.values[0].open).toFixed(2)}
               </p>
               <div className="max-sm:w-full">
                  <Tabs
                     tabs={tabs}
                     selectedTab={selectedTab}
                     onClick={(tab) => changeTab(tab, symbol)}
                  />
               </div>
            </div>
            <div className="w-full flex mx-auto my-auto">
               <div className="p-1 pl-0 w-full md:h-52 lg:h-96 my-auto">
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
