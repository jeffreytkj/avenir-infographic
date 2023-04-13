module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/frontend/components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                orange: '#f59e0b'
            }
        },
        fontFamily: {},
        container: {
            padding: '15px'
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
