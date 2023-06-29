"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { usePathname } from "next/navigation";

function Navbar() {
   const [open, setOpen] = useState(false);
   const toggle = () => setOpen((prev) => !prev);
   const pathname = usePathname();
   const currentLocation = { borderRight: "2px solid #54d454" };
   return (
      // <div
      //    className="max-sm:hidden"
      //    style={{
      //       width: open ? "196px" : "70px",
      //       borderRight: "1px solid #ccc",
      //    }}
      // >
      <nav
         // className="absolute bottom-0 left-0 right-0 z-50 w-full bg-white shadow-md flex justify-between items-center px-3 py-3"
         className="hidden sm:block h-screen fixed top-0 left-0 bg-white max-md:w-16 z-50 border-r border-apple-300"
         style={{ width: open ? "170px" : "65px" }}
      >
         <div className="flex justify-between sm:justify-normal flex-col pl-3 py-3 h-full">
            {open && (
               <Link href="/" className="logo max-md:hidden">
                  <Image
                     className="saturate-200"
                     src="/logo2.png"
                     alt="logo"
                     width={130}
                     height={130}
                  />
               </Link>
            )}

            <div className="small_nav max-md:w-10 flex flex-col h-full justify-between">
               <ul className="list-none font-bold outline-none">
                  <li>
                     <Link
                        href="/"
                        className="nav_link"
                        style={pathname == "/" ? currentLocation : {}}
                     >
                        <img
                           className="opacity-60"
                           src="/dashboard.png"
                           alt="dashboard"
                           width={22}
                           height={22}
                        />
                        {open && <span> Dashboard </span>}
                     </Link>
                  </li>
                  <li>
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
                        {open && <span> Stocks </span>}
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/crypto"
                        className="nav_link"
                        style={pathname == "/crypto" ? currentLocation : {}}
                     >
                        <Image
                           // className="transform -translate-x-[0.5px]"
                           src="/blockchain.png"
                           alt="crypto"
                           width={22}
                           height={18}
                        />
                        {open && <span> Crypto </span>}
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/etf"
                        className="nav_link"
                        style={pathname == "/etf" ? currentLocation : {}}
                     >
                        <Image
                           src="/stack2.png"
                           alt="etf's"
                           width={22}
                           height={20}
                        />
                        {open && <span> ETF's </span>}
                     </Link>
                  </li>
                  <li>
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
                        {open && <span> Settings </span>}
                     </Link>
                  </li>
               </ul>

               <Menu toggle={toggle} open={open} />
            </div>
         </div>
      </nav>
      // </div>
   );
}

export default Navbar;
