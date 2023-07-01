import { FC } from "react";

interface IndexProps {
   PerformanceId: string;
   RegionAndTicker: string;
   Currency: string;
   Exchange: string;
   ExchangeShortName: string;
   ExchangeTimeZoneOffsetFromUTCInSeconds: number;
   Name: string;
   StarRating: null;
   Type: string;
   Price: number;
   PriceChange: number;
   PercentChange: number;
   OpenPrice: number;
   Volume: null;
   DayHigh: number;
   DayLow: number;
   ActivityTimeUTC: string;
   ExchangeActivityTimeLabel: string;
   AverageVolume: number;
   InceptionDate: string;
   YesterdayPrice: number;
}

const IndexCard: FC<{ index: IndexProps; img: string; i: number }> = ({
   index,
   img,
   i,
}) => {
   const upOrDown = index.PercentChange < 0;
   return (
      <div
         className={` hover:scale-105 p-3 bg-white rounded-lg shadow-md h-[150px] sm:h-36 w-full sm:w-[320px] border border-gray-400 ${
            i == 3 && "max-sm:hidden"
         }`}
      >
         <div className="flex py-2">
            <div className="flex flex-col gap-1 sm:gap-3 ">
               <p className="text-base text-gray-600">{index.Name}</p>
               <p className="text-2xl font-bold text-gray-900">
                  ${index.Price}
               </p>
            </div>
            <div className="ml-auto w-16">
               <img
                  src={img}
                  // src="/gear.png"
                  alt=""
                  className="opacity-90 translate-y-[-5px]"
               />
            </div>
         </div>
         {/* {index.PercentChange > 0 ? ( */}
         <div className="w-full flex justify-between items-center">
            <p className="text-sm text-gray-600 ">{index.PriceChange} $</p>
            <div className="flex gap-1">
               <img
                  src="/stock_arrow.png"
                  alt=""
                  className="w-[1.2rem] h-[1.2rem] opacity-70 saturate-[3]"
                  style={
                     upOrDown
                        ? {
                             transform:
                                "scaleX(-1) rotate(171deg) translateY(-2px)",
                             filter: "hue-rotate(230deg) saturate(2)",
                          }
                        : {
                             transform: "translateY(3px)",
                             filter: "saturate(3)",
                          }
                  }
               />
               <p
                  className={`text-sm sm:text-base pr-2 ${
                     upOrDown ? "text-red-500" : "text-apple-400"
                  }`}
               >
                  {index.PercentChange.toFixed(2)}%
               </p>
            </div>
         </div>
      </div>
   );
};

export default IndexCard;
