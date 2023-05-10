/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Inter', 'sans-serif'],
      },

    },
    plugins: [],
  }
}