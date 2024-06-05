// Linear Search Algorithm
// If target is inside the array return true, otherwise return false.
// Big O -> O(n) - Because the time complexity depends on the input

const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    const curr = array[i];
    if (curr === target) {
      return true;
    }
  }

  return false;
};

export { linearSearch };
