// Sum Repeated Algorithm
// Sum only repeated numbers in array.
// Big O -> O(n) - Because the time complexity depends on the input

const sumRepeated = (array) => {
  const numCounts = new Map();
  let sum = 0;

  array.forEach((num) => {
    numCounts.set(num, (numCounts.get(num) || 0) + 1);
  });

  numCounts.forEach((count, num) => {
    if (count > 1) {
      sum += num * count;
    }
  });

  return sum;
};
