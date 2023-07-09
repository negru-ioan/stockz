"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

type Props = { data: number[]; labels: string[]; status: string };

const LineChart = ({ data, labels, status }: Props) => {
   const chartRef = useRef<HTMLCanvasElement | null>(null);
   useEffect(() => {
      if (chartRef.current) {
         const chartCanvas = chartRef.current.getContext("2d");
         if (chartCanvas) {
            const lineChart = new Chart(chartCanvas, {
               type: "line",
               data: {
                  labels,
                  datasets: [
                     {
                        data,
                        label: "USD",
                        backgroundColor: "#D5FAD5",
                        borderColor: "#54d454",
                        borderWidth: 2,
                     },
                  ],
               },
               options: {
                  // legend: {
                  //    display: false,
                  // },
                  scales: {
                     xAxes: [
                        {
                           ticks: {
                              display: false,
                           },
                        },
                     ],
                  },
                  responsive: true,
                  maintainAspectRatio: false,
                  aspectRatio: 2,
                  onResize: () => {},
               },
            });

            return () => {
               lineChart.destroy();
            };
         }
      }
   }, [data, labels, status]);

   if (status !== "ok") {
      return (
         <div className="flex w-full h-full items-center justify-center">
            <img
               src="https://thumbs.gfycat.com/CorruptOldfashionedGuineapig-max-1mb.gif"
               alt="loader"
               className="max-sm:w-1/4 max-sm:p-5 h-1/2 w-1/2 mx-auto object-contain opacity-30"
            />
         </div>
      );
   }

   return (
      <div className="flex w-full h-full items-center justify-center sm:pr-3 sm:pl-1">
         <canvas ref={chartRef} />
      </div>
   );
};

export default LineChart;
