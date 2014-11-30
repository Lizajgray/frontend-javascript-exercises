module.exports.getKeys = function (object) {
var newObject = [];
    for (var key in object) {
    	 newObject.push(key);
    } 
return newObject ;
};

module.exports.getValues = function (object) {
var newObject = [];
    for (var value in object) {
    	 newObject.push(object[value]);
    } 
return newObject ;
};



module.exports.objectToArray = function (object) {
var stringArray = [];
for (var key in object) {
	stringArray.push(key + ' is ' + object[key]);
}
return stringArray;
};