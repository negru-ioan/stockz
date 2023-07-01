"use client";

import { useEffect, useState, useMemo } from "react";
import Dropdown from "./Dropdown";

async function getStocks() {
   const res = await fetch("/stocks?_rsc=a768e99");
   const stocks = await res.json();
   return stocks;
}

// Custom debounce hook
function useDebounce<T>(value: T, delay: number): T {
   const [debouncedValue, setDebouncedValue] = useState<T>(value);

   useEffect(() => {
      const handler = setTimeout(() => {
         setDebouncedValue(value);
      }, delay);

      return () => {
         clearTimeout(handler);
      };
   }, [value, delay]);

   return debouncedValue;
}

export default function SearchBar() {
   const [stocks, setStocks] = useState<string[]>([]);
   const [selected, setSelected] = useState("TSLA Tesla");
   const [query, setQuery] = useState("");
   const debouncedQuery = useDebounce<string>(query, 300);

   useEffect(() => {
      getStocks().then((stonks) => setStocks(stonks));
   }, []);
   // funtione
   // useEffect(() => {
   //    console.log(selected, 11);
   // }, [selected]);

   const filteredStocks = useMemo(() => {
      if (debouncedQuery === "") {
         return stocks;
      } else {
         return stocks.filter((stock) =>
            new RegExp(debouncedQuery.toUpperCase(), "gi").test(stock)
         );
      }
   }, [stocks, debouncedQuery]);

   return (
      <div className="searchBar w-full sm:w-72 max-sm:absolute top-[90px] right-0 left-0 z-50">
         <Dropdown
            selected={selected}
            setSelected={setSelected}
            setQuery={setQuery}
            options={filteredStocks}
            query={query}
         />
      </div>
   );
}
