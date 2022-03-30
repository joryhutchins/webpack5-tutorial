# webpack5-tutorial
https://www.youtube.com/watch?v=IZGNcSuwBZs

1 - Initial Setup

- add .gitignore file
-- see https://gist.github.com/andreasonny83/b24e38b7772a3ea362d8e8d238d5a7bc for js template

- create basic folder structure
-- src => where all of the source code will go (the code you write)
-- dist => where all of the static assets are built to

- install webpack and webpack-cli as a dev dependency (-D)
-- npm i -D webpack webpack-cli

- create script to build webpack
-- "build": "webpack --mode production"


2 - Webpack Config

- create config file in root
-- webpack.config.js

- add entry and output configurations


3 - Loaders & Sass Compiling

- install sass & loaders
--  npm i -D sass style-loader css-loader sass-loader

- sass
-- https://www.npmjs.com/package/sass

- style-loader
-- https://www.npmjs.com/package/style-loader

- css-loader
-- https://www.npmjs.com/package/css-loader

- sass-loader
--https://www.npmjs.com/package/sass-loader

- add module to use loaders on build for .scss files


4 - Plugins

- install html webpack plugin
-- npm i -D html-webpack-plugin
-- https://www.npmjs.com/package/html-webpack-plugin

- import it into webpack config file

- setup plugin section & configure plugin with options

- create html template that webpack will use to build /dist/index.html file

- adding [contenthash] to the bundle name will allow it to cache unless changes are made


5 - Webpack Dev Server

- add dev script to package.json
-- "dev": "webpack serve"

- install webpack-dev-server
-- npm i -D webpack-dev-server

- add devServer config options to webpack config file to configure webpack dev server
-- https://webpack.js.org/configuration/dev-server/

- add 'clean: true' to output to only keep most recent bundle file

- add 'devTool: 'source-map' to config file to help with debugging


6 - Babel Loader

- install babel for backwards compatibility
-- npm i -D babel-loader @babel/core @babel/preset-env
-- https://babeljs.io/docs/en/

- add a rule for babel-loader


7 - Asset Resource Loader

- create folder called /assets/

- add svg image to assets folder

- import into index.js

- add new rule to use already existing asset resource loader in webpack for image files

- add img to html template and add JS to add the images src to the template element by ID