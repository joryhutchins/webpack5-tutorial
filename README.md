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