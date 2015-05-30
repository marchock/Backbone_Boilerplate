
define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/component/header.html', // HTML template goes here 
    ],

    function($, Backbone, _, HTML) {

        var template = _.template(HTML),

            obj = {
                links: [
                    ["", "Home"],
                    ["about", "About Us"],
                    ["conatct", "Contact Us"],
                    ["pictures", "Pictures"]
                ]
            },

            Component = Backbone.View.extend({

                el: '.header',

                render: function () {
                    this.$el.html(template(obj));
                }

            }),

            c = new Component(),

            navBtns;
        


        c.render();
        

        /*
         * Highlight buttons when selected 
         *
         */
        navBtns = c.$el.find("a");
        
        navBtns.on("click", function (e) {
            navBtns.removeClass("active");
            $(e.currentTarget).addClass("active");
        })
        

    });