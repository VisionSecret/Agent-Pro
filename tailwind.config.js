/** @type {import('tailwindcss').Config} */
export default {
content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'], // ✅ Custom font name added
      },
    },
  },
  plugins: [], // You can add plugins like daisyUI here later
};
