const moment = require('moment');

// To get future date from a given date
// use add in moment

console.log("FUTURE DATES");

const givenDate = "2023-02-20"
let newDate;

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