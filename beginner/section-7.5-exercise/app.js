/* 
 * print odd and even numbers
 */

let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5];

function getOddEven(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) console.log(numbers[i] + ' is even number');
        else console.log(numbers[i] + ' is odd number')
    }
}