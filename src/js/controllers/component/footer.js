
define([
    'jquery',
    'backbone',
    'text!templates/component/footer.html', // HTML template goes here 
    ],

    function($, Backbone, HTML) {

        var template = _.template(HTML),
        
            obj = {
                links: [
                    ["", "Home"],
                    ["about", "About Us"],
                    ["conatct", "Contact Us"]
                ]
            },

            Component = Backbone.View.extend({

            el: '.footer',

            render: function () {
                this.$el.html(template(obj));
            }

        });
        
        var c = new Component();
        c.render();
        
        return {}
    });