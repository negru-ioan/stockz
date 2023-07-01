import React from "react";
import SmallDropdown from "./SmallDropdown";
import Gainer from "./Gainer";

function TopGainers() {
   const gainers = [
      {
         name: "Tesla Inc.",
         stockName: "TSLA",
         price: 870.69123,
         change: 8.3,
      },
      {
         name: "Shopify Inc.",
         stockName: "SHOP",
         price: 460.69123,
         change: 5.34,
      },
      {
         name: "Apple Inc",
         stockName: "TSLA",
         price: 157.23,
         change: 6.9,
      },
   ];
   return (
      <div className="w-96 border mb-7 mt-14 bg-white p-5 rounded-lg border-gray-400">
         <div className="flex items-center">
            <h3 className="text-start text-xl font-semibold text-black w-full">
               Top Gainers
            </h3>

            <SmallDropdown />
         </div>
         <div className="flex flex-col gap-3 mt-6">
            {gainers.map(({ name, stockName, price, change }) => {
               return (
                  <Gainer
                     name={name}
                     stockName={stockName}
                     price={price}
                     change={change}
                  />
               );
            })}
         </div>
      </div>
   );
}

export default TopGainers;
