/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '420px',
            md: '768px',
            lg: '1300px',
        },
        extend: {
            colors: {
                gray: {
                    100: '#FAFAFA',
                    600: 'hsl(0, 0%, 63%)',
                    800: 'hsl(0, 0%, 27%)',
                },
            },
            fontFamily: {
                sans: ['League Spartan', ...defaultTheme.fontFamily.sans],
            },
            gridTemplateColumns: {
                hero: 'minmax(31.25rem, 52.5rem) 37.5rem',
                footer: '26.25rem 1fr 27.5rem',
            },
            maxWidth: {
                '8xl': '90rem',
            },
        },
    },
    plugins: [],
};
