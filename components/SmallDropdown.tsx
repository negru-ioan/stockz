"use client";

import { useState } from "react";
import Dropdown from "./Dropdown";

function SmallDropdown() {
   const [selected, setSelected] = useState("Week");
   const [query, setQuery] = useState("");
   const options = ["Day", "Week", "Month", "Year"];
   return (
      <div className="w-[150px] shadow-md relative z-10">
         <Dropdown
            selected={selected}
            setSelected={setSelected}
            setQuery={setQuery}
            query={query}
            options={options}
         />
      </div>
   );
}

export default SmallDropdown;
