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
   const navLinks = [
      {
         pathname: "/",
         img: "/dashboard.png",
         name: "Dashboard",
         width: 22,
         height: 22,
      },
      {
         pathname: "/stocks",
         img: "/briefcase.png",
         name: "Stocks",
         width: 20,
         height: 20,
      },
      {
         pathname: "/crypto",
         img: "/blockchain.png",
         name: "Crypto",
         width: 22,
         height: 18,
      },
      {
         pathname: "/settings",
         img: "/gear.png",
         name: "Settings",
         width: 22,
         height: 20,
      },
   ];
   return (
      <nav
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
                  {navLinks.map((link) => {
                     return (
                        <li
                           key={link.name}
                           style={
                              pathname == link.pathname ? currentLocation : {}
                           }
                        >
                           <Link href={link.pathname} className="nav_link">
                              <img
                                 src={link.img}
                                 alt={link.name}
                                 width={link.width}
                                 height={link.height}
                              />
                              {open && <span> {link.name} </span>}
                           </Link>
                        </li>
                     );
                  })}
               </ul>

               <Menu toggle={toggle} open={open} />
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
