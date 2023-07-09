"use client";

import React, { createContext, useState, useEffect } from "react";
import fetchStockPrices from "../fetch/fetchStockPrice";
import { Props_fetchStockPrices } from "../types";
import meeegaStock from "@/megaStock";
const tsla = {
   meta: {
      symbol: "TSLA",
      interval: "1month",
      currency: "USD",
      exchange_timezone: "America/New_York",
      exchange: "NASDAQ",
      mic_code: "XNGS",
      type: "Common Stock",
   },
   values: [
      {
         datetime: "2023-06-01",
         open: "420.69000",
         high: "276.98999",
         low: "199.37000",
         close: "257.53000",
         volume: "3325092746",
      },
   ],
   status: "NOT OK",
};

const tabs = ["1h", "1day", "1month", "1week"];

export const StockContext = createContext({
   megaStock: meeegaStock,
   // setMegaStock: (stock: object) => {},
   setMegaStock: (stock: any) => {},
   stock: tsla,
   selectedTab: tabs[2],
   tabs,
   changeTab: (tab: string, symbol: string) => {},
   changeStock: async (stock: Props_fetchStockPrices | null) => {},
   setSelectedTab: (tab: string) => {},
});

export const StockProvider = ({ children }: any) => {
   const [selectedTab, setSelectedTab] = useState(tabs[2]);
   const [stock, setStock] = useState(tsla);
   const [megaStock, setMegaStock] = useState(meeegaStock);
   const options: Props_fetchStockPrices = {
      symbol: "TSLA",
      interval: "1month",
      outputsize: "30",
      format: "json",
   };

   async function changeStock(stock: Props_fetchStockPrices | null) {
      const options: Props_fetchStockPrices = {
         symbol: stock?.symbol || "TSLA",
         interval: stock?.interval || "1month",
         outputsize: stock?.outputsize || "30",
         format: stock?.format || "json",
      };
      const res = await fetchStockPrices(options);
      setStock(res);
      return res;
   }

   // function changeTab() {
   //    changeStock({ ...options, interval: selectedTab as SelectedTab }).then(
   //       (data): any => setStock(data)
   //    );
   // }

   function changeTab(tab: string, symbol: string) {
      changeStock({ ...options, symbol, interval: tab }).then((data): any =>
         setStock(data)
      );
      setSelectedTab(tab);
   }

   // useEffect(() => {
   //    changeTab(); // Fetch stock
   // }, [selectedTab]);

   return (
      <StockContext.Provider
         value={{
            megaStock,
            setMegaStock,
            stock,
            selectedTab,
            tabs,
            changeStock,
            setSelectedTab,
            changeTab,
         }}
      >
         {children}
      </StockContext.Provider>
   );
};
