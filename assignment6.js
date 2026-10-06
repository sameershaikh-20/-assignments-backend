function findFirstEven(arr) {

  if (arr.length === 0) {
    console.log("Array is empty");
    return null;
  }

  let i = 0;
  let firstEven = null;

  do {

    if (arr[i] % 2 !== 0) {
      i++;
      continue;
    }

    firstEven = arr[i];
    break;
  } while (i < arr.length);

  if (firstEven !== null) {
    console.log("First even number: " + firstEven);
  } else {
    console.log("No even number found in the array");
  }

  return firstEven;
}

let numbers1 = [1, 3, 5, 8, 11, 14];
findFirstEven(numbers1);

let numbers2 = [3, 7, 9, 15];
findFirstEven(numbers2);
