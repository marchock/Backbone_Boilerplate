
require.config({

    enforceDefine : false,

    //By default load any module IDs from js/lib
    //baseUrl: 'js/lib',

    paths: {
        // lib
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        text: 'lib/text',

        router: 'router',
        navigation: 'navigation',

        // controllers
        controllers: 'controllers',

        // templates
        templates: '../templates',
    },

    shim: {

        underscore: {
            exports: '_'
        },

        Backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});
// // Start the main app logic.
//require(['Backbone'], function () {});
require(['router'], function (router) {});