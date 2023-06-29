// "use client";

// import React, { useEffect, useRef } from "react";
// import Chart from "chart.js";

// const LineChart = ({ data, labels }: { data: number[]; labels: string[] }) => {
//    const chartRef = useRef<HTMLCanvasElement | null>(null);

//    useEffect(() => {
//       if (chartRef.current) {
//          const chartCanvas = chartRef.current.getContext("2d");
//          if (chartCanvas) {
//             const lineChart = new Chart(chartCanvas, {
//                type: "line",
//                data: {
//                   labels: labels,
//                   datasets: [
//                      {
//                         label: "Line Chart",
//                         data: data,
//                         backgroundColor: "#f2fcf1",
//                         borderColor: "#54d454",
//                         borderWidth: 2,
//                      },
//                   ],
//                },
//                options: {
//                   responsive: true,
//                   maintainAspectRatio: false,
//                },
//             });

//             return () => {
//                // Cleanup the chart instance on unmount
//                lineChart.destroy();
//             };
//          }
//       }
//    }, [data, labels]);

//    return <canvas ref={chartRef} />;
// };

// export default LineChart;

"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

const LineChart = ({ data, labels }: { data: number[]; labels: string[] }) => {
   const chartRef = useRef<HTMLCanvasElement | null>(null);

   useEffect(() => {
      if (chartRef.current) {
         const chartCanvas = chartRef.current.getContext("2d");
         if (chartCanvas) {
            const lineChart = new Chart(chartCanvas, {
               type: "line",
               data: {
                  labels: labels,
                  datasets: [
                     {
                        label: "Line Chart",
                        data: data,
                        backgroundColor: "#f2fcf1",
                        borderColor: "#54d454",
                        borderWidth: 2,
                     },
                  ],
               },
               options: {
                  responsive: true,
                  maintainAspectRatio: false,
                  aspectRatio: 2, // Customize the aspect ratio if needed
                  onResize: () => {}, // Placeholder function for onResize event
               },
            });

            return () => {
               // Cleanup the chart instance on unmount
               lineChart.destroy();
            };
         }
      }
   }, [data, labels]);

   return (
      <div style={{ position: "relative", height: "90%", width: "100%" }}>
         <canvas ref={chartRef} />
      </div>
   );
};

export default LineChart;
