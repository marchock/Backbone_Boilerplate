define([
    'controllers/page/index',
    'controllers/page/about',
    'controllers/page/contact',
    'controllers/page/pictures' // add every page controller to this list
],

    function () {
        'use strict';

        var controller = {},
            i = 0,
            eof = arguments.length;

        for (i = 0; i < eof; i += 1) {
            controller[arguments[i].name] = arguments[i];
        }
 
        return {
            gotoPage: function (string, a) {
                controller[string].init(a);
            }
        };
    });