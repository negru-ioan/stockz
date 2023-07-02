"use client";

import React, { useEffect, useState } from "react";
import PercentChange from "./PercentChange";
import fetchStockImg from "@/fetch/fetchStockImg";

type Props = {
   name: string;
   stockName: string;
   price: number;
   change: number;
};

function Gainer({ name, stockName, price, change }: Props) {
   const [stockImg, setStockImg] = useState<string | undefined>(undefined);

   useEffect(() => {
      const fetchStockImage = async () => {
         try {
            const image = await fetchStockImg(stockName);
            setStockImg(image);
         } catch (error) {
            console.error(error);
         }
      };

      fetchStockImage();
   }, []);

   change = Number(change.toFixed(2));

   return (
      <div className="flex items-center flex-row">
         <div className="w-12 h-[43px] border border-slate-300 rounded-full flex items-center">
            <img
               src={
                  stockImg
                     ? stockImg
                     : "https://img.icons8.com/?size=512&id=SntjI7lDI4Ju&format=png"
               }
               alt=""
               className="object-contain rounded-full"
            />
         </div>

         <div className="w-full pl-2 pr-1">
            <div className="flex w-full justify-between">
               <p className="text-md text-slate-800 font-semibold">{name}</p>
               <p className="text-md text-slate-800 font-semibold">
                  {price.toFixed(2)}$
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
