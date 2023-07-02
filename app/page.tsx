import TopNavbar from "@/components/TopNavbar";
import ChartPanel from "@/components/ChartPanel";
import TopGainers from "@/components/TopGainers";
import GlobalIndexes from "@/components/GlobalIndexes";

export default function Home() {
   return (
      <main className="flex min-h-screen w-full flex-col items-center max-sm:px-2 pl-[89px] pr-6 lg:pr-16 lg:pl-[127px] pb-6 bg-[#d4ffcfcf] xl:bg-gradient-to-b from-apple-40 to-[#e3ffe0]">
         <TopNavbar />

         <ChartPanel />

         <GlobalIndexes />

         {/* <TopGainers /> */}
      </main>
   );
}
