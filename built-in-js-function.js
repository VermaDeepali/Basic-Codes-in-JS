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
let sliced = s.slcie(1,3);
console.log(sliced) // => [2,3]
console.log(s) // => [1,2,3,4,5]

// 5. shift() --> shift() method removes the first element from an array and returns that element.
let names = ["deep", "mannu"];
names.shift();
console.log(names); // ["mannu"]
