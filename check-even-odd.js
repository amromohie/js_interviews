function checkEvenOdd(num) {
  if (typeof num !== "number") {
    console.log("Please provide a valid number.");
    return;
  }

  if (num % 2 === 0) {
    console.log(`${num} is even.`);
  } else {
    console.log(`${num} is odd.`);
  }
}

// Example usage
checkEvenOdd(7); // Output: 7 is odd.
checkEvenOdd(12); // Output: 12 is even.
