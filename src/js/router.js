define([
    'backbone',
    'navigation',
    'controllers/component/header',
    'controllers/component/footer'
    ],

    function(Backbone, nav, header) {

        var Router = Backbone.Router.extend({

                routes: {
                    '':                   'index',
                    'about':              'about',
                    'about/:id':          'about',
                    'contact':            'contact',
                    'pictures':           'pictures',
                    'pictures/:id/:type': 'pictures',
                    '*actions':           'defaultRoute'
                },

                index: function () {
                    nav.gotoPage("index");
                },

                about: function () {
                    nav.gotoPage("about", arguments);
                },

                contact: function () {
                    nav.gotoPage("contact");
                },

                pictures: function () {
                    nav.gotoPage("pictures", arguments);
                },

                defaultRoute: function () {
                    nav.gotoPage("index");
                }
            });
      
        var router = new Router();
        Backbone.history.start();
    });