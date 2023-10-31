"use strict";

// 1 . Write a JavaScript function that takes an array of elements and returns the most frequently
// occurring element in the array. If there are multiple elements with the same highest frequency,
// return any of them.
// Test Case:
// const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// console.log(mostFrequentElement(array)); // Should return 4 or 3
// const array = [&quot;apple&quot;, &quot;banana&quot;, &quot;cherry&quot;, &quot;banana&quot;, &quot;cherry&quot;];
// console.log(mostFrequentElement(array)); // Should return &quot;banana&quot; or &quot;cherry&quot;

function mostFrequentElement(array) {
  if (array.length === 0) {
    return undefined;
  }

  const elementCountMap = new Map();
  let maxCount = 0;
  let mostFrequentElement;

  for (const element of array) {
    if (elementCountMap.has(element)) {
      elementCountMap.set(element, elementCountMap.get(element) + 1);
    } else {
      elementCountMap.set(element, 1);
    }

    if (elementCountMap.get(element) > maxCount) {
      maxCount = elementCountMap.get(element);
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

const array1 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(mostFrequentElement(array1));

const array2 = ["apple", "banana", "cherry", "banana", "cherry"];
console.log(mostFrequentElement(array2));

// 2. Write a JavaScript function that takes a sentence as input and returns the sentence with the first
// letter of each word capitalized.
// Test Case:
// console.log(capitalizeWords(&quot;this is a test sentence&quot;)); // Should return &quot;This Is A Test Sentence&quot;
// console.log(capitalizeWords(&quot;javascript is fun&quot;)); // Should return &quot;Javascript Is Fun&quot;

function capitalizeWords(sentence) {
  if (typeof sentence !== "string" || sentence.length === 0) {
    return "";
  }

  const words = sentence.split(" ");
  const capitalizedWords = [];

  for (const word of words) {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedWords.push(capitalizedWord);
  }

  return capitalizedWords.join(" ");
}

console.log(capitalizeWords("this is a test sentence"));
console.log(capitalizeWords("javascript is fun"));

// 3. Write a JavaScript function that takes an array of numbers and returns a new array with only the
// odd numbers.
// Test case:
// const array = [1, 2, 3, 4, 5, 6];
// console.log(removeEvenNumbers(array)); // Should return [1, 3, 5]
// const array = [10, 21, 34, 45, 58, 67];
// console.log(removeEvenNumbers(array)); // Should return [21, 45, 67]

function removeEvenNumbers(array) {
  return array.filter((number) => number % 2 !== 0);
}

const array3 = [1, 2, 3, 4, 5, 6];
console.log(removeEvenNumbers(array3));

const array4 = [10, 21, 34, 45, 58, 67];
console.log(removeEvenNumbers(array4));

// 4. Write a JavaScript function that takes a sentence as input and returns the longest word in the
// sentence.
// Test Case:

// console.log(findLongestWord(&quot;This is a test sentence with long words&quot;)); // Should return &quot;sentence&quot;
// console.log(findLongestWord(&quot;JavaScript programming can be fun&quot;)); // Should return
// &quot;programming&quot;

function findLongestWord(sentence) {
  if (typeof sentence !== "string" || sentence.length === 0) {
    return "";
  }

  const words = sentence.split(" ");
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord("This is a test sentence with long words"));
console.log(findLongestWord("JavaScript programming can be fun"));

// 5.Write a JavaScript function that takes an array of numbers and returns the average (mean) of
// those numbers.
// Test Case:
// const array = [10, 20, 30, 40, 50];
// console.log(calculateAverage(array)); // Should return 30
// const array = [5, 15, 25, 35, 45];
// console.log(calculateAverage(array)); // Should return 25

function calculateAverage(array) {
  if (array.length === 0) {
    return 0;
  }

  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum / array.length;
}

const array5 = [10, 20, 30, 40, 50];
console.log(calculateAverage(array1));

const array6 = [5, 15, 25, 35, 45];
console.log(calculateAverage(array2));

// 6.Write a JavaScript function to calculate the factorial of a non-negative integer using a loop. The
// factorial of a number is the product of all positive integers less than or equal to that number.
// Test Case:
// console.log(factorialWithLoop(5)); // Should return 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
// console.log(factorialWithLoop(0)); // Should return 1 (0! is defined as 1)

function factorialWithLoop(n) {
  if (n < 0) {
    return undefined;
  }

  if (n === 0) {
    return 1;
  }

  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}

console.log(factorialWithLoop(5));
console.log(factorialWithLoop(0));

// 7.Write a JavaScript function that takes a sentence as input and returns an object containing the
// count of each word in the sentence.
// Test Case:
// const sentence = &quot;This is a test. This is only a test.&quot;;
// console.log(countWordOccurrences(sentence));
// // Should return { &quot;this&quot;: 2, &quot;is&quot;: 2, &quot;a&quot;: 2, &quot;test&quot;: 2, &quot;only&quot;: 1 }
// const sentence = &quot;Count the number of words in this sentence.&quot;;
// console.log(countWordOccurrences(sentence));
// // Should return { &quot;count&quot;: 1, &quot;the&quot;: 1, &quot;number&quot;: 1, &quot;of&quot;: 1, &quot;words&quot;: 1, &quot;in&quot;: 1, &quot;this&quot;: 1, &quot;sentence&quot;: 1 }

function countWordOccurrences(sentence) {
  if (typeof sentence !== "string" || sentence.length === 0) {
    return {};
  }

  const words = sentence.split(" ");
  const wordCounts = {};

  for (const word of words) {
    const cleanedWord = word.toLowerCase().replace(/[.,]/g, "");

    if (wordCounts[cleanedWord]) {
      wordCounts[cleanedWord] += 1;
    } else {
      wordCounts[cleanedWord] = 1;
    }
  }

  return wordCounts;
}

const sentence1 = "This is a test. This is only a test.";
console.log(countWordOccurrences(sentence1));

const sentence2 = "Count the number of words in this sentence.";
console.log(countWordOccurrences(sentence2));

// 8.Write a JavaScript function that takes an array of numbers and returns the sum of all prime
// numbers in the array.
// Test Case:
// const array = [3, 5, 8, 11, 12, 17];
// console.log(sumOfPrimes(array)); // Should return 36 (3 + 5 + 11 + 17 = 36)
// const array = [2, 4, 6, 9, 10];
// console.log(sumOfPrimes(array)); // Should return 2 (only 2 is prime)

function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }

  return true;
}

function sumOfPrimes(array) {
  return array.reduce((sum, number) => {
    if (isPrime(number)) {
      return sum + number;
    }
    return sum;
  }, 0);
}

const array7 = [3, 5, 8, 11, 12, 17];
console.log(sumOfPrimes(array7));

const array8 = [2, 4, 6, 9, 10];
console.log(sumOfPrimes(array8));
