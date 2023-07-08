export default async function fetchTrending() {
   const url =
      "https://global-stock-market-api-data.p.rapidapi.com/stocks_countrywise_by_price/usa";
   const options = {
      method: "GET",
      headers: {
         "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY || "",
         "X-RapidAPI-Host": "global-stock-market-api-data.p.rapidapi.com",
      },
   };

   try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
   } catch (error) {
      console.error(error);
      return [];
   }
}
