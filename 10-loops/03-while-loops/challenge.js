module.exports.stream = function (conditionalFn, actionFn){
	while (conditionalFn()) {
		actionFn();
	}
}

module.exports.sumNumbers = function (numbers) {
var total = 0;
	while (numbers.length !== 0) {
		total += numbers.pop();
	}
	return total;
};

