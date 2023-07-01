"use client";

import fetchIndexes from "@/fetch/fetchIndexes";
import indexuri from "@/indexes";

import { createContext, useEffect, useState } from "react";

export const Indexes = createContext(indexuri);

export default function IndexesProvider({
   children,
}: {
   children: React.ReactNode;
}) {
   const [indexes, setIndexes] = useState(indexuri);
   useEffect(() => {
      // fetchIndexes().then((indexes) => setIndexes(indexes));
   }, []);

   return <Indexes.Provider value={indexes}>{children}</Indexes.Provider>;
}
