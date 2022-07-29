const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    publicPath: "/",
    transpileDependencies: true,
    lintOnSave: false,
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        resolve: {
          alias: {
            '@': resolve('src')
          }
        },
    }
});
