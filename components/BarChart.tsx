import { useEffect, useRef } from "react";
import Chart, { ChartType, ChartOptions } from "chart.js";

interface BarChartProps {
   labels: string[];
   data: number[];
   label: string;
}

let chart: Chart | undefined;

const BarChart: React.FC<BarChartProps> = ({ labels, data, label = "USD" }) => {
   const chartRef = useRef<HTMLCanvasElement>(null);

   useEffect(() => {
      if (chartRef.current) {
         const ctx = chartRef.current.getContext("2d");
         if (ctx) {
            const chartConfig: {
               type: ChartType;
               data: Chart.ChartData;
               options: ChartOptions;
            } = {
               type: "bar",
               data: {
                  labels,
                  datasets: [
                     {
                        label,
                        data,
                        backgroundColor: "#defade",
                        borderColor: "#32cd32",
                        borderWidth: 1,
                     },
                  ],
               },
               options: {
                  responsive: true,
                  maintainAspectRatio: true,
                  aspectRatio: 2,
                  onResize: () => {},
               },
            };

            chart = new Chart(ctx, chartConfig);
         }
      }

      return () => {
         if (chart) {
            chart.destroy();
         }
      };
   }, [labels, data]);

   return <canvas ref={chartRef} width={"100%"} />;
};

export default BarChart;
