"use client";

import { useEffect, useState } from "react";
import { Chart } from "chart.js";
import Tabs from "./components/Tabs";
// import mfst from "./msft";
import tsla from "./utils/tsla";

function LineChart() {
   const stock = tsla;
   // const [stock, setStock] = useState(tsla);
   // console.log(stock);
   const [width, setWidth] = useState(window.innerWidth);
   useEffect(() => {
      let ctx = document.getElementById("myChart").getContext("2d");
      let myChart = new Chart(ctx, {
         type: "line",
         data: {
            labels: stock.data.timestamp.map(
               (time) => new Date(time).toLocaleDateString().slice(0, -4) + "19"
            ),
            datasets: [
               {
                  data: stock.data.quote[0].open.map((n) => n.toFixed(2)),
                  label: "Chart",
                  borderColor: "#8de88d",
                  backgroundColor: "#defade",
               },
            ],
         },
      });
   }, []);

   // useEffect(() => {
   //    window.addEventListener("resize", () => {
   //       setWidth(window.innerWidth);
   //    });

   //    return () => {
   //       window.removeEventListener("resize", () => {});
   //    };
   // }, [window.innerWidth]);

   return (
      <div
         className="flex justify-center w-full rounded-lg border border-gray-400 pt-0 bg-white"
         style={{ marginTop: "30px" }}
      >
         <div className="flex flex-col items-center w-full">
            <div className="flex justify-between py-3" style={{ width: "95%" }}>
               <div className="flex">
                  <h1
                     className="text-2xl"
                     style={{ width: `${width / 3.072}px` }}
                  >
                     TSLA{" "}
                     <span style={{ color: "#8de88d" }}>· 1D · NASDAQ</span>
                  </h1>
                  <p
                     className="flex justify-center items-center flex-grow"
                     style={{ fontSize: "25px" }}
                  >
                     ${stock.data.quote[0].open[0].toFixed(2)}
                  </p>
               </div>
               <Tabs />
            </div>
            <div className="w-[1100px] flex mx-auto my-auto">
               <div className="pt-0 w-full h-fit my-auto shadow-xl">
                  <canvas
                     id="myChart"
                     style={{ width: `${width / 5.12}%`, height: "60%" }}
                  ></canvas>
               </div>
            </div>
         </div>
      </div>
   );
}

export default LineChart;
