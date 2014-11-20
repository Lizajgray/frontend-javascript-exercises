module.exports.createCourse = function (arg1, arg2, arg3) {
var courseProp = { 
	title: arg1,
	duration: arg2,
	students: arg3
}
 return courseProp ;
};

module.exports.addProperty = function (object, newProp, newValue) {
var newObject = object ;
if (object.hasOwnProperty(newProp)) {
		return newObject;
	}
else {
	newObject[newProp] = newValue 
	return newObject;
}
};

module.exports.formLetter = function (letter) {
var newLetter = {
recipient: letter.recipient,
sender: letter.sender,
msg: letter.msg
};
return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender ;
};



module.exports.canIGet = function (item, money) {
var prices = {
	'MacBook Air': 999,
	'MacBook Pro': 1299,
	'Mac Pro': 2499,
	'Apple Sticker': 1
};
return prices[item] <= money ;
};