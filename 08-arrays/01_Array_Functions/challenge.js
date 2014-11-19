module.exports.reversePlusOne = function (array) {
var newArray = array.reverse() ; 
newArray.unshift(1);
	return newArray ;
};
module.exports.plusesEverywhere = function (array) {
var myVar = array.join('+');
return myVar
};


module.exports.arrayQuantityPlusOne = function (array) {
 var plusOne = array.push([1]) ;
	return plusOne ;
} ;
