import test from "./test.mjs";

/*
    Challenge: Implement the `multiply` function.

    The function `multiply` takes an indefinite number of parameters (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
    It should return the product of the numbers, with the following constraints:

    1. If one or more of the parameters are not valid numbers, the function should return NaN (Not a Number).
    2. If either parameter is a string that can be converted to a number (e.g., "3"), it should be parsed into a number before multiplying.
    3. If either parameter is Infinity or -Infinity, return Infinity or -Infinity based on the rules of multiplication.
    4. Handle edge cases like multiplying by 0 and NaN appropriately.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `multiply` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function multiply(a, b){
    let numA = Number(a);
    let numB = Number(b);

    if (isNaN(numA) || isNaN(numB) || typeof numA !== "number" || typeof numB !== "number") {
        return NaN;

    } else if ( numA == Infinity ||  numB == Infinity ){
        return Infinity
    } else if ( numA == -Infinity || numB == -Infinity){
        return -Infinity
    } else if ( numA == 0 || numB == 0 ){
        return 0
    }

    return numA * numB;
}

//#endregion
const tests = test("Sum function");

tests.isEqual(multiply(1, 2), 2, "Sum of 1 and 2 should be 2");
tests.isEqual(multiply(10, 5), 50, "Sum of 10 and 5 should be 50");
tests.isNotANumber(multiply(NaN, 7), NaN, "Sum of NaN and 7 should be NaN");
tests.isEqual(multiply(0, 23), 0, "Sum of 0 and 23 should be 0");
tests.isEqual(multiply(Infinity, 8), Infinity, "Sum of infinity and 8 should be Infinity");
tests.isEqual(multiply(-Infinity, 4), -Infinity, "Sum of infinity and 4 should be -Infinity");
tests.isEqual(multiply("3", "8"), 24, "Sum of 3 and 8 should be 24");



//#region Tests --------------------------------------------------------------------
// Write your tests her.



//#endregion