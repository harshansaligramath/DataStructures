// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const middle = Math.floor(arr.length / 2);
//   const left = arr.slice(0, middle);
//   const right = arr.slice(middle);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   const result = [];

//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       result.push(left.shift());
//     } else {
//       result.push(right.shift());
//     }
//   }

//   return [...result, ...left, ...right];
// }

// const arr = [5, 3, 8, 4, 2, 7, 1, 6];
// const sortedArr = mergeSort(arr);
// console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8]

function mergeSort(arr) {
  // console.log(arr);
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
    result.push(left.shift())
    }
    else
    {
      result.push(right.shift())

    }
  }
  return [...result,...left,...right]
}
const arr = [1, 40, 11, 17, 10, 5, 25];
console.log(mergeSort(arr));
