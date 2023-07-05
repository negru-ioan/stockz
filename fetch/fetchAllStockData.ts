async function fetchAllStockData(symbol: string) {
   const baseUrl = "https://finnhub.io/api/v1/";
   const apiKey = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;
   let stock: any = {};

   const fetchData = async (url: string, key: string) => {
      try {
         const res = await fetch(url);
         const data = await res.json();
         stock[key] = data;
      } catch (error) {
         console.log(error);
      }
   };

   //    const fetchSymbolLookup = async () => {
   //       const url = `${baseUrl}search?q=${symbol}&token=${apiKey}`;
   //       await fetchData(url, "symbolLookup");
   //    };

   const fetchCompanyProfile2 = async () => {
      const url = `${baseUrl}stock/profile2?symbol=${symbol}&token=${apiKey}`;
      await fetchData(url, "companyProfile2");
   };

   const fetchBasicFinancials = async () => {
      const url = `${baseUrl}stock/metric?symbol=${symbol}&metric=all&token=${apiKey}`;
      await fetchData(url, "basicFinancials");
   };

   await Promise.all([
      //   fetchSymbolLookup(),
      fetchCompanyProfile2(),
      fetchBasicFinancials(),
   ]);

   return stock;
}

export default fetchAllStockData;
