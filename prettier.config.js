// prettier.config.js

module.exports = {
    plugins: [require('prettier-plugin-tailwindcss')],
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    tailwindConfig: './tailwind.config.js',
}
