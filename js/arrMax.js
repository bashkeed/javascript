// For array to get maximum number:

function arrMax() {
  let array = [28, 45, 69, 20, 15, 7, 98];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }
  return max;
}

let maximum = arrMax();
console.log(maximum);

// For array to get minimum number:

function arrMin() {
  let array = [28, 45, 69, 20, 15, 7, 98];
  let min = array[0],
    max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) min = array[i];
  }
  return min;
}

let minimum = arrMin();
console.log(minimum);
