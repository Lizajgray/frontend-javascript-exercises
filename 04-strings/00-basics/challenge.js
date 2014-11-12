module.exports.formLetter = function(firstName, senderName, message) {
return "Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName;
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
	var newString = bigString.substring(startA, endA); 
	var newString2 = bigString.substring(startB, endB);
	bigString= newString + newString2;
	return bigString;
};


module.exports.findFirstMatch = function(text, searchString) {
return text.indexOf(searchString);
};


module.exports.findLastMatch = function(text, searchString) {
return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
var textLength = text.indexOf(searchString);
var textLength2 = text.lastIndexOf(searchString);
return text.substring((textLength + searchString.length), textLength2);
};