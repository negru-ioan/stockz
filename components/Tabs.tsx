"use client";
import { useState } from "react";

function Tabs() {
   const tabs = ["1D", "1W", "1M", "1Y"];
   const [time, setTime] = useState(1);
   return (
      <div className="max-sm:w-full grid grid-cols-4 gap-2 h-min rounded-lg bg-apple-100 mt-1 py-1">
         {tabs.map((tab, index) => {
            return (
               <div
                  key={tab}
                  className={`border-slate-200 py-1 px-3 cursor-pointer ${
                     time === index
                        ? "bg-white text-black rounded-lg border border-slate-300"
                        : "text-slate-600"
                  }`}
               >
                  <p className="text-sm text-center">{tab}</p>
               </div>
            );
         })}
      </div>
   );
}

export default Tabs;
