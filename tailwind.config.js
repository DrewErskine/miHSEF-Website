export default {
  darkMode: 'class',
  content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    theme: {
        fontFamily: {
            display: ['inter'],
            body: ['lato']
        },
        extend: {
            colors: {
                primary: 'rgba(var(--color-primary), <alpha-value>)',
                body: 'rgba(var(--color-body), <alpha-value>)',
                primary: '#FF6D00',
                    econdary: '#1a202c',
            }
        }
    },
    plugins: [
            require('@tailwindcss/typography')
    ]
}