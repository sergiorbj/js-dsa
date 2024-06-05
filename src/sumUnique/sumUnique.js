// Sum Unique Algorithm
// Sum only unique numbers in array. If the number appears more than once, sum only one number.
// Constraints -> Verify input. If is an array, is empty, have strings and negatives inside.
// Big O -> O(n) - Because the time complexity depends on the input

const sumUnique = (array) => {
  if (!Array.isArray(array)) throw new Error("Input should be an array.");
  if (array.length === 0) throw new Error("Array is empty.");
  if (array.some((e) => typeof e === "string"))
    throw new Error("Array contains a string element.");
  if (array.some((e) => typeof e === "number" && e < 0))
    throw new Error("Array contains a negative element.");

  const uniqueNumbers = [...new Set(array)];

  const sum = uniqueNumbers.reduce((acc, curr) => (acc += curr), 0);

  return sum;
};

export { sumUnique };
