const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let newArr = [];       // Final result
  let currentGroup = []; // Temporary group to collect elements
  let sum = 0;           // Running sum of current group

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    if (sum + currentElement <= n) {
      currentGroup.push(currentElement);
      sum += currentElement;
    } else {
      newArr.push(currentGroup);  // Push current group to final result
      currentGroup = [currentElement]; // Start new group
      sum = currentElement;       // Reset sum with current element
    }
  }

  if (currentGroup.length > 0) {
    newArr.push(currentGroup); // Push the last group
  }

  return newArr;
};

const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));
