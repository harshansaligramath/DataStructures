function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
      return arr;
    }
    const pivot = arr[Math.floor((left + right) / 2)];
    const partitionIdx = partition(arr, left, right, pivot);
    quickSort(arr, left, partitionIdx - 1);
    quickSort(arr, partitionIdx, right);
    return arr;
  }
  
  function partition(arr, left, right, pivot) {
    while (left <= right) {
      while (arr[left] < pivot) {
        left++;
      }
      while (arr[right] > pivot) {
        right--;
      }
      if (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }
    }
    return left;
  }
  
  const arr = [64, 34, 25, 12, 22, 11, 90];
  console.log(quickSort(arr));