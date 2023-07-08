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
         className={`box hover:scale-105 p-3 h-[150px] sm:h-36 sm:w-[320px] ${
            i == 3 && "max-sm:hidden"
         }`}
      >
         <div className="flex py-2">
            <div className="flex flex-col gap-1">
               <p className="text-base text-gray-600 dark:text-slate-200">
                  {index.Name}
               </p>
               <p className="text-2xl font-bold text-gray-900 dark:text-swamp-40">
                  ${index.Price}
               </p>
            </div>
            <div className="ml-auto w-16">
               <img
                  src={img}
                  alt=""
                  className="opacity-90 translate-y-[-5px]"
               />
            </div>
         </div>
         <div className="w-full flex justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-slate-200">
               {index.PriceChange} $
            </p>
            <PercentChange change={index.PercentChange} />
         </div>
      </div>
   );
};

export default IndexCard;
