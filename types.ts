import "react";

type LordIconTrigger =
   | "hover"
   | "click"
   | "loop"
   | "loop-on-hover"
   | "morph"
   | "morph-two-way";

type LordIconProps = {
   src?: string;
   trigger?: LordIconTrigger;
   colors?: string;
   delay?: string | number;
};

type LordIconElement = React.DetailedHTMLProps<
   React.HTMLAttributes<HTMLElement>,
   HTMLElement
> &
   LordIconProps;

declare global {
   // eslint-disable-next-line @typescript-eslint/no-namespace
   namespace JSX {
      interface IntrinsicElements {
         "lord-icon": LordIconElement;
      }
   }
}
// 12 data api (time series) https://rapidapi.com/twelvedata/api/twelve-data1

export interface Props_fetchStockPrices {
   symbol: string;
   interval: // | "1min"
   // | "5min"
   // | "15min"
   // | "30min"
   // | "45min"
   | "1h"
      // | "2h"
      // | "4h"
      | "1day"
      | "1week"
      | "1month";
   outputsize: string;
   format?: string;
}

export type SelectedTab = "1h" | "1day" | "1week" | "1month";

export type time_series_stock_values = {
   open: string;
   datetime: string;
   high: string;
   low: string;
   close: string;
   volume: string;
};
