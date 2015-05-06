var Promise = require("promise");

function guarantee(object, target, sequence) {
	var origTarget = object[target];
	sequence = sequence.push ? sequence : [sequence];
	
	object[target] = function() {
		for(var i = 0; i < sequence.length; i++)
			sequence[i]();
		origTarget();
	}
}

module.exports = guarantee;