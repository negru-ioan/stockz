type Props = {
   selectedTab: string;
   tabs: string[];
   onClick: (tab: string) => void;
};

function Tabs({ selectedTab, tabs, onClick }: Props) {
   const translateTabs: { [key: string]: string } = {
      "1h": "1H",
      "1day": "1D",
      "1month": "1M",
      "1week": "1W",
   };
   return (
      <div className="w-max flex flex-row gap-2 h-min rounded-lg bg-apple-100 dark:bg-swamp-40 mt-1 p-1">
         {tabs.map((tab, index) => {
            return (
               <div
                  key={tab}
                  onClick={() => onClick(tab)}
                  className={`border-slate-200 py-1 px-3 cursor-pointer ${
                     selectedTab === tab
                        ? "bg-white text-black rounded-lg border border-slate-300"
                        : "text-slate-600"
                  }`}
               >
                  <p className="text-sm text-center">
                     {translateTabs[tab] || tab}
                  </p>
               </div>
            );
         })}
      </div>
   );
}

export default Tabs;
