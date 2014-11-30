module.exports.sumNumbers = function(number)  {
	var sum = 0;
    for (var index = 0; index < number.length; index+=1) {
    	sum += number[index];
    } 
    return sum;
};

module.exports.splitAndLowerCaseString = function(inputString) {
var newString = inputString.toLowerCase();
var secondString = newString.split(",");
return secondString;
};

module.exports.addIndex = function(newArray){
var finalArray = [];
for (var index = 0; index < newArray.length; index = index + 1) {
	finalArray.push(index.toString() + " is " +  newArray[index].toString());
}
return finalArray;
};
