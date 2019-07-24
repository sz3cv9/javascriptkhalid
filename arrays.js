
//let favsong = [
//    "red red wine",
//    "buffalo soldier",
 //   "kuch kuch hota hai"  
//]; 
//favsong[1] = "different song"

//console.log(favsong);
//console.log(favsong.length)
//favsong.push("one in 10");
//console.log(favsong);
//favsong.pop();
//console.log(favsong);

//let favwebsite = [
//   "yahoo.com",
 //   "tripadvisor",
 //   "linkedin"  
// ];
//console.log(favwebsite);

//favwebsite.push("outlook.com");
//favwebsite.push("sz3cv9.com");
//console.log(favwebsite);
//favwebsite.pop();
//console.log(favwebsite);
//
//example of SHIFT 
//The shift() method removes the first element from an array and 
//returns that removed element. This method changes the length of the array.

var array1 = [1, 2, 3];

var firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
//
//example of UNSHIFT
//The unshift() method adds one or more elements to the beginning of 
//an array and returns the new length of the array.

var array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

//example of SLICE
//The slice() method returns a shallow copy of a portion of an array into 
//a new array object selected from begin to end (end not included) where 
//begin and end represent the index of items in that array. 
//The original array will not be modified.

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]


//example of SPLICE
//The splice() method changes the contents of an array by removing or 
//replacing existing elements and/or adding new elements in place.

var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']
