/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            md: '768px',
            lg: '1200px',
        },
        extend: {
            colors: {
                gray: {
                    600: 'hsl(0, 0%, 63%)',
                    800: 'hsl(0, 0%, 27%)',
                },
            },
            fontFamily: {
                sans: ['League Spartan', ...defaultTheme.fontFamily.sans],
            },
            gridTemplateColumns: {
                hero: 'minmax(500px, 840px) 600px',
                heroMd: '1fr',
                footer: '420px 1fr 440px',
                footerMd: '420px 1fr',
            },
        },
    },
    plugins: [],
};
