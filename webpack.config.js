const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports= {
    entry:{//webpack entry point(s)
        bundle: path.resolve(__dirname,'src/index.js')
    }, 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js'
    },
    mode: 'development',
    module: {
        rules: [
            {
              test:/\.scss$/,
              use: ['style-loader','css-loader','sass-loader'],
            },
        ]
    },
    plugins: [ 
        new HtmlWebpackPlugin ({
        title: 'Webpack App',
        filename: 'index.html',
        template: 'src/template.html',
        }),
]
}
