import { Props_fetchStockPrices } from "../types";

export default async function fetchStockPrices({
   symbol = "TSLA",
   interval = "1month",
   outputsize = "30",
   format = "json",
}: Props_fetchStockPrices) {
   const url =
      //   "https://twelve-data1.p.rapidapi.com/time_series?symbol=AMZN&interval=1month&outputsize=30&format=json";
      `https://twelve-data1.p.rapidapi.com/time_series?symbol=${symbol}&interval=${interval}&outputsize=${outputsize}&format=${format}`;
   const options = {
      method: "GET",
      headers: {
         "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY || "",
         "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
      },
   };

   try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      return result;
   } catch (error) {
      console.log(error);
   }
}
