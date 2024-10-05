/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                grey: {
                    600: 'hsl(0, 0%, 63%)',
                    800: 'hsl(0, 0%, 27%)',
                },
            },
            fontFamily: {
                sans: ['League Spartan', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
