
define([
	'jquery',
	'backbone',
	'text!templates/page/pictures.html', // HTML template goes here 
	],

	function($, Backbone, HTML) {

		var template = _.template(HTML);

		var obj = {
			pic: {
				name: "",
				id: ""
			}
		};

	    var Page = Backbone.View.extend({

	        el: '.page',

	        render: function (o) {

	        	console.log(0)

	            this.$el.html(template(o));
	        }

	    });
	    var p = new Page();
		
		return {

			name: "pictures", // Name of Controller goes here 

			init: function (a) {
				console.log("ARGUMENTS", a)

				obj.pic.name = a[1]
				obj.pic.id = a[0]

			    p.render(obj);
			}
		}
	});
