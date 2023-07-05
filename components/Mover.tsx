import SmallDropdown from "./SmallDropdown";
import Gainer from "./Gainer";

const images = [
   "https://api.twelvedata.com/logo/chipotle.com",
   "https://api.twelvedata.com/logo/seaboardcorp.com",
   "https://api.twelvedata.com/logo/autozone.com",
   "https://api.twelvedata.com/logo/bookingholdings.com",
   "https://api.twelvedata.com/logo/nvrinc.com",
];
interface Mover {
   netChange: number;
   volume: number;
   ticker: string;
   performanceID: string;
   name: string;
   exchange: string;
   percentNetChange: number;
   lastPrice: number;
}
interface MoverProps {
   category: Mover[];
   categoryName: string;
}

function Mover({ category, categoryName }: MoverProps) {
   // console.log("cat", category);
   // const { name, ticker, lastPrice, percentNetChange } = mover;
   // useEffect(() => {
   //    fetchMovers().then(({ CompanyMovers }) => setMovers(CompanyMovers));
   //    console.log(movers);
   // }, []);

   const names: { [key: string]: string } = {
      gainers: "Top Gainers",
      actives: "Most Active",
      losers: "Top Losers",
   };

   return (
      <div className="top_gainers border sm:mb-7 sm:mt-14 bg-white p-5 rounded-lg border-gray-400 max-md:h-96">
         <div className="flex items-center w-full">
            <h3 className="text-start text-2xl font-semibold text-black w-full">
               {names[categoryName]}
            </h3>

            {/* <SmallDropdown /> */}
         </div>
         <div className="flex flex-col gap-3 mt-6">
            {category.length > 0 &&
               category.map((stock, i) => {
                  return (
                     <Gainer
                        key={stock.performanceID}
                        name={stock.name}
                        stockName={stock.ticker}
                        price={stock.lastPrice}
                        change={stock.percentNetChange}
                        img={images[i]}
                     />
                  );
               })}
         </div>
      </div>
   );
}

export default Mover;
