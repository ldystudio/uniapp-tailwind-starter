/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    // 兼容小程序（微信小程序兼容不用改，未测试其他），将 : 替换成 __
    // separator: "__",
    theme: {
        extend: {}
    },
    darkMode: "class",
    plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")]
}
