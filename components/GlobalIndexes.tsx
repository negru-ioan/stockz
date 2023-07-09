import IndexCard from "./IndexCard";
import fetchIndexes from "@/fetch/fetchIndexes";

const pngs = {
   USA: "https://img.icons8.com/?size=96&id=aRiu1GGi6Aoe&format=png",
   Europe: "https://img.icons8.com/?size=512&id=Y76SzpmxslW4&format=png",
   Asia: "https://img.icons8.com/?size=512&id=vZLJDLqVMupW&format=png",
   CAN: "https://img.icons8.com/?size=512&id=cYRU7TBWwNVs&format=png",
};

type Index = {
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
};

type Res = {
   MarketRegions: {
      [key: string]: Index[];
   };
   Barometers: {
      [key: string]: {
         PercentChange: number;
         Level: number;
      }[];
   };
   Timestamp: string;
};

async function GlobalIndexes() {
   let selected = [2, 2, 0, 0];
   const res: Res = await fetchIndexes();
   const indexes = Object.values(res.MarketRegions).map(
      (arr, i) => (arr as Index[])[selected[i]]
   );

   return (
      <>
         <div className="w-full flex justify-between items-center mt-12 mb-10">
            <h1 className="text-start text-3xl font-semibold w-full">
               Global Indexes
            </h1>
            <h1 className="text-end text-3xl font-semibold w-full">
               {new Date(res.Timestamp).toDateString()}
            </h1>
         </div>
         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 max-sm:w-full max-lg:gap-x-14 max-lg:gap-y-8 mb-10">
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
