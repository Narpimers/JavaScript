/**
 * Credit to https://adventofcode.com/ for this exercise

In the list below you have an array of numbers. The goal is to find the two numbers that add up to 2020.

Once you have found those numbers, multiply the numbers and store the result of that in the result variable.
 */


const list = [1721, 979, 366, 299, 675, 1456];
let result;

// Write your code here

const someFunction = (year) => {
    year.forEach((element) => {
        for (let i = 1; i < year.length; i++) {
            if (element + year[i] === 2020) {
                result = element * year[i]
            }
        }
    });
};

someFunction(list);

// TEST CODE, do not change
console.assert(result === 514579, `The result is not correct, it is ${result}, but should be 514579`);