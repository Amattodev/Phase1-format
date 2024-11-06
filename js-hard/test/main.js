const array1 = [1, 2, 3, 4, 5];

const toggleArrayElement = (array, element) => {
  const index = array.indexOf(element);
  if (index === -1) {
    array.push(element);
  } else {
    array.splice(index, 1);
  }
};
