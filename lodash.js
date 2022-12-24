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
