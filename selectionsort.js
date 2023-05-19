function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the minimum element with the first element of unsorted subarray
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
const array=[1,10,5,7,11,100,170]
console.log(selectionSort(array));