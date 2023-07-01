import React from "react";
import PercentChange from "./PercentChange";

type Props = {
   name: string;
   stockName: string;
   price: number;
   change: number;
};

function Gainer({ name, stockName, price, change }: Props) {
   change = Number(change.toFixed(2));
   return (
      <div className="flex items-center flex-row">
         <img src="/gear.png" alt="gear" />
         <div className="w-full pl-2 pr-1">
            <div className="flex w-full justify-between">
               <p className="text-md text-slate-800 font-semibold">{name}</p>
               <p className="text-md text-slate-800 font-semibold">
                  {price.toFixed(2)}
               </p>
            </div>
            <div className="flex w-full justify-between">
               <p className="text-md text-slate-400">{stockName}</p>
               <PercentChange change={change} />
            </div>
         </div>
      </div>
   );
}

export default Gainer;
