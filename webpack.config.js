// The path module provides utilities for working with file and directory paths
// https://nodejs.org/api/path.html
const path = require('path')

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
        filename: '[name].js'
    }

}