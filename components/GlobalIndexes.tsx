"use client";
// import indexes from "@/indexes";
import React, { useEffect, useState } from "react";
import IndexCard from "./IndexCard";
import fetchIndexes from "@/fetch/fetchIndexes";

const pngs = {
   USA: "https://img.icons8.com/?size=96&id=aRiu1GGi6Aoe&format=png",
   Europe: "https://img.icons8.com/?size=512&id=Y76SzpmxslW4&format=png",
   Asia: "https://img.icons8.com/?size=512&id=vZLJDLqVMupW&format=png",
   CAN: "https://img.icons8.com/?size=512&id=cYRU7TBWwNVs&format=png",
};

function GlobalIndexes() {
   let selected = [2, 2, 0, 0];
   const [indexes, setIndexes] = useState([]);
   useEffect(() => {
      fetchIndexes().then((indexes) => {
         if (typeof indexes === "object") {
            setIndexes(
               Object.values(indexes.MarketRegions).map(
                  (arr, i) => arr[selected[i]]
               )
            );
         }
      });
   }, []);

   return (
      <>
         <div className="w-full flex justify-between items-center my-10">
            <h1 className="text-start text-3xl font-semibold text-black w-full">
               Global Indexes Change
            </h1>
            <h1 className="text-end text-3xl font-semibold text-black w-full">
               {new Date("2023-07-02T15:35:46Z").toDateString()}
            </h1>
         </div>
         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 max-sm:w-full max-lg:gap-x-14 max-lg:gap-y-8 ">
            {/* {indexes.MarketRegions.USA.slice(0, 4).map((index, i) => { */}
            {indexes.length > 0 &&
               indexes.map((index, i) => {
                  return (
                     <IndexCard
                        index={index}
                        img={Object.values(pngs)[i]}
                        i={i}
                     />
                  );
               })}
         </div>
      </>
   );
}

export default GlobalIndexes;
