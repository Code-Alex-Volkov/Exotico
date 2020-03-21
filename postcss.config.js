module.exports = {
    syntax: "postcss-scss",
    plugins: [
        require("postcss-easy-import")({
            extensions: ".scss"
        }),
        require("autoprefixer"),
        require("postcss-advanced-variables")({
            variables: require("./src/assets/styles/variable")
        }),
        require("postcss-nested"),
        require("cssnano")()
    ]
};