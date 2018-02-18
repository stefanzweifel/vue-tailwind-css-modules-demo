const { mix } = require('laravel-mix');

mix.setPublicPath('dist/');

mix.js('src/js/main', 'dist/js/main.js')

// This bit of configuration updates the generated class names from CSS Modules. It will keep the original name (eg. card) in the final class name
mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /bower_components/,
                options: {
                    cssModules: {
                        localIdentName: '[local]--[hash:base64:5]',
                        camelCase: true,
                    },
                },
            },
        ],
    },
});
