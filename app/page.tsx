import TopNavbar from "@/components/TopNavbar";
import ChartPanel from "@/components/ChartPanel";
import IndexCard from "@/components/IndexCard";
import indexes from "@/indexes";
import TopGainers from "@/components/TopGainers";

export default function Home() {
   const pngs = {
      USA: "https://img.icons8.com/?size=96&id=aRiu1GGi6Aoe&format=png",
      Europe: "https://img.icons8.com/?size=512&id=Y76SzpmxslW4&format=png",
      Asia: "https://img.icons8.com/?size=512&id=vZLJDLqVMupW&format=png",
      CAN: "https://img.icons8.com/?size=512&id=cYRU7TBWwNVs&format=png",
   };
   return (
      <main className="flex min-h-screen w-full flex-col items-center max-sm:px-2 pl-[89px] pr-6 lg:pr-16 lg:pl-[127px] pb-6 bg-[#d4ffcfcf] xl:bg-gradient-to-b from-apple-40 to-[#e3ffe0]">
         <TopNavbar />

         <ChartPanel />

         <h1 className="text-start text-3xl font-semibold text-black w-full pt-6 pb-10">
            Global Indexes Change
         </h1>

         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 max-sm:w-full max-lg:gap-x-24 max-lg:gap-y-8 ">
            {/* {indexes.MarketRegions.USA.slice(0, 4).map((index, i) => { */}
            {indexes.MarketRegions.USA.map((index, i) => {
               return (
                  <IndexCard index={index} img={Object.values(pngs)[i]} i={i} />
               );
            })}
         </div>

         <TopGainers />
      </main>
   );
}
