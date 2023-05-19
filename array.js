// const array1=[0,1,2,3,4,5]
// const array2=[6,7,8,9,10]
// const cc=array1.concat(array2)
// // console.log(cc);
// console.log(array1.copyWithin(2,3,5));

// const array1 = ['a', 'b', 'c', 'd', 'e'];
// console.log(array1);
// // Copy to index 0 the element at index 3
// console.log(array1.copyWithin(0, 3, 4));
// // Expected output: Array ["d", "b", "c", "d", "e"]

// // Copy to index 1 all elements from index 3 to the end
// console.log(array1.copyWithin(1, 5));
// // Expected output: Array ["d", "d", "e", "d", "e"]








// const array=[5,10,15,20,25,30]
// let sum=0
// for (let i = 0; i < array.length; i++) {
//     // const element = array[i];
//     sum=sum+array[i]
    
//     // console.log(element);
// }
// console.log(sum);
// console.log(array.reverse());

const array = [1, 2, 3, 4]

const reversedArray = []

for(let i = array.length - 1; i >= 0; i--) {
  const valueAtIndex = array[i]
  
  reversedArray.push(valueAtIndex)
}

console.log(reversedArray)