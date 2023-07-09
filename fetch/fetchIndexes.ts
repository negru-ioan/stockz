async function fetchIndexes() {
   const url = "https://ms-finance.p.rapidapi.com/market/get-summary";
   const options = {
      method: "GET",
      headers: {
         "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY || "",
         "X-RapidAPI-Host": "ms-finance.p.rapidapi.com",
      },
   };

   try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
   } catch (error) {
      console.error(error);
      return { MarketRegions: [] };
   }
}

export default fetchIndexes;
