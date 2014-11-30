module.exports.copy = function (object) {
var newObject = {};
for (key in object) {
	newObject[key] = object[key];
}
return newObject;
};

module.exports.extend = function (propOne, propTwo) {
	  var keys = Object.keys(propTwo);

  for (var i = 0; i < keys.length; i++) {
    propOne[keys[i]] = propTwo[keys[i]];
  }

  return propOne;
};

module.exports.hasElems = function (obj, array) {
  var returnKeys = true;

  for (var i = 0; i < array.length; i++) {
    if (! obj.hasOwnProperty(array[i])) {
      returnKeys = false;
    }
  }

  return returnKeys;
};