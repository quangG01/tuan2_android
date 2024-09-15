// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

const distinctElements = (arr) => [...new Set(arr)];
// 28. Calculate the sum of first 100 prime numbers and return them in an array

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const sumFirstNPrimes = (n) => {
    let primes = [];
    let sum = 0;
    let num = 2;

    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
            sum += num;
        }
        num++;
    }

    return {
        primes, 
        sum 
    };
};
// 29. Print the distance between the first 100 prime numbers
const primeDistances = (n) => {
    let primes = [];
    let num = 2;
    let distances = [];

    const isPrime = (num) => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    };

    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
            if (primes.length > 1) {
                distances.push(num - primes[primes.length - 2]);
            }
        }
        num++;
    }

    console.log(primes);
    console.log(distances);
};

// 30. Create a function that will add two positive numbers of indefinite size. The numbers
// are received as strings and the result should be also provided as string.
const addLargeNumbers = (num1, num2) => {
    const bigIntNum1 = BigInt(num1);
    const bigIntNum2 = BigInt(num2);
    const result = bigIntNum1 + bigIntNum2;
    return result.toString();
}


// 31. Create a function that will return the number of words in a text
const countWords = text => text.split(/\s+/).filter(word => word.length > 0).length;

// 32. Create a function that will capitalize the first letter of each word in a text
const capitalizeWords = text => text.replace(/\b\w/g, char => char.toUpperCase());

// 33. Calculate the sum of numbers received in a comma delimited string
const sumCommaDelimited = str => str.split(',').reduce((sum, num) => sum + parseFloat(num), 0);

// 34. Create a function that returns an array with words inside a text
const wordsArray = text => text.split(/\s+/).filter(word => word.length > 0);

// 35. Create a function to convert a CSV text to a “bi-dimensional” array
const csvToArray = csv => csv.split('\n').map(row => row.split(','));

// 36. Create a function that converts a string to an array of characters
const stringToCharArray = str => [...str];

// 37. Create a function that will convert a string in an array containing the ASCII codes of each character
const stringToAsciiArray = str => [...str].map(char => char.charCodeAt(0));

// 38. Create a function that will convert an array containing ASCII codes in a string
const asciiArrayToString = arr => String.fromCharCode(...arr);

// 39. Implement the Caesar cipher
const caesarCipher = (str, shift) => str.replace(/[a-z]/gi, char => 
  String.fromCharCode((char.charCodeAt(0) + shift - (char.toLowerCase() < 'n' ? 97 : 65)) % 26 + (char.toLowerCase() < 'n' ? 97 : 65))
);

// 40. Implement the bubble sort algorithm for an array of numbers
const bubbleSort = arr => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
  }
  return arr;
};

// 41. Create a function to calculate the distance between two points defined by their x, y coordinates
const distanceBetweenPoints = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

// 42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
const circlesIntersect = (x1, y1, r1, x2, y2, r2) => distanceBetweenPoints(x1, y1, x2, y2) <= (r1 + r2);

// 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
const extractColumn = (arr, col) => arr.map(row => row[col]);

// 44. Create a function that will convert a string containing a binary number into a number
const binaryToNumber = binaryStr => parseInt(binaryStr, 2);

// 45. Create a function to calculate the sum of all the numbers in a jagged array (contains numbers or other arrays of numbers on an unlimited number of levels)
const sumJaggedArray = arr => arr.flat(Infinity).reduce((sum, num) => sum + num, 0);

// 46. Find the maximum number in a jagged array of numbers or array of numbers
const findMaxInJaggedArray = arr => {
    const flattenArray = arr => 
        arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
    return Math.max(...flattenArray(arr));
};

// 47. Deep copy a jagged array with numbers or other arrays in a new array
const deepCopyArray = arr => arr.map(item => Array.isArray(item) ? deepCopyArray(item) : item);

// 48. Create a function to return the longest word in a string
const findLongestWord = str => {
    let words = str.split(' ');
    return words.reduce((longest, currentWord) => 
        currentWord.length > longest.length ? currentWord : longest, "");
};

// 49. Shuffle an array of strings
const shuffleArray = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};
 
// 50. Create a function that will receive n as argument and return an array of n
// random numbers from 1 to n. The numbers should be unique inside the array.
const randomUniqueNumbers = n => {
    let arr = Array.from({ length: n }, (_, i) => i + 1);
    return shuffleArray(arr);
};

// 51. Find the frequency of letters inside a string. Return the result as an array of
// arrays. Each subarray has 2 elements: letter and number of occurrences.
// 52. Calculate Fibonacci(500) with high precision (all digits)
// 53. Calculate 70! with high precision (all digits)


