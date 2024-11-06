const array1 = [1, 2, 3, 4, 5];

const toggleArrayElement = (array, element) => {
  const newArray = [...array];
  const index = newArray.indexOf(element);
  if (index === -1) {
    newArray.push(element);
  } else {
    newArray.splice(index, 1);
  }
  return newArray;
};
console.log(toggleArrayElement(array1, 2));
console.log(array1);
