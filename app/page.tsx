import TopNavbar from "@/components/TopNavbar";
// import LineChart from "@/filledlinechart";
import tsla from "../utils/tsla";
import LineChart from "@/components/Chart";
import Tabs from "@/components/Tabs";

export default function Home() {
   const width = 1536;
   const stock = tsla;
   return (
      <main className="flex min-h-screen w-full flex-col items-center max-sm:px-2 pl-[89px] pr-6 lg:pr-16 lg:pl-[127px] pb-6 bg-apple-40">
         <TopNavbar />

         {/* <LineChart /> */}
         {/* <LineChart
            data={Array(20)
               .fill(0)
               .map((_, i) => i)}
            labels={Array(20)
               .fill(0)
               .map((_, i) => i.toString())}
         /> */}
         <div className="flex justify-center w-full rounded-lg border border-gray-400 pt-0 bg-white my-[75px] sm:my-7">
            <div className="flex flex-col max-sm:flex-col-reverse items-center w-full">
               {/* Title */}
               {/* <div
                  className="flex justify-between py-3"
                  style={{ width: "95%" }}
               > */}
               <div className="flex justify-between w-full max-sm:p-2 sm:px-5 sm:py-3 items-center">
                  <h1 className="text-2xl max-sm:hidden">
                     TSLA <span className="text-apple-400">· 1D · NASDAQ</span>
                  </h1>
                  <p className="relative top-0 left-0 text-xl max-sm:hidden">
                     ${stock.data.quote[0].open[0].toFixed(2)}
                  </p>
                  <div className="max-sm:w-full">
                     <Tabs />
                  </div>
               </div>
               <div className="w-full flex mx-auto my-auto">
                  <div className="p-1 w-full md:h-52 lg:h-96 my-auto sm:shadow-xl">
                     {/* <canvas
                     id="myChart"
                     style={{ width: `${width / 5.12}%`, height: "60%" }}
                  ></canvas> */}
                     <LineChart
                        // data={Array(20)
                        //    .fill(0)
                        //    .map((_, i) => i)}
                        // labels={Array(20)
                        //    .fill(0)
                        //    .map((_, i) => i.toString())}
                        data={tsla.data.quote[0].open.map((n) =>
                           Number(n.toFixed(2))
                        )}
                        labels={tsla.data.timestamp.map(
                           (time) =>
                              new Date(time).toLocaleDateString().slice(0, -4) +
                              "19"
                        )}
                     />
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
}
