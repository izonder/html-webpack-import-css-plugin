# html-webpack-import-css-plugin
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/izonder/html-webpack-import-css-plugin/pulls)
[![npm version](https://badge.fury.io/js/html-webpack-import-css-plugin.svg)](https://badge.fury.io/js/html-webpack-import-css-plugin)

Transform `LINK` tag to `STYLE` tag with import directive.

Origin:
```html
<link rel="stylesheet" href="/main.css" />
```

Output:
```html
<style type="text/css">@import url("/main.css");</style>
```

## Reasons
Chrome stores stylesheets from `LINK` tag to disk cache, that causes latency about `300-400 ms` to load the cache. This approach allows to avoid the behavior and force Chrome storing stylesheets to memory cache. It results as `0 ms` to load cache.

## Requirements

* [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
* webpack 3/4 (compatible)

## Installation
#### NPM
```bash
npm install html-webpack-import-css-plugin -D
```
#### Yarn
```bash
yarn add html-webpack-import-css-plugin -D
```

## How to use
```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackImportCssPlugin = require("html-webpack-import-css-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackImportCssPlugin(),
  ]
}
```
