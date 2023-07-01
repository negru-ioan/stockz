"use client";

import React, { createContext, useState, useEffect } from "react";
import fetchStockPrices from "../fetch/fetchStockPrice";
import { Props_fetchStockPrices, SelectedTab } from "../types";

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
         open: "202.59000",
         high: "276.98999",
         low: "199.37000",
         close: "257.53000",
         volume: "3325092746",
      },
   ],
   status: "NOT OK",
};

async function changeStock(stock: Props_fetchStockPrices | null) {
   const options: Props_fetchStockPrices = {
      symbol: stock?.symbol || "TSLA",
      interval: stock?.interval || "1month",
      outputsize: stock?.outputsize || "30",
      format: stock?.format || "json",
   };
   return await fetchStockPrices(options);
}

const tabs = ["1h", "1day", "1month", "1week"];

export const StockContext = createContext({
   stock: tsla,
   changeStock,
   selectedTab: tabs[2],
   tabs,
   setSelectedTab: (tab: string) => {},
});

export const StockProvider = ({ children }: any) => {
   const [selectedTab, setSelectedTab] = useState(tabs[2]);
   const [stock, setStock] = useState(tsla);
   const options: Props_fetchStockPrices = {
      symbol: "TSLA",
      interval: "1month",
      outputsize: "30",
      format: "json",
   };

   function changeTab() {
      console.log("tab", selectedTab);
      changeStock({ ...options, interval: selectedTab as SelectedTab }).then(
         (data): any => setStock(data)
      );
   }

   // useEffect(() => {
   //    changeTab();  // Fetch stock
   // }, [selectedTab]);

   return (
      <StockContext.Provider
         value={{ stock, changeStock, selectedTab, tabs, setSelectedTab }}
      >
         {children}
      </StockContext.Provider>
   );
};
