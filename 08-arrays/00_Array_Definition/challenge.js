module.exports.newArray = function (arg1, arg2, arg3, arg4) {
	var newArray = [ arg1, arg2, arg3, arg4 ] ;
	return newArray;	

};


module.exports.firstAndLast = function (array) {
	var newArray = []
	newArray.push(array[0]) ;
	newArray.push(array[array.length -1]) ;
	return newArray ;
};