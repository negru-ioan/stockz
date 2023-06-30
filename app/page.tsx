import TopNavbar from "@/components/TopNavbar";
// import tsla from "../utils/tsla";
// import LineChart from "@/components/LineChart";
// import Tabs from "@/components/Tabs";
import ChartPanel from "@/components/ChartPanel";

export default function Home() {
   return (
      <main className="flex min-h-screen w-full flex-col items-center max-sm:px-2 pl-[89px] pr-6 lg:pr-16 lg:pl-[127px] pb-6 bg-gradient-to-b from-apple-40 to-[#e3ffe0]">
         <TopNavbar />

         <ChartPanel />
      </main>
   );
}
