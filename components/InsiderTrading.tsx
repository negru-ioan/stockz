import fetchInsiderTrades from "@/fetch/fetchInsiders";
import insiderTrading from "@/insiderTrading";
import millify from "millify";
import Link from "next/link";

// import insiderTrading from "@/insiderTrading"
const data = [
   {
      change: -3810,
      filingDate: "2023-06-29",
      id: "0001790565-23-000008",
      name: "Baglino Andrew D",
      share: 551775,
      source: "sec",
      symbol: "TSLA",
      transactionCode: "M",
      transactionDate: "2023-06-27",
      transactionPrice: 0,
   },
   {
      change: -6690,
      filingDate: "2023-06-29",
      id: "0001790565-23-000008",
      name: "Baglino Andrew D",
      share: 0,
      source: "sec",
      symbol: "TSLA",
      transactionCode: "M",
      transactionDate: "2023-06-27",
      transactionPrice: 0,
   },
   {
      change: -10500,
      filingDate: "2023-06-29",
      id: "0001790565-23-000008",
      name: "Baglino Andrew D",
      share: 66834,
      source: "sec",
      symbol: "TSLA",
      transactionCode: "S",
      transactionDate: "2023-06-27",
      transactionPrice: 243.13,
   },
   {
      change: 3810,
      filingDate: "2023-06-29",
      id: "0001790565-23-000008",
      name: "Baglino Andrew D",
      share: 77334,
      source: "sec",
      symbol: "TSLA",
      transactionCode: "M",
      transactionDate: "2023-06-27",
      transactionPrice: 17.22,
   },
   {
      change: 6690,
      filingDate: "2023-06-29",
      id: "0001790565-23-000008",
      name: "Baglino Andrew D",
      share: 73524,
      source: "sec",
      symbol: "TSLA",
      transactionCode: "M",
      transactionDate: "2023-06-27",
      transactionPrice: 20.91,
   },
];
const InsiderTrading = async ({ max }: { max: boolean }) => {
   const currentDate = new Date();
   const formattedCurrentDate = currentDate.toISOString().split("T")[0];

   const yesterday = new Date(currentDate);
   yesterday.setDate(currentDate.getDate() - 1);
   const formattedYesterdayDate = yesterday.toISOString().split("T")[0];
   const res = await fetchInsiderTrades();
   console.log(res);
   return (
      <div className="w-full">
         <div className="w-full flex items-center justify-between my-10 font-semibold text-3xl">
            <h1 className="text-start">Insider Trading</h1>
            {max ? (
               <h1 className="text-end">{yesterday.toDateString()}</h1>
            ) : (
               <Link href="/insider-trading" className="text-2xl">
                  More
               </Link>
            )}
         </div>
         <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-swamp-900 dark:text-gray-300 border-b border-slate-300">
                  <tr>
                     <th scope="col" className="px-6 py-3">
                        Date
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Insider Name
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Title
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Stock
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Quantity
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Trade Type
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Qwned
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Price
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Value
                     </th>
                  </tr>
               </thead>
               <tbody className="dark:text-swamp-40">
                  {insiderTrading.transactions
                     .slice(0, max ? -1 : 10)
                     .map((item, index) => (
                        <tr
                           key={item.id}
                           className={`bg-white border-b ${
                              index % 2 === 0
                                 ? "dark:bg-swamp-900"
                                 : "dark:bg-swamp-800"
                           } dark:border-gray-700`}
                        >
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-swamp-40"
                           >
                              {item.filedAt.slice(0, 10)}
                           </th>
                           <td className="px-6 py-4">
                              {item.reportingOwner.name}
                           </td>
                           <td className="px-6 py-4">
                              {(item.reportingOwner.relationship &&
                                 Object.entries(
                                    item.reportingOwner.relationship
                                 )
                                    .find((arr) => arr[1])[0]
                                    .slice(2)) ||
                                 "N/A"}
                           </td>

                           <td className="px-6 py-4">
                              {item.issuer.tradingSymbol}
                           </td>
                           <td className="px-6 py-4">
                              {millify(
                                 item?.nonDerivativeTable?.transactions?.[0]
                                    ?.amounts?.shares ?? 0
                              )}
                           </td>
                           <td className="px-6 py-4">
                              {item?.nonDerivativeTable?.transactions?.[0]
                                 ?.coding?.code === "A" ? (
                                 <p className="text-emerald-300">BUY</p>
                              ) : (
                                 <p className="text-red-300">SELL</p>
                              )}
                           </td>
                           <td className="px-6 py-4">
                              {millify(
                                 item?.nonDerivativeTable?.transactions?.[0]
                                    ?.postTransactionAmounts
                                    ?.sharesOwnedFollowingTransaction ?? 0
                              )}
                           </td>
                           <td className="px-6 py-4">
                              $
                              {millify(
                                 item?.nonDerivativeTable?.transactions?.[0]
                                    ?.amounts?.pricePerShare ?? 0
                              )}
                           </td>
                           <td className="px-6 py-4">
                              $
                              {millify(
                                 item?.nonDerivativeTable?.transactions?.[0]
                                    ?.amounts?.shares *
                                    item?.nonDerivativeTable?.transactions?.[0]
                                       ?.amounts?.pricePerShare ?? 0
                              )}
                           </td>
                        </tr>
                     ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default InsiderTrading;
