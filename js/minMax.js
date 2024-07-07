function minNumber(item1, item2) {
  let arr = [item1, item2];
  let min = item1;

  for (let i = 0; i < arr.length; i++) {
    if (item2 < min) {
      min = arr[i];
    }
  }

  return min;
}

console.log(minNumber(5000,10000))