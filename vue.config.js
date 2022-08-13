const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
module.exports = defineConfig({
    publicPath: "/",
    outputDir: "dist",
    assetsDir: "static",
    transpileDependencies: true,
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                "@": resolve("src"),
            },
        },
    },
});
