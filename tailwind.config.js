/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
         transitionTimingFunction: {
            bounce: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
         },
         transitionDuration: {
            150: "150ms",
         },
         colors: {
            apple: {
               40: "#ebf7eb",
               50: "#ebf7eb",
               100: "#d5fad5",
               200: "#a5fda5",
               300: "#5bf55b",
               400: "#00ee00",
               500: "#00e200",
               600: "#00d900",
               700: "#00d600",
               800: "#00d400",
               900: "#00d200",
               950: "#00cd00",
            },
            // apple: {
            //    40: "#6ec7bf",
            //    50: "#68c4bd",
            //    100: "#51bbb3",
            //    200: "#3ab2a9",
            //    300: "#23a8a0",
            //    400: "#0d9f96",
            //    500: "#00968c",
            //    600: "#008880",
            //    700: "#007d74",
            //    800: "#00726a",
            //    900: "#006860",
            //    950: "#006156",
            // },
            swamp: {
               40: "#ede6cd",
               50: "#FBD85D",
               100: "929371",
               500: "#3C4835",
               600: "#5cb08d",
               700: "#417F69",
               750: "#10332ed1",
               800: "#254d46",
               900: "#10332e",
            },
            darkest: "#05100E",
            darker: "#36462A",
            dark: "#56543D",
            base: "#A9A69F",
            light: "#847B4E",
            lighter: "#959665",
         },
      },
   },
   plugins: [],
};
