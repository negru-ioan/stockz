export default async function fetchMovers() {
   const url =
      "https://schwab.p.rapidapi.com/market/get-movers?rankType=NetGainers&exchange=US&sectorCusip=ALL";
   const options = {
      method: "GET",
      headers: {
         "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY || "",
         "X-RapidAPI-Host": "schwab.p.rapidapi.com",
      },
   };

   try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
   } catch (error) {
      console.error(error);
   }
}
