/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "edu-vic": ['"Edu VIC WA NT Beginner"', "cursive"], // Edu VIC WA NT Beginner with cursive fallback
        matemasie: ["Matemasie", "sans-serif"], // Matemasie with sans-serif fallback
        "new-amsterdam": ['"New Amsterdam"', "serif"], // New Amsterdam with serif fallback
      },
    },
  },
  plugins: [],
};
