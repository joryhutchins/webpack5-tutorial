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