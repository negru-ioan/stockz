"use client";

import { Fragment, useEffect, useState, useMemo } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

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
   const [selected, setSelected] = useState("AAPL Apple");
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
         <Combobox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
               <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                  <Combobox.Input
                     className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                     displayValue={(selected: string) => selected}
                     onChange={(event) => setQuery(event.target.value)}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                     <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                     />
                  </Combobox.Button>
               </div>
               <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() => setQuery("")}
               >
                  <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                     {filteredStocks.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                           Nothing found.
                        </div>
                     ) : (
                        filteredStocks.map((stock, i) => (
                           <Combobox.Option
                              key={i}
                              className={({ active }) =>
                                 `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active
                                       ? "bg-teal-600 text-white"
                                       : "text-gray-900"
                                 }`
                              }
                              value={stock}
                           >
                              {({ selected, active }) => (
                                 <>
                                    <span
                                       className={`block truncate ${
                                          selected
                                             ? "font-medium"
                                             : "font-normal"
                                       }`}
                                    >
                                       {stock}
                                    </span>
                                    {selected ? (
                                       <span
                                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                             active
                                                ? "text-white"
                                                : "text-teal-600"
                                          }`}
                                       >
                                          <CheckIcon
                                             className="h-5 w-5"
                                             aria-hidden="true"
                                          />
                                       </span>
                                    ) : null}
                                 </>
                              )}
                           </Combobox.Option>
                        ))
                     )}
                  </Combobox.Options>
               </Transition>
            </div>
         </Combobox>
      </div>
   );
}
