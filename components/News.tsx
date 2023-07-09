"use client";

import { fetchNews } from "@/fetch/fetchAllStockData";
import { useEffect, useState } from "react";

type News = { headline: string; image: string; summary: string; url: string };

function News({ symbol }: { symbol: string }) {
   const [news, setNews] = useState<News[]>([]);
   async function getNews() {
      const yesterday = new Date(Date.now() - 86400000)
         .toISOString()
         .split("T")[0];
      const today = new Date().toISOString().split("T")[0];
      const nws = await fetchNews(symbol, yesterday, today);
      setNews(nws);
   }

   useEffect(() => {
      getNews();
   }, []);

   return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 my-20">
         {news.length > 0 &&
            news
               .filter((n) => n?.image)
               .slice(0, 8)
               .map((n) => {
                  return (
                     <div
                        className="box relative flex-col justify-between max-w-sm p-6 pb-12 bg-white border border-gray-200 rounded-lg shadow"
                        key={n.url}
                     >
                        <img
                           src={
                              n.image ||
                              "https://eor7ztmv4pb.exactdn.com/wp-content/uploads/2022/12/Screenshot-2022-12-13-125348.jpg"
                           }
                           className="w-full h-48 rounded-lg object-cover pb-2"
                           alt=""
                        />
                        <a href={n.url}>
                           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                              {n.headline.length > 45
                                 ? n.headline.slice(0, 42) + "..."
                                 : n.headline}
                           </h5>
                        </a>
                        <p className="mb-3 font-n ormal text-gray-700 dark:text-gray-400">
                           {n.summary.length > 150
                              ? n.summary.slice(0, 147) + "..."
                              : n.summary}
                        </p>
                        <a
                           href={n.url}
                           className="absolute bottom-4 left-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                           Read more
                           <svg
                              className="w-3.5 h-3.5 ml-2"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10"
                           >
                              <path
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                           </svg>
                        </a>
                     </div>
                  );
               })}
      </div>
   );
}

export default News;
