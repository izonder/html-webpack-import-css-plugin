# html-webpack-import-css-plugin
[![Latest Stable Version](https://img.shields.io/npm/v/html-webpack-import-css-plugin.svg?style=flat-square)](https://www.npmjs.com/package/html-webpack-import-css-plugin)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/izonder/html-webpack-import-css-plugin/pulls)
[![License](https://img.shields.io/npm/l/html-webpack-import-css-plugin.svg?style=flat-square)](https://opensource.org/licenses/mit-license.php)

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
