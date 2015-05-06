var Promise = require("promise");

var KEYWORD = "guarantee";

function guarantee(target, sequence) {
	var origTarget = this[target];
	sequence = sequence.push ? sequence : [sequence];
	
	this[target] = function() {
		for(var i = 0; i < sequence.length; i++)
			sequence[i]();
		origTarget();
	}
}

module.exports = function(object) {
	object["guarantee"] = guarantee;
	
	return object;
};