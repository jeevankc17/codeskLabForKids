/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nero: "#fff",
        "footer-header": "#0063b0",
        black1: "#000",
        "aqua-deep": "#ff5a43",
        dimgray: "#666",
        gray1: {
          "100": "#fbfbfb",
          "200": "#242424",
          "300": "rgba(0, 0, 0, 0.6)",
          "400": "rgba(0, 0, 0, 0.23)",
        },
        nero1: "#d9d9d9",
        "wwwcodingalcom-mine-shaft": "#3a3a3a",
        lavenderblush: "rgba(255, 237, 235, 0.75)",
        "dim-green": "#58d1bd",
        "chateau-green": "#4aaf50",
        "dodger-blue": "#1f95f2",
        blues: "#344f93",
        silver: "#c1c6ce",
        "gray-900": "#1d2026",
        "primary-500": "#ff6636",
        darkslategray: {
          "100": "#333",
          "200": "#273339",
        },
        "purple-heart": "#8a35bc",
        darkslateblue: "#404a80",
        tomato: "#ff5c4b",
        aliceblue: {
          "100": "#f0f4ff",
          "200": "#e6e9f0",
        },
        ghostwhite: "#fbf8fe",
        lightslategray: "#7e8a97",
        black: "#191919",
        "yellow-mango": "#faff00",
        cornflowerblue: "#428cd4",
        whitesmoke: {
          "100": "#f5f7f7",
          "200": "#eaeaea",
          "300": "#e4eaeb",
        },
        darkgray: "#8e989c",
        slategray: "#576074",
      },
      spacing: {},
      fontFamily: {
        "body-large-600": "Poppins",
        inter: "Inter",
        "segoe-ui": "'Segoe UI'",
        roboto: "Roboto",
        "space-mono": "'Space Mono'",
        "nunito-sans": "'Nunito Sans'",
      },
      borderRadius: {
        "61xl-5": "80.5px",
        "100xl": "119px",
        "3xs": "10px",
        mini: "15px",
        "8xs": "5px",
        "13xl": "32px",
        "11xl": "30px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      lg: "18px",
      "13xl": "32px",
      xs: "12px",
      "17xl": "36px",
      sm: "14px",
      "5xl": "24px",
      "29xl": "48px",
      "21xl": "40px",
      "sm-6": "13.6px",
      "sm-8": "13.8px",
      "mid-6": "17.6px",
      "9xl-7": "28.7px",
      "16xl": "35px",
      "lgi-5": "19.5px",
      "15xl-6": "34.6px",
      "6xl-7": "25.7px",
      "lg-4": "18.4px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "750px",
      },
      sm: {
        max: "450px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
