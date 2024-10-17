module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.{js,ts,jsx,tsx}',
        './node_modules/@star-insure/sdk/src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            sans: ['MuseoSansRounded', 'Helvetica', 'arial', 'sans-serif'],
            serif: ['Gabriela', 'Georgia', 'serif'],
        },
        container: {
            center: true,
            padding: '1.25rem',
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'rgb(var(--primary-color))',
                    100: 'rgb(var(--primary-100-color))',
                    300: 'rgb(var(--primary-300-color))',
                    700: 'rgb(var(--primary-700-color))',
                },

                secondary: {
                    DEFAULT: 'rgb(var(--secondary-color))',
                    100: 'rgb(var(--secondary-100-color))',
                },
                'on-secondary-light': 'rgb(var(--on-secondary-light-color))',
                'page-background': 'rgb(var(--page-background-color))',
                'footer-background': 'rgb(var(--footer-background-color))',
                'card-subtitle': 'rgb(var(--card-subtitle-color))',
                'card-alternative-background': 'rgb(var(--card-alternative-background-color))',
                'table-header-background': 'rgb(var(--table-header-background-color))',
                'table-header-text': 'rgb(var(--table-header-text-color))',
                'table-row-alternative-background': 'rgb(var(--table-row-alternative-background-color))',
                'gray-600': '#8a8c8e',
                'gray-700': '#666',
            },
            transitionDuration: {
                DEFAULT: '300ms',
            },
            transitionTimingFunction: {
                DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
