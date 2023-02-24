// program to find the factorial of a number
function factorial(x) {
    
    if (x === 0) {
        return 1;
    }
    // when number is positive
    else {
        return x * factorial(x - 1);
    }
}

const num = 4;
// calling factorial() when num is greater then 0
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}

// Output: The factorial of 4 is 24