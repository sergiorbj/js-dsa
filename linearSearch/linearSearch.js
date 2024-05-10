// Linear Search Algorithm
// If target is inside the array return true, otherwise return false.

const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    const curr = array[i];
    if (curr === target) {
      return true;
      break;
    }
  }

  return false;
};

export { linearSearch };
