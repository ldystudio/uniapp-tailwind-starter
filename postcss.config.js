const comment = require("postcss-comment")
const tailwindcss = require("tailwindcss")
const autoprefixer = require("autoprefixer")

module.exports = {
    parser: comment,
    plugins: [
        tailwindcss({
            config: "./tailwind.config.js"
        }),
        autoprefixer({
            remove: true
        })
    ]
}
