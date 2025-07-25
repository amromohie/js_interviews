function checkEvenOdd(num) {
  typeof num !== 'number'
    ? console.log('Please provide a valid number.')
    : console.log(`${num} is ${num % 2 === 0 ? 'even' : 'odd'}.`);
}

// Example usage
checkEvenOdd(9);   // Output: 9 is odd.
checkEvenOdd(44);  // Output: 44 is even.