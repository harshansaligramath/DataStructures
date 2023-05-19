// function factorial(n) {
//   if (n === 1 || n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// console.log(factorial(5));

// function sum(n) {
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1) {
//     return 1;
//   } else {
//     return n + sum(n - 1);
//   }
// }
// console.log(sum(5));

// program to count down numbers to 1
function countDown(n){
    let newNum=n-1
    if (newNum>0) {
        countDown(newNum)
        
    }
    console.log(n);

}
countDown(5)

