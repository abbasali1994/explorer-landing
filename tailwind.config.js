/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-blue-800": "#1c2c59",
        mediumspringgreen: "#2de376",
        blueviolet: "rgba(96, 57, 251, 0.8)",
        gray: {
          "100": "rgba(255, 255, 255, 0.4)",
          "200": "rgba(255, 255, 255, 0.15)",
          "300": "rgba(0, 0, 0, 0.04)",
          "400": "rgba(0, 0, 0, 0.1)",
          "500": "rgba(255, 255, 255, 0.2)",
          "600": "rgba(255, 255, 255, 0.1)",
          "700": "rgba(255, 255, 255, 0.04)",
        },
        darkgray: "#a6b2bd",
        midnightblue: {
          "100": "#1f033a",
          "200": "#1e0132",
          "300": "#1c0032",
        },
        "text-light": "#808da0",
        dark: "#25282b",
        coral: {
          "100": "#f97a51",
          "200": "#f9774b",
        },
        "text-white": "#fff",
        gainsboro: "#d9d9d9",
        "text-dark": "#525f7f",
        "background-100": "#f2f3f6",
        "wallet-brand": "#3b82f6",
        "wallet-accent": "#d43bf6",
        lightcoral: "#f38c8c",
        lightskyblue: "#4ec2ec",
        "wallet-error": "#fc7c5f",
      },
      fontFamily: {
        inter: "Inter",
        jost: "Jost",
        "nunito-sans": "'Nunito Sans'",
        "font-awesome-6-pro": "'Font Awesome 6 Pro'",
        anuphan: "Anuphan",
      },
      borderRadius: {
        "1174xl-7": "1193.7px",
        "81xl": "100px",
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      lg: "18px",
      xs: "12px",
      smi: "13px",
      "5xl": "24px",
      "3xs": "10px",
      mini: "15px",
      xl: "20px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
