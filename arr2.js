// const s1="hai"
// const s2="hshhahf"
// console.log(s1+s2);
// function fact(value) {
//     if (value==1) {
//         return 1
//     }
//     else
//     {
//         return value*fact(value-1)
//     }
// }
// console.log(fact(5));

// function fact(value) {
//     if (value==1) {
//         return 1

//     } else {
//         return value*fact(value-1)
//     }

// }
// console.log(fact(4));

// const ar=[1,2,3,4,5,6,7]
// console.log(ar);
// for (let i = ar.length;i>=0 ;i--) {
//     console.log(ar[i]);

// }

// const ar=[1,2,3,4,5,6,7,8,9,5]
// let temp=ar[0]
// for (let i = 0; i < ar.length; i++) {
//     if (ar[i]>temp) {
//         temp=ar[i]
//     }
// }
// console.log(temp);

// const ar=[1,2,3,4,5,6,7,8,9,5]
// let temp=ar[0]
// for (let i = 0; i < ar.length; i++) {
//     if (ar[i]>temp) {
//         temp=ar[i]
//     }
// }
// console.log(temp);

// const s="malayalam"
// let newS=""
// for (let i = 0; i < s.length; i++) {
//     if (s[i]=='a') {
//      newS +='*';

//     }
//     else{
//         newS +=s[i]
//     }

// }
// console.log(newS);
// const stri="malayalamanorama"
// let newStr=""
// console.log(stri);
// for (let i = 0; i < stri.length; i++) {
//     if (stri[i]=='a') {
//         newStr+='9'

//     } else {
//         newStr+=stri[i]

//     }

// }
// console.log(newStr);

// function checkPalindrome(value) {
//   let len = value.length;
//   for (let i = 0; i < len/2; i++) {
//     if (value[i]!=value[len-1-i]) {
//         return "not a palindrom"
//     } else {
//         return "palindrom"
//     }
//   }
// }

// console.log(checkPalindrome("malayala"));



// function checkPalindrome(value) {
//     let len=value.length
//     console.log(len);
//     for (let i = 0; i < len/2; i++) {
//         if (value[i]!=value[len-1-i]) {
//             return "not a palindrom"
            
//         } else {
//             return "palindrom"
            
//         }
        
//     }
    
// }
// console.log(checkPalindrome("malayalam"));


// let myArray = [2, 3, 4];
// myArray.unshift(1); // Inserts 1 to the beginning of the array
// console.log(myArray); // Output: [1, 2, 3, 4]
//insert at beginnning
// const array=[1,2,3,4,5,6,7,8,9,10]
// console.log(array);
// for (let i = array.length-1;i>=0; i--) {
//     array[i+1]=array[i]
// }
// array[0]=77
// console.log(array);

// const array=[1,2,3,4,5]
// console.log(array);
// let value=7
// array[array.length]=value
// console.log(array);

let arr = [1, 2, 3, 4, 5];
let value = 6;
let position = 2;

// Shift elements to the right
for (let i = arr.length - 1; i >= position; i--) {
   arr[i+1] = arr[i];
}

// Assign new value to specified position
arr[position] = value;

// Print the updated array
console.log(arr);