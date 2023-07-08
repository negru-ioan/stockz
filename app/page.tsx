import ChartPanel from "@/components/ChartPanel";
import GlobalIndexes from "@/components/GlobalIndexes";
import MoversContainer from "@/components/MoversContainer";
import News from "@/components/News";
import TrendingStocks from "@/components/TrendingStocks";
import InsiderTrading from "@/components/InsiderTrading";

export default function Home() {
   return (
      <>
         <ChartPanel symbol="TSLA" />

         <GlobalIndexes />

         <MoversContainer />

         <TrendingStocks />

         <InsiderTrading max={false} />

         <News symbol="TSLA" />
      </>
   );
}
