module.exports.addItem = function (item, array) {
if (array.indexOf(item) > -1){
 return array ;
}
else {
 array.push(item) 
 return array ;
}

};

module.exports.reverseSortedList = function (array) {
var newArray = array.sort() ; 
 newArray.reverse() ;
 return newArray ;
};