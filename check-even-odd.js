function checkEvenOdd(num) {
  const result = typeof num !== 'number'
    ? '🚫 Invalid input: not a number.'
    : `${num} is ${num % 2 === 0 ? '🟢 even' : '🔴 odd'}`;

  console.log(result);
}

// Examples:
checkEvenOdd(42);      // 🟢 even
checkEvenOdd(13);      // 🔴 odd
checkEvenOdd('hello'); // 🚫 Invalid input: not a number.