/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C358C",
        secondary: "#535CAE",
        rmp: "#3D416E",
        cbg: "#060924",
        ssbg: "#929292",
        bigtext: "#242424",
        text: "#7B7B7B",
        footer: "#3F3F3F",
      },
      backgroundColor: {
        shadow: "rgba(44, 53, 140, 0.8)",
      },
      boxShadow: {
        primary: "0px 12px 33px -10px rgba(44,53,140,0.8)",
      },
    },
    screens: {
      xxsm: "360px",
      xsm: "540px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
