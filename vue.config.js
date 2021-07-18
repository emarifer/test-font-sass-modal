const path = require('path');

module.exports = {
    pages: {
        index: {
          entry: 'src/main.js',
          title: 'Test with Sass and use of modals'
        },
      },
    pwa: {
        name: 'Test with Sass and use of modals', // my-pwa
        themeColor: '#9900aa',
        workboxPluginMode: "InjectManifest", // GenerateSW
        workboxOptions: {
            swSrc: "./src/service-worker.js"
        },
        manifestOptions: {
            background_color: "#9900aa"
        }
    },
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
    },
    // css: {
    //     loaderOptions: {
    //         sass: {
    //             additionalData: `@import "@/assets/_variables.scss"`
    //         },
    //     }
    // }
}

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/assets/scss/*.scss'),
            ],
        })
}

// CONFIGURACION PARA USO DE SASS. VER:
// https://cli.vuejs.org/guide/css.html#automatic-imports