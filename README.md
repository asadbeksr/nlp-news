#  Evaluate A News Article with Natural Language Processing App

4th project of Frontend Nanodegree program.

 In this project we used API of servise named meaningcloud API to analyse and display analyzed data dynamically

## Used Tools

- WHTML
- CSS
- JavaScript
- Node
- Webpack & cli
- Workbox
- Jest
- meaningcloud API

## Installation & Using 

Make sure Node and npm are installed from the terminal.

`node -v`
`npm -v`

1. Download or clone project

`git clone <repository>` 

2. `cd` into project folder and run:
- ```npm install```
3. Install loaders and plugins

npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin

4. Get your API key from https://meaningcloud.com
    
   create `.env` file and 

   replace start with your API key `API_KEY = ***********************`

   
- ```npm start``` to start the app
- this app runs on localhost:8080, but you can of course edit that in server.js


