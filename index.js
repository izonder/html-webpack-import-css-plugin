const camelize = require('camelize');

class HtmlWebpackImportCssPlugin {
    /**
     * Plugin bootstrap
     * @param {*} compiler
     */
    apply(compiler) {
        this.shim(compiler, 'compilation')((compilation) => { //eslint-disable-line
            this.shim(compilation, 'html-webpack-plugin-after-html-processing')(this.transform);
        });
    }

    /**
     * Shim backward compatibility 3/4 versions
     * @param {*} target
     * @param {string} hook
     * @returns {Function}
     */
    shim(target, hook) {
        const name = this.constructor.name;

        return target.hooks ?
            target.hooks[hook].tapAsync.bind(target.hooks[camelize(hook)], name) :  //webpack 4
            target.plugin.bind(target, hook);                                       //webpack 3
    }

    /**
     * Transform HTML
     * @param {*} data
     * @param {Function} cb
     */
    transform(data, cb) {
        ((data.assets || {}).css || []).forEach((name) => {
            const pattern = new RegExp(`<link[^>]+href=['"]${name}['"][^>]+(>|\/>|><\/link>)`),
                substitute = `<style type="text/css">@import url("${name}");</style>`;

            data.html = data.html.replace(pattern, substitute);
        });

        cb(null, data);
    }
}

module.exports = HtmlWebpackImportCssPlugin;
