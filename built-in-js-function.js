// JS Array Methods

// 1. sort()
// sort method always sort an array in ascending order, to get a desc order first sort in asc and then call reverse fun
const arr = [9,6,8,4,9,3]
let sortAsc = arr.sort();
console.log(sortAsc) // => [ 3, 4, 6, 8, 9, 9 ]

let sortDesc = arr.reverse();
console.log(sortDesc) // => [ 9, 9, 8, 6, 4, 3 ]

// 2. concat()  --> concat() method is used to merge two or more arrays and returns a new array, without changing the existing arrays.

const a1 = [1,2,3]
const a2 = [4,5,6]
const a3 = a1.concat(a2);
console.log(a3); // => [ 1, 2, 3, 4, 5, 6 ]
console.log(a1); // => [ 1, 2, 3 ]
console.log(a2); // => [ 4, 5, 6 ]

// 3. includes() --> includes() method checks if an array includes the element that passes the condition, returning true or false as per.
const i1 = [1,2,3]
console.log(i1.includes(1)) // => true
console.log(i1.includes(4)) // => false

// 4. slice() --> slice() method returns a new array with specified start to end elements.
const s = [1,2,3,4,5];
let sliced = s.slice(1,3);
console.log(sliced) // => [2,3]
console.log(s) // => [1,2,3,4,5]

// 5. shift() --> shift() method removes the first element from an array and returns that element.
let names = ["deep", "mannu"];
names.shift();
console.log(names); // ["mannu"]

// 6. unshift() --> unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
let friends = ["mannu", "deepu"];
friends.unshift("deep", "manu");
console.log(friends); // ["deep", "manu", "mannu", "deepu"]

// 7. fill() --> fill() method fills the elements in an array with a static value and returns the modified array.
let arrFill = new Array(5);
console.log(arrFill); // [empty, empty, empty, empty, empty]
console.log(arrFill.fill(7)); // [7, 7, 7, 7, 7]

// 8. indexOf() --> indexOf() method returns the index of the first occurrence of the specified element in the array, or -1 if it is not found.
let namees = ["deep", "mannu", "mush"];
let findIndex = namees.indexOf("mush");
console.log(findIndex); //2

// 9. map() --> map() method creates a new array with the results of calling a provided function on every element in this array.
let mapp = [9,8,7];
let newMappedData = mapp.map(e => e + 1);
console.log(newMappedData); // [10, 9, 8]

// 10. reverse() --> reverse() method reverses an array in place. Element at last index will be first and element at 0 index will be last.
let reverse = [4,5,6];
reverse.reverse();
console.log(reverse); // [6, 5, 4]

// 11. filter() -->  filter() method creates a new array with all elements that pass the test implemented by the provided function
let filterArr = [1,2,3,4,5,6];
let filteredData = filterArr.filter(e => e % 2 === 0);
console.log(filteredData); // [2, 4, 6]

// 12. flat() --> flat() method creates a new array with sub-array elements concatenated to a specified depth.
const arrr = [[1,2],[3,4],[5,6]];
const flattenedArray = arrr.flat();
console.log(flattenedArray); //[1, 2, 3, 4, 5, 6]
