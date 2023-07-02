export default async function fetchStockImg(symbol: string) {
   const Url = `https://twelve-data1.p.rapidapi.com/logo?symbol=${symbol}`;
   const options = {
      method: "GET",
      headers: {
         "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY || "",
         "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
      },
   };

   try {
      const response = await fetch(Url, options);
      const result = await response.json();
      console.log(result);
      const { url } = result;
      return url;
   } catch (error) {
      console.error(error);
      return undefined;
   }
}
