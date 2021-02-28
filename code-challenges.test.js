// ASSESSMENT 3: Coding practical questions with Jest

// import { result } from "lodash";

// const { italic } = require("ansi-styles");
// const { describe } = require("yargs");

// const { italic } = require("ansi-styles")
// const { test } = require("picomatch")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("When fibonacciSeq is fed a number and is called,", () => {

    it("returns an array of the length (6 in this case) of the fed argument filled with fibonacci sequented numbers", () => {

        const length = 6;

        const actResult = fibonacciSeq(length);

        expect(actResult).toEqual([1, 1, 2, 3, 5, 8]);
    })

    it("returns an array of the length (10 in this case) of the fed argument filled with fibonacci sequented numbers", () => {

        const length = 10;

        const actResult = fibonacciSeq(length);

        expect(actResult).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    })
})

// b) Create the function that makes the test pass.

const fibonacciSeq = (arrayLength) => {

    if (arrayLength < 2){

        return "You won't get the full picture of the sequence with that low of a number ¯l_(ツ)_/¯ ... enter a number greater than 2!"
    }

    var array = [1, 1];
    // starting out the array of fibbonacci sequence

    for (i = 2; i < arrayLength; i++){


        let num1 = array[array.length -2]
        let num2 = array[array.length -1]
        // creating variables that will access every last two numbers in the array

        let nextNum = num1 + num2
        // adding up those last two numbers in the array 

        array.push(nextNum);
        // send the next sequence to the array
    }

    return array
}

console.log(fibonacciSeq(6))
console.log(fibonacciSeq(1))

// another way but with being able to view the sequence in hash table
// const fib = (number) => {

//     let len = number;
//     let array = [1, 1];

//     let prev = array[0];
//     let curr = array[1];
//     // let the 'prev' var start off at the first number and the 'curr' (current) number be the last one in the array


//     let mapper = {};
//     // mapper is an empty object that will be used later to create a hash table
//     let counter = 0;
//     // counter will update after every iteration in order to place the numbers in their specific key placements

//     for(i = 2; i < len; i++){
        
//         next = prev + curr
//         prev = curr
//         curr = next
//         // 'next' var is the sum of the previous and current number
//         // 'prev' and 'curr' are updated with the following numbers

//         array.push(next)
//     }

//     for(let elem in array){
//         // loop through all the elements in the array holding the fib seq
//         mapper[counter] = array[elem];
//         // fill the empty object 'mapper' with every number in the array. mapper[0] will be assigned the number 1. On the next iteration, mapper[1] it will be assigned 1... mapper[4] will be assigned the 5, and so on...
//         counter++;
//     }

//     return mapper
// }

// console.log(fib(6))
// console.log(fib(10))




// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("When OddNums is fed an array and called, ", () => {

    it("will return an array of sorted odd numbers", () => {

        var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"];

        const actResult = OddNums(fullArr1);

        expect(actResult).toEqual([-9, 7, 9, 199]);
    })

    it("will return an array of sorted odd numbers", () => {
        
        var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"];

        const actResult = OddNums(fullArr2);

        expect(actResult).toEqual([-823, 7, 23]);
    })
})

// b) Create the function that makes the test pass.

const OddNums = (array) => {

    var odds = array.filter(value => {

        return (typeof value === "number" && value % 2 !== 0)
        // retrieve all numbers that are odd
    })

    return odds.sort( (a, b) => a - b)
    // sort the numbers in ascending order (the math here is determining whether the subtraction is a pos or neg number in order to evaluate the size of each number)
}

console.log(OddNums(fullArr1))
console.log(OddNums(fullArr2))





// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

// a) Create a test with expect statements for each of the variables provided.

var middleLetters1 = "alpha"
// Expected output: “p”

var middleLetters2 = "rhinoceros"
// Expected output: “oc”

describe("When midLetter is called on the word 'alpha'", () => {

    it("will return the letter p", () => {

        const word = "alpha";

        const actResult = midLetter(word);

        expect(actResult).toEqual("p");
    })

    it("will return the letters 'oc' because it is an even lettered word", () => {

        const word = "rhinoceros";

        const actResult = midLetter(word);

        expect(actResult).toEqual("oc");
    })
})

// b) Create the function that makes the test pass.

const midLetter = (word) => {

    word = word.split("");
    // split up the word

    let length = word.length;
    // determine the length of the word 
    
    let middle = length / 2;
    // determine the middle of the word

    if (length % 2 !== 0){

        letter = word.splice(middle, 1);
        // if the word length is odd, grab the middle element of the array made up of letters of the word (the middle letter)

    } else {
        // else if it is an evenly lengthed word

        middle = (length / 2) -1
        // set the middle by dividing the even numbered length and subtract one to capture the two letters that reside in the middle of the word

        letter = word.splice(middle, 2)
        // grab the two middle letters of the word
    }

    return letter.join("")
}

console.log(midLetter(middleLetters1))
console.log(midLetter(middleLetters2))

// --------------------4) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

describe("When climbingSum is called,", () => {

    it("returns the sum of the numbers in an array", () => {

        const nums = [2, 4, 45, 9]

        const actResult = climbingSum(nums)
        
        expect(actResult).toEqual([2, 6, 51, 60])
    })

    it("returns the sum of the numbers in an array", () => {

        const nums = [0, 7, -8, 12]
        
        const actResult = climbingSum(nums)
        
        expect(actResult).toEqual([0, 7, -1, 11])
    })
})

// b) Create the function that makes the test pass.

const climbingSum = (array) => {

    let prev = array[0];
    let curr = array[1];
    let result = [];
    // setting prev and curr vars to be the first and second numbers in the fed array, result will receive all of the summed up numbers

    if (array.length === 0){

        return [];
    }
    // if the fed array is empty, return an empty array

    result.push(array[0])
    // add the first number of the fed array to the new array 

    for (i = 1; i < array.length; i++){

        let next = prev + curr;
        result.push(next);
        prev = next;
        curr = array[i + 1];

    }

    return result
}

console.log(climbingSum(numbersToAdd1))
console.log(climbingSum(numbersToAdd2))

// using higher-order-function (for practice)
// const climber = (array) => {
    
//     let climbArr = [];
//     let sumation = 0;

//     array.forEach(value => {

//         sumation = sumation + value;
//         // the sumation variable becomes the product of its sum with value, so the next value will be added to the previous product

//         climbArr.push(sumation)
//     })

//     return climbArr
// }

// console.log(climber(numbersToAdd1))
// console.log(climber(numbersToAdd2))