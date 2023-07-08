import ChartPanel from "@/components/ChartPanel";
import React from "react";

function CryptoPage() {
   return (
      <div className="w-full">
         <ChartPanel symbol={"BTC/USD"} />
      </div>
   );
}

export default CryptoPage;
