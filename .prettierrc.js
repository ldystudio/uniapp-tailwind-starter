/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
    printWidth: 88,
    trailingComma: "none",
    semi: false,
    vueIndentScriptAndStyle: true,
    tabWidth: 4,
    useTabs: false,
    importOrder: [
        "^(vue$)|^(vue/(.*)$)",
        "<BUILTIN_MODULES>",
        "<TYPES>",
        "<TYPES>^[.]",
        "<THIRD_PARTY_MODULES>",
        "^@[^/]",
        "",
        "^[@/]",
        "^[~/]",
        "^[./]",
        "",
        "\\.(scss|less|css)$"
    ],
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
    importOrderTypeScriptVersion: "5.0.0",
    plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"]
}
