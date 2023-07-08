export default async function fetchInsiderTrades() {
   const url =
      "https://api.sec-api.io/insider-trading?token=" +
         process.env.NEXT_PUBLIC_SEC_API_KEY || "";

   const payload = {
      query: {
         query_string: {
            query: "*",
         },
      },
      from: 0,
      size: 50,
      sort: [{ filedAt: { order: "desc" } }],
   };

   try {
      const response = await fetch(url, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(payload),
      });

      if (!response.ok) {
         throw new Error("Failed to fetch insider trades");
      }

      const data = await response.json();
      return data;
   } catch (error) {
      console.error(error);
   }
}
