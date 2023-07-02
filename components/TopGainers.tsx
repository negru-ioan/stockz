"use client";
import SmallDropdown from "./SmallDropdown";
import Gainer from "./Gainer";
import { useEffect, useState } from "react";

const moversArr = [
   {
      Symbol: "NVR",
      CompanyName: "NVR Inc",
      PriceLast: 6350.62,
      PriceLastTruncated: "6350.62",
      PriceLastFormatted: "$6,350.62",
      PriceChangePercent: 0.8737834776931898,
      PriceChangePercentTruncated: "0.87378",
      PriceChangePercentFormatted: "(0.87%)",
      PriceChange: 55.01000000000022,
      PriceChangeTruncated: "55.01",
      PriceChangeFormatted: "+55.01",
      PriceLow52Week: 3816.555,
      PriceLow52WeekFormatted: "$3,816.56",
      PriceHigh52Week: 6386.62,
      PriceHigh52WeekFormatted: "$6,386.62",
      Volume: 21439,
      VolumeTruncated: "21439",
      VolumeFormatted: "21.4K",
      HasRatingsData: true,
      IsSeri: false,
      CurrentEquityRating: "A",
      CurrentModifier: "",
   },
   {
      Symbol: "BKNG",
      CompanyName: "Booking Holdings Inc",
      PriceLast: 2700.33,
      PriceLastTruncated: "2700.33",
      PriceLastFormatted: "$2,700.33",
      PriceChangePercent: 1.6724964324845375,
      PriceChangePercentTruncated: "1.6725",
      PriceChangePercentFormatted: "(1.67%)",
      PriceChange: 44.42000000000007,
      PriceChangeTruncated: "44.42",
      PriceChangeFormatted: "+44.42",
      PriceLow52Week: 1616.85,
      PriceLow52WeekFormatted: "$1,616.85",
      PriceHigh52Week: 2786.85,
      PriceHigh52WeekFormatted: "$2,786.85",
      Volume: 306627,
      VolumeTruncated: "306627",
      VolumeFormatted: "306.6K",
      HasRatingsData: true,
      IsSeri: false,
      CurrentEquityRating: "A",
      CurrentModifier: "",
   },
   {
      Symbol: "AZO",
      CompanyName: "Autozone Inc",
      PriceLast: 2493.36,
      PriceLastTruncated: "2493.36",
      PriceLastFormatted: "$2,493.36",
      PriceChangePercent: 1.5459802883440594,
      PriceChangePercentTruncated: "1.54598",
      PriceChangePercentFormatted: "(1.55%)",
      PriceChange: 37.960000000000036,
      PriceChangeTruncated: "37.96",
      PriceChangeFormatted: "+37.96",
      PriceLow52Week: 2050.21,
      PriceLow52WeekFormatted: "$2,050.21",
      PriceHigh52Week: 2750,
      PriceHigh52WeekFormatted: "$2,750.00",
      Volume: 190097,
      VolumeTruncated: "190097",
      VolumeFormatted: "190.1K",
      HasRatingsData: true,
      IsSeri: false,
      CurrentEquityRating: "B",
      CurrentModifier: "",
   },
   {
      Symbol: "SEB",
      CompanyName: "Seaboard Corp",
      PriceLast: 3560.72,
      PriceLastTruncated: "3560.72",
      PriceLastFormatted: "$3,560.72",
      PriceChangePercent: 0.9955695735785454,
      PriceChangePercentTruncated: "0.99557",
      PriceChangePercentFormatted: "(1.00%)",
      PriceChange: 35.09999999999991,
      PriceChangeTruncated: "35.1",
      PriceChangeFormatted: "+35.10",
      PriceLow52Week: 3295,
      PriceLow52WeekFormatted: "$3,295.00",
      PriceHigh52Week: 4242.95,
      PriceHigh52WeekFormatted: "$4,242.95",
      Volume: 1236,
      VolumeTruncated: "1236",
      VolumeFormatted: "1.2K",
      HasRatingsData: true,
      IsSeri: false,
      CurrentEquityRating: "C",
      CurrentModifier: "",
   },
   {
      Symbol: "CMG",
      CompanyName: "Chipotle Mexican Grill Inc",
      PriceLast: 2139,
      PriceLastTruncated: "2139",
      PriceLastFormatted: "$2,139.00",
      PriceChangePercent: 1.3455889320572392,
      PriceChangePercentTruncated: "1.34559",
      PriceChangePercentFormatted: "(1.35%)",
      PriceChange: 28.40000000000009,
      PriceChangeTruncated: "28.4",
      PriceChangeFormatted: "+28.40",
      PriceLow52Week: 1233.61,
      PriceLow52WeekFormatted: "$1,233.61",
      PriceHigh52Week: 2144.165,
      PriceHigh52WeekFormatted: "$2,144.17",
      Volume: 273135,
      VolumeTruncated: "273135",
      VolumeFormatted: "273.1K",
      HasRatingsData: true,
      IsSeri: false,
      CurrentEquityRating: "C",
      CurrentModifier: "",
   },
];

// const images = [
//    "https://api.twelvedata.com/logo/chipotle.com",
//    "https://api.twelvedata.com/logo/seaboardcorp.com",
//    "https://api.twelvedata.com/logo/autozone.com",
//    "https://api.twelvedata.com/logo/bookingholdings.com",
//    "https://api.twelvedata.com/logo/nvrinc.com",
// ];

function TopGainers() {
   const [movers, setMovers] = useState(moversArr);
   // useEffect(() => {
   //    fetchMovers().then(({ CompanyMovers }) => setMovers(CompanyMovers));
   //    console.log(movers);
   // }, []);

   return (
      <div className="top_gainers w-96 border mb-7 mt-14 bg-white p-5 rounded-lg border-gray-400">
         <div className="flex items-center">
            <h3 className="text-start text-xl font-semibold text-black w-full">
               Top Gainers
            </h3>

            <SmallDropdown />
         </div>
         <div className="flex flex-col gap-3 mt-6">
            {movers.length > 0 &&
               movers.map((stock, i) => {
                  return (
                     <Gainer
                        name={stock.CompanyName}
                        stockName={stock.Symbol}
                        price={stock.PriceLast}
                        change={stock.PriceChange}
                        // img={images[i]}
                     />
                  );
               })}
         </div>
      </div>
   );
}

export default TopGainers;
