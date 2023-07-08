"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function MobileNavbar() {
   const pathname = usePathname();
   const currentLocation = { borderBottom: "2px solid #32cd32" };

   return (
      <div className="mobile_navbar rounded-lg fixed bottom-[1px] left-0 right-0 w-full flex justify-center items-center h-[50px] px-4 sm:hidden z-50">
         <ul className="list-none font-bold outline-none flex justify-between items-center w-full h-full">
            <div className="mobile_navbar__li">
               <Link
                  href="/"
                  className="nav_link"
                  style={pathname == "/" ? currentLocation : {}}
               >
                  <Image
                     className="opacity-70"
                     src="/dashboard.png"
                     alt="dashboard"
                     width={22}
                     height={22}
                  />
               </Link>
            </div>
            <div className="mobile_navbar__li">
               <Link
                  href="/stocks"
                  className="nav_link"
                  style={pathname == "/stocks" ? currentLocation : {}}
               >
                  <Image
                     src="/briefcase.png"
                     alt="stock"
                     width={20}
                     height={20}
                  />
               </Link>
            </div>
            <div className="mobile_navbar__li">
               <Link
                  href="/crypto"
                  className="nav_link"
                  style={pathname == "/crypto" ? currentLocation : {}}
               >
                  <Image
                     src="/blockchain.png"
                     alt="crypto"
                     width={22}
                     height={18}
                  />
               </Link>
            </div>
            <div className="mobile_navbar__li">
               <Link
                  href="/etf"
                  className="nav_link"
                  style={pathname == "/etf" ? currentLocation : {}}
               >
                  <Image src="/stack2.png" alt="etf's" width={22} height={20} />
               </Link>
            </div>
            <div className="mobile_navbar__li">
               <Link
                  href="/settings"
                  className="nav_link"
                  style={pathname == "/settings" ? currentLocation : {}}
               >
                  <Image
                     src="/gear.png"
                     alt="settings"
                     width={22}
                     height={20}
                  />
               </Link>
            </div>
         </ul>
      </div>
   );
}

export default MobileNavbar;
