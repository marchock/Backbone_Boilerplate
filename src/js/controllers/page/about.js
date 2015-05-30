
define([
	'jquery',
	'backbone',
	'text!templates/page/about.html', // HTML template goes here 
	],

	function($, Backbone, HTML) {

	    var Page = Backbone.View.extend({

	        el: '.page',

	        render: function () {
	            this.$el.html(HTML);
	        }

	    });
	    var p = new Page();
		
		return {

			name: "about", // Name of Controller goes here 

			init: function (a) {
				console.log("ARGUMENTS", a)
			    p.render();
			}
		}
	});