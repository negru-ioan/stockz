// "use client";
import fetchMovers from "@/fetch/fetchMovers";
// import { useEffect, useState } from "react";
import moverss from "@/movers";
import Mover from "./Mover";

type Response = {
   actives: Mover[];
   gainers: Mover[];
   losers: Mover[];
};

async function MoversContainer() {
   // const [movers, setMovers] = useState(moverss);
   //    useEffect(() => {
   //       fetchMovers().then((all) => setMovers(all));
   //       console.log("movers", movers);
   //    }, []);
   //    Object.values(movers).forEach((category) => {
   //       category.forEach((stock) => console.log(stock.performanceID));
   //    });
   const movers = (await fetchMovers()) as Response;
   return (
      <div className="movers_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
         {movers &&
            Object.values(movers).map((category, i) => (
               <Mover
                  key={i}
                  category={category}
                  categoryName={Object.keys(movers)[i]}
               />
            ))}
      </div>
   );
}

export default MoversContainer;
