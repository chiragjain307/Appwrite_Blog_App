module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#fafcff" },
        blue_gray: { 50: "#e6ebef", 600: "#5f6c86", 900: "#262b35" },
        white: { A700: "#ffffff" },
        blue: { A700: "#0061ff", A700_19: "#0061ff19" },
        red: { 700: "#d13329", "700_19": "#d1332919" },
      },
      boxShadow: { xs: "0px 11px  35px 0px #0000000c" },
      fontFamily: { montserrat: "Montserrat" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
