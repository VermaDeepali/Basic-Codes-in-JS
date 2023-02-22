const moment = require('moment');

// To get future date from a given date
// use add in moment

console.log("FUTURE DATES");

const givenDate = moment().format('YYYY-MM-DD');
let newDate;

// tomorrow
newDate = moment(givenDate).add(1, 'days').format('YYYY-MM-DD');
console.log("Tomorrow's date: ", newDate); 
// for WEEK
newDate = moment(givenDate).add(7, 'days').format('YYYY-MM-DD');
console.log("New date after a week", newDate);                
// for MONTH
newDate = moment(givenDate).add(1, 'month').format('YYYY-MM-DD');
console.log("New date after a month", newDate);
// for QUARTER
newDate = moment(givenDate).add(3, 'month').format('YYYY-MM-DD');
console.log("New date after a quarter", newDate);
// for YEAR
newDate = moment(givenDate).add(1, 'years').format('YYYY-MM-DD');
console.log("New date after a year", newDate);


// To get past date from a given date
// use subtract in moment

console.log("PAST DATES");

const givenPastDate = "2023-02-20"
let pastDate;

// previous day
newDate = moment(givenDate).subtract(1, 'days').format('YYYY-MM-DD');
console.log("Previous day date: ", newDate);
// for WEEK
pastDate = moment(givenPastDate).subtract(7, 'days').format('YYYY-MM-DD');
console.log("Past date from a week", pastDate);                
// for MONTH
pastDate = moment(givenPastDate).subtract(1, 'month').format('YYYY-MM-DD');
console.log("Past date from a month", pastDate);
// for QUARTER
pastDate = moment(givenPastDate).subtract(3, 'month').format('YYYY-MM-DD');
console.log("Past date from a quarter", pastDate);
// for YEAR
pastDate = moment(givenPastDate).subtract(1, 'years').format('YYYY-MM-DD');
console.log("Past date from a year", pastDate);


// MOMENT JS QUERY

// Is Before
let checkDate = '2023-02-23';
let mainDate = '2023-02-22';
let result = moment(mainDate).isBefore(checkDate); // true
console.log("Is Before: ", result);
// Is before check on day,year and month
console.log(moment('2010-10-20').isBefore('2010-12-31', 'year')); // checks on year ie both are same so returned // false
console.log(moment('2010-10-20').isBefore('2011-01-01', 'year')); // true

// Is Same
checkDate = moment().format('YYYY-MM-DD');
mainDate = moment().format('YYYY-MM-DD');
result = moment(mainDate).isSame(checkDate); // true
console.log("Is Same: ", result)

// Is Same check on particular unit - d, m and y

console.log(moment('2023-10-20').isSame('2022-12-31', 'year'));  // false
console.log(moment('2023-10-20').isSame('2023-01-01', 'year'));  // true
console.log(moment('2023-10-20').isSame('2023-12-31', 'year'));  // true
console.log(moment('2023-10-20').isSame('2022-01-01', 'year'));  // false

// Is Same details
// Passing in year checks only year but when we paas month it checks both month and year
// and when we pass day it checks day, month and year and return true/fase basis on that


// Is After
checkDate = '2023-02-22';
mainDate = '2023-02-23';
result = moment(mainDate).isAfter(checkDate); // true
console.log("Is After:",result)

// Is After for particular unit - d,m,y
console.log(moment('2023-10-20').isAfter('2023-01-01', 'year')); // false
console.log(moment('2023-10-20').isAfter('2022-12-31', 'year')); // true

// Is Same or Before
checkDate = '2023-02-23';
mainDate = '2023-02-22';
result = moment(mainDate).isSameOrBefore(checkDate); // true
console.log("isSameOrBefore:",result)
console.log(moment('2023-10-20').isSameOrBefore('2023-10-20'));  // true
console.log(moment('2023-10-20').isSameOrBefore('2023-10-19'));  // false

// isSameOrBefore for particular unit - d,m,y
console.log(moment('2023-10-20').isSameOrBefore('2022-12-31', 'year')); // false
console.log(moment('2023-10-20').isSameOrBefore('2023-12-31', 'year')); // true
console.log(moment('2023-10-20').isSameOrBefore('2024-01-01', 'year')); // true


// Is Same or After
checkDate = '2023-02-22';
mainDate = '2023-02-23';
result = moment(mainDate).isSameOrAfter(checkDate); // true
console.log("isSameOrAfter:",result)

console.log(moment('2023-10-20').isSameOrAfter('2023-10-20')); // true
console.log(moment('2023-10-20').isSameOrAfter('2023-10-21')); // false

// isSameOrAfter for particular unit - d,m,y

console.log(moment('2023-10-20').isSameOrAfter('2024-12-31', 'year')); // false
console.log(moment('2023-10-20').isSameOrAfter('2023-01-01', 'year')); // true
console.log(moment('2023-10-20').isSameOrAfter('2022-12-31', 'year')); // true


// Is Between
let checkDate1 = '2023-02-20';
let checkDate2 = '2023-02-25';
mainDate = '2023-02-24';
result = moment(mainDate).isBetween(checkDate1, checkDate2); // true
console.log("isBetween", result);
    
console.log(moment('2023-02-20').isBetween('2023-02-19', undefined)); // true, since moment(undefined) evaluates as moment()