// import IndexCard from "./IndexCard";
// import fetchIndexes from "@/fetch/fetchIndexes";
import trendingStocks from "@/trendingStocks";
import PercentChange from "./PercentChange";
import fetchTrending from "@/fetch/fetchTrending";

type StockData = {
   name: string;
   last: string;
   high: string;
   low: string;
   change: string;
   changePercentage: string;
   volume: string;
   time: string;
};

// const pngs = {
//    USA: "https://img.icons8.com/?size=96&id=aRiu1GGi6Aoe&format=png",
//    Europe: "https://img.icons8.com/?size=512&id=Y76SzpmxslW4&format=png",
//    Asia: "https://img.icons8.com/?size=512&id=vZLJDLqVMupW&format=png",
//    CAN: "https://img.icons8.com/?size=512&id=cYRU7TBWwNVs&format=png",
// };

async function TrendingStocks() {
   let selected = [2, 2, 0, 0];
   const res: StockData[] = await fetchTrending();
   let stocks = res
      .sort(
         (a, b) =>
            Math.abs(parseFloat(b.changePercentage)) -
            Math.abs(parseFloat(a.changePercentage))
      )
      .slice(0, 4);

   return (
      <>
         <div className="w-full flex justify-between items-center my-10">
            <h1 className="text-start text-3xl font-semibold w-full">
               Trending Stocks
            </h1>
            <h1 className="text-end text-3xl font-semibold w-full">
               {new Date("2023-07-02T15:35:46Z").toDateString()}
            </h1>
         </div>
         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 max-sm:w-full max-lg:gap-x-14 max-lg:gap-y-8 mb-10">
            {/* {indexes.MarketRegions.USA.slice(0, 4).map((index, i) => { */}
            {/* {indexes.length > 0 &&
               indexes.map((index, i) => {
                  return (
                     <IndexCard
                        index={index}
                        img={Object.values(pngs)[i]}
                        i={i}
                     />
                  );
               })} */}
            {stocks.length > 0 &&
               stocks
                  .filter((stock, i) => stock.change)
                  .map((stock, i) => {
                     return (
                        <div
                           className={`box hover:scale-105 p-3 h-[150px] sm:h-36 sm:w-[320px] ${
                              i == 3 && "max-sm:hidden"
                           }`}
                        >
                           <div className="flex py-2">
                              <div className="flex flex-col gap-1">
                                 <p className="text-base text-gray-600 dark:text-slate-200">
                                    {stock.name}
                                 </p>
                                 <p className="text-2xl font-bold text-gray-900 dark:text-swamp-40">
                                    ${stock.last}
                                 </p>
                              </div>
                              <div className="ml-auto">
                                 {/* <img
                                    src={""}
                                    alt=""
                                    className="opacity-90 translate-y-[-5px]"
                                 /> */}
                                 <p className="text-end">Vol:{stock.volume}</p>
                              </div>
                           </div>
                           <div className="w-full flex justify-between items-center">
                              <p className="text-sm text-gray-600 dark:text-slate-200">
                                 {stock.change} $
                              </p>
                              <PercentChange
                                 change={parseFloat(stock.changePercentage)}
                              />
                           </div>
                        </div>
                     );
                  })}
         </div>
      </>
   );
}

export default TrendingStocks;
