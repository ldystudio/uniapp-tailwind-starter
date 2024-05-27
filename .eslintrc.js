/** @type {import("eslint").Linter.Config} */
module.exports = {
    $schema: "https://json.schemastore.org/eslintrc",
    root: true,
    env: {
        node: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "prettier",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential",
        "plugin:tailwindcss/recommended"
    ],
    plugins: ["@typescript-eslint", "vue", "tailwindcss"],
    overrides: [
        {
            env: {
                node: true
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script"
            }
        }
    ],
    parserOptions: {
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        sourceType: "module"
    },
    settings: {
        tailwindcss: {
            callees: ["classnames", "cn", "clsx"],
            config: "tailwind.config.js"
        }
    },
    // 全局变量忽略检测
    globals: {
        uni: "writable"
    },
    rules: {
        // 自定义类名为tw-开头
        "tailwindcss/no-custom-classname": ["warn", { whitelist: ["tw\\-.*"] }],
        "vue/multi-word-component-names": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-var-requires": "off"
    },
    ignorePatterns: ["node_modules/", "dist/"]
}
