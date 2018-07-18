const Encore = require('@symfony/webpack-encore');

var path = require('path');

Encore
    .enableSingleRuntimeChunk()
    // the project directory where all compiled assets will be stored
    .setOutputPath('web/assets/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/assets')
    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()
    // allow legacy applications to use $/jQuery as a global variable
    .autoProvidejQuery()
    // create hashed filenames (e.g. app.abc123.css)
    .enableVersioning(false)
    // trace bugs to original files
    .enableSourceMaps(!Encore.isProduction())
    // allow sass/scss files to be processed
    .enableSassLoader()
    // Global JS & CSS
    .createSharedEntry('global', './assets/js/global.js')
    // Features JS & CSS
    .addEntry('form', './assets/js/form.js')
    .addEntry('page', './assets/js/page.js')
    .addEntry('table', './assets/js/table.js')
;

//module.exports = Encore.getWebpackConfig();


// temp, bug fix...
const config = Encore.getWebpackConfig();

// see https://github.com/symfony/webpack-encore/issues/244
// this is not the workaround I was talking about, but add it just in case
config.resolve.alias.jquery = path.join(__dirname, 'node_modules/jquery/dist/jquery');

module.exports = config;
// temp, bug fix end...
