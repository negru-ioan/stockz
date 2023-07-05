// export default async function fetchStockImg(symbol: string) {
//    const Url = `https://twelve-data1.p.rapidapi.com/logo?symbol=${symbol}`;
//    const options = {
//       method: "GET",
//       headers: {
//          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY || "",
//          "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
//       },
//    };

//    try {
//       const response = await fetch(Url, options);
//       const result = await response.json();
//       console.log("fetchStockImg", result);
//       const { url } = result;
//       return url;
//    } catch (error) {
//       console.error("fetchStockImg", error);
//       return undefined;
//    }
// }

async function fetchStockImg(symbol: string) {
   const url = `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=cihf709r01qut3a6fte0cihf709r01qut3a6fteg`;
   try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
   } catch (error) {
      console.log(error);
      return undefined;
   }
}

export default fetchStockImg;
