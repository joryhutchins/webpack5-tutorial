// The path module provides utilities for working with file and directory paths
// https://nodejs.org/api/path.html
const path = require('path')

// https://www.npmjs.com/package/html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // note: now that mode is set here, we can remove  --mode production from package.json
    mode: 'development',
    
    // An entry point indicates which module webpack should use to begin building out its internal dependency graph. Webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).
    // https://webpack.js.org/concepts/#entry
    entry: {
        // __dirname is an environment variable that tells you the absolute path of the directory containing the currently executing file.
        // https://www.digitalocean.com/community/tutorials/nodejs-how-to-use__dirname
        bundle: path.resolve(__dirname, 'src/index.js'),

    },

    // The output property tells webpack where to emit the bundles it creates and how to name these files. It defaults to ./dist/main.js for the main output file and to the ./dist folder for any other generated file.
    // https://webpack.js.org/concepts/#output
    output: {
        path: path.resolve(__dirname, 'dist'),
        
        // [name] takes the name in config in the entry and creates the file using that value
        // [contenthash] automatically caches the bundle unless changes are made - https://webpack.js.org/guides/caching/
        filename: '[name][contenthash].js',

        // only keeps the most recent compiled file
        clean: true,

        // keep the asset name and extension
        assetModuleFilename: '[name][ext]'
    },

    // Creates a js.map source file - helps with debugging
    devtool: 'source-map',

    // Adding config options for the webpack dev server
    // https://webpack.js.org/configuration/dev-server/
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },

    // In order to build and compile the Sass styling, we need to create a module for the loader
    module: {
        rules: [
            {
                // Any files that end with.scss -> apply these loaders
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                // Any files that end with .js -> apply these loaders
                // Exclude node_modules to not mess with node packages
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                // Any image files will be handled with this loader
                // 'i' at the end makes it case insensitive
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },

    // Load any plugins inside here
    plugins: [

        // Initialize plugin with any needed configuration options
        // https://github.com/jantimon/html-webpack-plugin#options
        new HtmlWebpackPlugin({
            title: 'Webpack Tutorial',
            filename: 'index.html',
            template: 'src/template.html'
        })
    ]

}