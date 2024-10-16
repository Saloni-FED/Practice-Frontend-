/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "font-gen": ["Poppins", "sans-serif"],
    },
    colors: {
      green: "#09757A",
      gray: "rgb(107 114 128)",
      white: "white",
      black :"black",
      light:"#D8EFEF"
    },
    extend: {
      backgroundImage: {
        home: "url('https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
    },
  },
  plugins: [],
};
