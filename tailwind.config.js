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
               40: "#f2fcf1cf",
               50: "#f2fcf1",
               100: "#defade",
               200: "#c0f3bf",
               300: "#8de88d",
               400: "#54d454",
               500: "#32cd32",
               600: "#209920",
               700: "#1c791d",
               800: "#1b601c",
               900: "#184f1a",
               950: "#082b09",
            },
         },
      },
   },
   plugins: [],
};
