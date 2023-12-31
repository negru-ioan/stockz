interface MenuProps {
   open: boolean;
   toggle: () => void;
}

function Menu({ open, toggle }: MenuProps) {
   return (
      <div
         className="w-full p-2 flex cursor-pointer dark:invert"
         onClick={toggle}
      >
         <button type="button">
            <span
               role="img"
               aria-label="menu"
               className="anticon anticon-menu"
               style={{ fontSize: 25 }}
            >
               <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="menu"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
               >
                  <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
               </svg>
            </span>
         </button>
         {open && (
            <p className="ml-4 text-lg font-bold text-apple-800">Close</p>
         )}
      </div>
   );
}

export default Menu;
