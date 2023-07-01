import { FC } from "react";
import PercentChange from "./PercentChange";

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
            <PercentChange change={index.PercentChange} />
         </div>
      </div>
   );
};

export default IndexCard;
