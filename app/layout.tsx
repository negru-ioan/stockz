import "./globals.css";
import { Recursive } from "next/font/google";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import { StockProvider } from "@/context/StockContext";
import TopNavbar from "@/components/TopNavbar";

const inter = Recursive({ subsets: ["latin"] });

export const metadata = {
   title: "Stockz",
   description: "Generated by create next app",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <div className="flex">
               <Navbar />
               <MobileNavbar />

               <StockProvider>
                  <main
                     className="flex min-h-screen w-full flex-col items-center max-sm:px-2 pl-[89px] pr-6 lg:pr-16 lg:pl-[127px] pb-6 
                     bg-apple-200 text-black dark:text-white dark:bg-swamp-700"
                  >
                     <TopNavbar />
                     {children}
                  </main>
               </StockProvider>
            </div>
         </body>
      </html>
   );
}
