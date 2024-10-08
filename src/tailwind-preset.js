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
                primary: 'var(--primary-color)',
                'primary-light': 'var(--primary-light-color)',
                'primary-xlight': 'var(--primary-xlight-color)',
                'primary-dark': 'var(--primary-dark-color)',
                secondary: 'var(--secondary-color)',
                'page-background': 'var(--page-background-color)',
                'footer-background': 'var(--footer-background-color)',
                'page-header-background': 'var(--page-header-background-color)',
                'page-header-text': 'var(--page-header-text-color)',
                'back-button-background': 'var(--back-button-background-color)',
                'back-button-text': 'var(--back-button-text-color)',
                'section-title': 'var(--section-title-color)',
                'sub-section-title': 'var(--sub-section-title-color)',
                'section-separator': 'var(--section-separator-color)',
                'section-header-background': 'var(--section-header-background-color)',
                'section-header-text': 'var(--section-header-text-color)',
                'card-subtitle': 'var(--card-subtitle-color)',
                'card-alternative-background': 'var(--card-alternative-background-color)',
                'table-header-background': 'var(--table-header-background-color)',
                'table-header-text': 'var(--table-header-text-color)',
                'table-row-alternative-background': 'var(--table-row-alternative-background-color)',
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
