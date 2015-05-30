
define([
	'jquery',
	'backbone',
	'text!templates/page/contact.html',
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
			name: "contact",
			init: function () {
			    p.render();
			}
		}
	});