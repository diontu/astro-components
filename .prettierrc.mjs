/** @type {import("prettier").Config} */
export default {
    semi: false,
    tabWidth: 4,
    singleQuote: true,
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
}
