"use client";
import BarChart from "@/components/BarChart";
import ChartPanel from "@/components/ChartPanel";
import Tabs from "@/components/Tabs";
import { StockContext } from "@/context/StockContext";
import fetchAllStockData from "@/fetch/fetchAllStockData";
import megaStock from "@/megaStock";
import millify from "millify";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";

function StockPage() {
   const path = usePathname();
   const symbol = path.substring(path.lastIndexOf("/") + 1);
   const [data, setData] = useState<number[]>([]);
   const [labels, setLabels] = useState<string[]>([]);
   const [selected, setSelected] = useState("pe");

   const { setMegaStock } = useContext(StockContext);

   function splitDataLabels(selected: string) {
      const newData: number[] = [];
      const newLabels: string[] = [];

      megaStock.basicFinancials.series.annual[selected]
         .slice(0, 22)
         .forEach((obj) => {
            newData.push(obj.v);
            newLabels.push(obj.period.slice(0, 4));
         });
      setData(newData);
      setLabels(newLabels);
      setSelected(selected);
   }

   useEffect(() => {
      splitDataLabels("pe");
   }, []);

   // useEffect(() => {
   //    fetchAllStockData(symbol)
   //       .then((result) => {
   //          setMegaStock(result);
   //          console.log("xyxy", result);
   //       })
   //       .catch((error) => {
   //          console.error(error);
   //       });
   // }, []);

   function camelCase(str: string) {
      return str
         .replace(/(?:^\w|[A-Z]|\b\w)/g, function (match, index) {
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
         })
         .replace(/\s+/g, "");
   }

   function toTitleCase(str: string) {
      return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
         return match.toUpperCase();
      });
   }
   // console.log(megaStock.basicFinancials.series);

   return (
      <>
         <div className="flex flex-col gap-5 w-full">
            <div className="flex gap-3 w-full">
               <ChartPanel symbol={symbol} />
               <div className="w-[450px] h-auto bg-white border border-slate-400 rounded-lg my-7 shadow-xl">
                  <div className="text-base p-4 space-y-[5px]">
                     <h1 className="text-2xl pb-6">Details</h1>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">Market Cap</p>
                        <p className="font-semibold text-slate-900">
                           {millify(
                              megaStock.companyProfile2.marketCapitalization *
                                 1000_000
                           )}
                        </p>
                     </div>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">Shares Outstanding</p>
                        <p className="font-semibold text-slate-900">
                           {millify(
                              megaStock.companyProfile2.shareOutstanding *
                                 1000_000
                           )}
                        </p>
                     </div>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">Trading Volume (10d)</p>
                        <p className="font-semibold text-slate-900">
                           {millify(
                              megaStock.basicFinancials.metric[
                                 "10DayAverageTradingVolume"
                              ] * 1000_000
                           )}
                        </p>
                     </div>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">PE Ratio (Annual)</p>
                        <p className="font-semibold text-slate-900">
                           {megaStock.basicFinancials.metric.peAnnual.toFixed(
                              1
                           )}
                        </p>
                     </div>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">Beta</p>
                        <p className="font-semibold text-slate-900">
                           {megaStock.basicFinancials.metric.beta.toFixed(2)}
                        </p>
                     </div>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">EPS (Annual)</p>
                        <p className="font-semibold text-slate-900">
                           {megaStock.basicFinancials.metric.epsAnnual.toFixed(
                              2
                           )}
                           $
                        </p>
                     </div>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">Dividend per Share</p>
                        <p className="font-semibold text-slate-900">
                           {megaStock.basicFinancials.metric.dividendPerShareAnnual.toFixed(
                              2
                           )}
                        </p>
                     </div>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">Revenue per Share</p>
                        <p className="font-semibold text-slate-900">
                           {megaStock.basicFinancials.metric.revenuePerShareAnnual.toFixed(
                              2
                           )}
                        </p>
                     </div>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">EBITDA per Share</p>
                        <p className="font-semibold text-slate-900">
                           {megaStock.basicFinancials.metric.ebitdPerShareAnnual.toFixed(
                              2
                           )}
                        </p>
                     </div>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">P/B Ratio</p>
                        <p className="font-semibold text-slate-900">
                           {megaStock.basicFinancials.metric.pbAnnual.toFixed(
                              2
                           )}
                        </p>
                     </div>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">52 Week High</p>
                        <p className="font-semibold text-slate-900">
                           {megaStock.basicFinancials.metric[
                              "52WeekHigh"
                           ].toFixed(2)}
                           $
                        </p>
                     </div>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">52 Week Low</p>
                        <p className="font-semibold text-slate-900">
                           {megaStock.basicFinancials.metric[
                              "52WeekLow"
                           ].toFixed(2)}
                           $
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="grid grid-cols-4 gap-3 w-full items-center">
               <div className="col-span-3 h-full p-4 bg-white border border-slate-500 rounded-lg overflow-hidden">
                  <div className="bar_chart_tabs w-[997px] overflow-x-scroll">
                     <Tabs
                        selectedTab={toTitleCase(camelCase(selected))}
                        tabs={[
                           "Pe",
                           "Eps",
                           "Pb",
                           "Roe",
                           "Roa",
                           "Gross Margin",
                           "Net Margin",
                           "Current Ratio",
                           "Sales Per Share",
                           "Rotc",
                           "Ebit Per Share",
                        ]}
                        // tabs={Object.keys(
                        //    megaStock.basicFinancials.series.annual
                        // ).map(
                        //    (str) =>
                        //       str[0].toUpperCase() +
                        //       str
                        //          .slice(1)
                        //          .replace(/([A-Z])/g, " $1")
                        //          .trim()
                        // )}
                        onClick={(str) => splitDataLabels(camelCase(str))}
                     />
                  </div>
                  <BarChart data={data} labels={labels} label={selected} />
               </div>
               <div className="col-span-1 h-auto bg-white border border-slate-400 rounded-lg my-7 shadow-xl">
                  <div className="text-base p-4 space-y-[5px]">
                     <h1 className="text-2xl pb-6">Details</h1>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">Market Cap</p>
                        <p className="font-semibold text-slate-900">
                           {millify(
                              megaStock.companyProfile2.marketCapitalization *
                                 1000_000
                           )}
                        </p>
                     </div>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">Shares Outstanding</p>
                        <p className="font-semibold text-slate-900">
                           {millify(
                              megaStock.companyProfile2.shareOutstanding *
                                 1000_000
                           )}
                        </p>
                     </div>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">Trading Volume (10d)</p>
                        <p className="font-semibold text-slate-900">
                           {millify(
                              megaStock.basicFinancials.metric[
                                 "10DayAverageTradingVolume"
                              ] * 1000_000
                           )}
                        </p>
                     </div>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">PE Ratio (Annual)</p>
                        <p className="font-semibold text-slate-900">
                           {megaStock.basicFinancials.metric.peAnnual.toFixed(
                              1
                           )}
                        </p>
                     </div>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">Beta</p>
                        <p className="font-semibold text-slate-900">
                           {megaStock.basicFinancials.metric.beta.toFixed(2)}
                        </p>
                     </div>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">EPS (Annual)</p>
                        <p className="font-semibold text-slate-900">
                           {megaStock.basicFinancials.metric.epsAnnual.toFixed(
                              2
                           )}
                           $
                        </p>
                     </div>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">Dividend per Share</p>
                        <p className="font-semibold text-slate-900">
                           {megaStock.basicFinancials.metric.dividendPerShareAnnual.toFixed(
                              2
                           )}
                        </p>
                     </div>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">Revenue per Share</p>
                        <p className="font-semibold text-slate-900">
                           {megaStock.basicFinancials.metric.revenuePerShareAnnual.toFixed(
                              2
                           )}
                        </p>
                     </div>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">EBITDA per Share</p>
                        <p className="font-semibold text-slate-900">
                           {megaStock.basicFinancials.metric.ebitdPerShareAnnual.toFixed(
                              2
                           )}
                        </p>
                     </div>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">P/B Ratio</p>
                        <p className="font-semibold text-slate-900">
                           {megaStock.basicFinancials.metric.pbAnnual.toFixed(
                              2
                           )}
                        </p>
                     </div>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">52 Week High</p>
                        <p className="font-semibold text-slate-900">
                           {megaStock.basicFinancials.metric[
                              "52WeekHigh"
                           ].toFixed(2)}
                           $
                        </p>
                     </div>
                     <div className="flex justify-between items-center">
                        <p className="text-slate-700">52 Week Low</p>
                        <p className="font-semibold text-slate-900">
                           {megaStock.basicFinancials.metric[
                              "52WeekLow"
                           ].toFixed(2)}
                           $
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default StockPage;
