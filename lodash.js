const _ = require('lodash');

// Find data from an array

const spyFamilyArray = 
[
{
    id: 1, name: "Anya"
},
{
    id: 2, name: "Damian"
},
{
    id: 3, name: "Yor"
},
{
    id: 4, name: "Loid"
}
];

const dataFound = _.find(spyFamilyArray, {name: "Anya"}); // find name Anya

console.log("Data found: ",dataFound); // return object { id: 1, name: "Anya" }


// check if value is in collection using includes
console.log("Include: ",_.includes([5,6,7], 7)); // return o/p as true
            
// _.sortBy --> Creates an array of elements, sorted in ascending order 
let users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];
 
console.log("sortBy: ",_.sortBy(users, [function(o) { return o.user; }]));
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 
console.log("sortBy: ",_.sortBy(users, ['user', 'age']));
// => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]

// _.orderBy --> 
// This method is like _.sortBy except that it allows specifying the sort orders of the iteratees to sort by. 
// If orders is unspecified, all values are sorted in ascending order. 
// Otherwise, specify an order of "desc" for descending or "asc" for ascending sort order of corresponding values.
let arr = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];
 
// Sort by `user` in ascending order and by `age` in descending order.
console.log("orderBy: ",_.orderBy(arr, ['user', 'age'], ['asc', 'desc']));
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]

// _.groupBy --> creates a key based on the value given on which it need to be grouoed and add the value according to the key given
console.log("groupBy: ",_.groupBy([6.1, 4.2, 6.3], Math.floor));
// => { '4': [4.2], '6': [6.1, 6.3] }
 
// The `_.property` iteratee shorthand.
console.log("groupBy: ",_.groupBy(['one', 'two', 'three'], 'length'));
// => { '3': ['one', 'two'], '5': ['three'] }

// creates an array of array values not included in the other given arrays
console.log(_.difference([2, 1], [2, 3]));
// O/P --> [1]

// join --> Converts all elements in array into a string separated by separator.
console.log(_.join(['d', 'e', 'e', 'p'], '~'));
// O/P --> 'd~e~e~p'

// reverse --> function to reverse an array
console.log(_.reverse([1,2,3,4,5,6]));
// => [ 6, 5, 4, 3, 2, 1 ]

// strings capitalization

console.log(_.capitalize('hello world'))   //  'Hello world'
console.log(_.startCase('hello world'))   //  'Hello World'
console.log(_.snakeCase('hello world'))   //  'hello_world'
console.log(_.kebabCase('hello world'))   //  'hello-world'
console.log(_.camelCase('hello world'))   //  'helloWorld'
