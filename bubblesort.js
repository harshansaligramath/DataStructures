const array = [11, 12, 3, 40, 5, 6, 7];
const n = array.length;
console.log(n);
let temp;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - 1; j++) {
    if (array[j] > array[j + 1]) {
      temp = array[j];
      array[j] =array[j+1];
      array[j+1]=temp
    }
  }
}
console.log(array);
