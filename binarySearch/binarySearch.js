// Binary Search Algorithm
// It's a way to search using a array division
// If target is inside the array return true, otherwise return false.
// Big O -> O(log n) - Because the time complexity depends logarithmically based on input

const binarySearch = (array, target) => {
  let start = 0;
  let end = array.length;

  while (start < end) {
    const middle = Math.floor(start + (end - start) / 2);
    const middleValue = array[middle];

    if (target === middleValue) return true;

    if (target > middleValue) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }

  return false;
};

export { binarySearch };
