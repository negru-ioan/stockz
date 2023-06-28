interface MenuProps {
   toggle: () => void;
}

function Menu({ toggle }: MenuProps) {
   return (
      <div className="w-full p-2">
         <button type="button" onClick={toggle}>
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
      </div>
   );
}

export default Menu;
