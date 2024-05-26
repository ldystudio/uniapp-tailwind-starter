const path = require("path")
const comment = require("postcss-comment")
const tailwindcss = require("tailwindcss")
const autoprefixer = require("autoprefixer")
const postcssImport = require("postcss-import")

module.exports = {
    parser: comment,
    plugins: [
        postcssImport({
            resolve(id, basedir, importOptions) {
                if (id.startsWith("~@/")) {
                    return path.resolve(process.env.UNI_INPUT_DIR, id.substring(3))
                } else if (id.startsWith("@/")) {
                    return path.resolve(process.env.UNI_INPUT_DIR, id.substring(2))
                } else if (id.startsWith("/") && !id.startsWith("//")) {
                    return path.resolve(process.env.UNI_INPUT_DIR, id.substring(1))
                }
                return id
            }
        }),
        tailwindcss({
            config: "./tailwind.config.js"
        }),
        autoprefixer({
            remove: true
        })
    ]
}
