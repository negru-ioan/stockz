import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";

function TopNavbar() {
   return (
      <div className="w-full flex justify-between items-center relative">
         <h1 className="text-4xl font-bold hidden sm:block">Dashboard</h1>
         <Link href="/" className="logo">
            <Image
               className="saturate-200 sm:hidden -translate-x-2"
               src="/logo2.png"
               alt="logo"
               width={130}
               height={90}
            />
         </Link>
         <div className="center gap-1 sm:gap-3 justify-end py-5">
            {/* <div className="searchBar flex flex-row items-center md:w-[150px] lg:w-full rounded-full max-sm:h-[2.9rem] h-full bor max-sm:absolute top-24 right-0 left-0">
               <input
                  id="searchQueryInput"
                  type="text"
                  name="searchQueryInput"
                  placeholder="Search"
                  value=""
               /> 
               <button 
                  id="searchQuerySubmit"
                  type="submit"
                  name="searchQuerySubmit"
                  className="bor"
                  >
                  <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                  <path
                  fill="#666666"
                  d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                  ></path>
                  </svg>
               </button>
            </div> */}

            <SearchBar />
            <div className="rounded-full p-2 bg-white bor h-full w-10">
               <Image
                  className="top_nav_icon"
                  width={40}
                  height={29}
                  src="/bell2.png"
                  alt="notification"
               />
            </div>
            <div className="rounded-full p-2 bg-white bor h-full w-10">
               <Image
                  width={40}
                  height={29}
                  src="/user.png"
                  alt="notification"
               />
            </div>
         </div>
      </div>
   );
}

export default TopNavbar;
