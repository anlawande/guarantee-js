var assert = require("assert");
var guarantee = require("../index.js");

describe('Basic', function(){
	it("should call one function after the other", function() {
		var obj = {};

		var a = 1;

		obj.abc = function() {
			a += 2;
		}
		
		obj = guarantee(obj);

		obj.guarantee("abc", function() {
			console.log("Called before!");
			a = 3;
		});

		obj.abc();

		assert.equal(a, 5);
	})
})