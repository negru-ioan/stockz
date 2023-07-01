import React from "react";

function PercentChange({ change }: { change: number }) {
   return (
      <div className="flex gap-1">
         <img
            src="/stock_arrow.png"
            alt=""
            className="w-[1.2rem] h-[1.2rem] opacity-70 saturate-[3]"
            style={
               change < 0
                  ? {
                       transform: "scaleX(-1) rotate(171deg) translateY(-2px)",
                       filter: "hue-rotate(230deg) saturate(2)",
                    }
                  : {
                       transform: "translateY(3px)",
                       filter: "saturate(3)",
                    }
            }
         />
         <p
            className={`text-sm sm:text-base ${
               change < 0 ? "text-red-500" : "text-apple-400"
            }`}
         >
            {change > 0 && "+"}
            {change.toFixed(2)}%
         </p>
      </div>
   );
}

export default PercentChange;
