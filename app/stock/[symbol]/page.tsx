"use client";
import BarChart from "@/components/BarChart";
import ChartPanel from "@/components/ChartPanel";
import Dropdown from "@/components/Dropdown";
import Tabs from "@/components/Tabs";
import { StockContext } from "@/context/StockContext";
import fetchAllStockData from "@/fetch/fetchAllStockData";
import News from "@/components/News";
import millify from "millify";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";

function StockPage() {
   const path = usePathname();
   const symbol = path.substring(path.lastIndexOf("/") + 1);
   const [data, setData] = useState<number[]>([]);
   const [labels, setLabels] = useState<string[]>([]);
   const [selected, setSelected] = useState("eps");
   const [query, setQuery] = useState("");
   const [timeFrame, setTimeFrame] = useState("annual");
   const { megaStock, setMegaStock } = useContext(StockContext);

   function splitDataLabels() {
      const newData: number[] = [];
      const newLabels: string[] = [];

      //  const arr = (megaStock?.basicFinancials?.series?.[timeFrame]?.[selected] as { period: string; v: number }[]) || [];
      const arr = (megaStock as any)?.basicFinancials?.series?.[timeFrame]?.[
         selected
      ];

      arr.slice(0, 22).forEach((obj: { period: string; v: number }) => {
         newData.unshift(obj?.v);
         if (timeFrame === "annual") {
            newLabels.unshift(obj.period.slice(0, 4));
         } else {
            const formattedDate = obj.period.replace(
               /^(\d{4})-(\d{2})-(\d{2})$/,
               "$2/$1"
            );
            newLabels.unshift(formattedDate);
         }
      });

      setData(newData);
      setLabels(newLabels);
   }

   useEffect(() => {
      splitDataLabels();
   }, [selected, timeFrame]);

   useEffect(() => {
      fetchAllStockData(symbol)
         .then((result) => {
            setMegaStock(result);
         })
         .catch((error) => {
            console.error(error);
         });
   }, []);

   function camelCase(str: string) {
      return str
         .replace(/(?:^\w|[A-Z]|\b\w)/g, function (match, index) {
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
         })
         .replace(/\s+/g, "");
   }

   // function toTitleCase(str: string) {
   //    return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
   //       return match.toUpperCase();
   //    });
   // }

   const sameKeysSeries = [
      "bookValue",
      "cashRatio",
      "currentRatio",
      "ebitPerShare",
      "eps",
      "ev",
      "fcfMargin",
      "grossMargin",
      "longtermDebtTotalAsset",
      "longtermDebtTotalCapital",
      "longtermDebtTotalEquity",
      "netDebtToTotalCapital",
      "netDebtToTotalEquity",
      "netMargin",
      "operatingMargin",
      "pb",
      "pretaxMargin",
      "ptbv",
      "quickRatio",
      "salesPerShare",
      "sgaToSale",
      "tangibleBookValue",
      "totalDebtToEquity",
      "totalDebtToTotalAsset",
      "totalDebtToTotalCapital",
      "totalRatio",
   ];

   return (
      <>
         <div className="flex flex-col gap-5 w-full">
            <div className="flex gap-1 sm:gap-3 w-full flex-col lg:flex-row">
               {" "}
               <ChartPanel symbol={symbol} />
               <div className="box w-full flex flex-col justify-between lg:w-[450px] h-auto bg-white my-7 shadow-xl max-sm:mt-0">
                  <h1 className="text-3xl p-3">Details</h1>
                  <div className="text-base p-4 pb-6 space-y-[5px] block sm:flex lg:block w-full items-center gap-4">
                     <div className="w-full">
                        <div className="flex justify-between items-center">
                           <p className="gray_txt">Market Cap</p>
                           <p className="font-semibold text-slate-900 dark:text-swamp-40">
                              {millify(
                                 (megaStock?.companyProfile2
                                    ?.marketCapitalization ?? 0) * 1000000
                              )}
                           </p>
                        </div>
                        <div className="flex justify-between items-center">
                           <p className="gray_txt">Shares Outstanding</p>
                           <p className="font-semibold text-slate-900 dark:text-swamp-40">
                              {millify(
                                 (megaStock?.companyProfile2
                                    ?.shareOutstanding ?? 0) * 1000000
                              )}
                           </p>
                        </div>
                        <div className="flex justify-between items-center">
                           <p className="gray_txt">Trading Volume (10d)</p>
                           <p className="font-semibold text-slate-900 dark:text-swamp-40">
                              {millify(
                                 (megaStock?.basicFinancials?.metric?.[
                                    "10DayAverageTradingVolume"
                                 ] ?? 0) * 1000000
                              )}
                           </p>
                        </div>
                        <div className="flex justify-between items-center">
                           <p className="gray_txt">PE Ratio (Annual)</p>
                           <p className="font-semibold text-slate-900 dark:text-swamp-40">
                              {(
                                 megaStock?.basicFinancials?.metric?.peAnnual ??
                                 0
                              ).toFixed(1)}
                           </p>
                        </div>
                        <div className="flex justify-between items-center">
                           <p className="gray_txt">Beta</p>
                           <p className="font-semibold text-slate-900 dark:text-swamp-40">
                              {(
                                 megaStock?.basicFinancials?.metric?.beta ?? 0
                              ).toFixed(2)}
                           </p>
                        </div>
                        <div className="flex justify-between items-center">
                           <p className="gray_txt">EPS (Annual)</p>
                           <p className="font-semibold text-slate-900 dark:text-swamp-40">
                              {(
                                 megaStock?.basicFinancials?.metric
                                    ?.epsAnnual ?? 0
                              ).toFixed(2)}
                              $
                           </p>
                        </div>
                        <div className="flex justify-between items-center">
                           <p className="gray_txt">ROI (Annual)</p>
                           <p className="font-semibold text-slate-900 dark:text-swamp-40">
                              {(
                                 megaStock?.basicFinancials?.metric
                                    ?.roiAnnual ?? 0
                              ).toFixed(2)}
                              $
                           </p>
                        </div>
                     </div>

                     <div className="w-full">
                        <div className="flex justify-between items-center">
                           <p className="gray_txt">Dividend per Share</p>
                           <p className="font-semibold text-slate-900 dark:text-swamp-40">
                              {(
                                 megaStock?.basicFinancials?.metric
                                    ?.dividendPerShareAnnual ?? 0
                              ).toFixed(2)}
                           </p>
                        </div>
                        <div className="flex justify-between items-center">
                           <p className="gray_txt">Revenue per Share</p>
                           <p className="font-semibold text-slate-900 dark:text-swamp-40">
                              {(
                                 megaStock?.basicFinancials?.metric
                                    ?.revenuePerShareAnnual ?? 0
                              ).toFixed(2)}
                           </p>
                        </div>
                        <div className="flex justify-between items-center">
                           <p className="gray_txt">EBITDA per Share</p>
                           <p className="font-semibold text-slate-900 dark:text-swamp-40">
                              {(
                                 megaStock?.basicFinancials?.metric
                                    ?.ebitdPerShareAnnual ?? 0
                              ).toFixed(2)}
                           </p>
                        </div>
                        <div className="flex justify-between items-center">
                           <p className="gray_txt">P/B Ratio</p>
                           <p className="font-semibold text-slate-900 dark:text-swamp-40">
                              {(
                                 megaStock?.basicFinancials?.metric?.pbAnnual ??
                                 0
                              ).toFixed(2)}
                           </p>
                        </div>
                        <div className="flex justify-between items-center">
                           <p className="gray_txt">52 Week High</p>
                           <p className="font-semibold text-slate-900 dark:text-swamp-40">
                              {Number(
                                 megaStock?.basicFinancials?.metric?.[
                                    "52WeekHigh"
                                 ] ?? 0
                              ).toFixed(2)}
                              $
                           </p>
                        </div>
                        <div className="flex justify-between items-center">
                           <p className="gray_txt">52 Week Low</p>
                           <p className="font-semibold text-slate-900 dark:text-swamp-40">
                              {Number(
                                 megaStock?.basicFinancials?.metric?.[
                                    "52WeekLow"
                                 ] ?? 0
                              ).toFixed(2)}
                              $
                           </p>
                        </div>
                        <div className="flex justify-between items-center">
                           <p className="gray_txt">Beta</p>
                           <p className="font-semibold text-slate-900 dark:text-swamp-40">
                              {Number(
                                 megaStock?.basicFinancials?.metric?.beta
                              ).toFixed(2)}
                              $
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex gap-3 w-full items-center">
               <div className="box h-auto p-4">
                  <div className="flex w-full justify-between items-center gap-2 sm:px-2">
                     <Tabs
                        selectedTab={timeFrame}
                        tabs={["annual", "quarterly"]}
                        onClick={(tab: string) => setTimeFrame(tab)}
                     />

                     <p className="text-2xl font-semibold text-slate-900 dark:text-swamp-40 w-full text-center max-sm:hidden">
                        {megaStock?.basicFinancials.symbol.toUpperCase()}
                     </p>

                     <Dropdown
                        query={query}
                        onClick={(val) => setSelected(camelCase(val))}
                        setQuery={setQuery}
                        selected={selected}
                        setSelected={setSelected}
                        options={sameKeysSeries.map(
                           (str) =>
                              str[0].toUpperCase() +
                              str
                                 .slice(1)
                                 .replace(/([A-Z])/g, " $1")
                                 .trim()
                        )}
                     />
                  </div>
                  <BarChart data={data} labels={labels} label={selected} />
               </div>
            </div>

            <News symbol={symbol} />
         </div>
      </>
   );
}

export default StockPage;
