// // const arr1=[1,2,3,4,5,6,7,8,9,10]
// // const n = 10
// // for(let i=arr1.length-1;i>=0;i--){
// //     if(i==0){
// //         arr1[i+1]=arr1[i]
// //         arr1[i]=n
// //     }else{
// // arr1[i+1]=arr1[i]
// //     }
    
// // }
// // console.log(arr1);
// // console.log(a);



// const arr1=[2,4,6,8,10]
// for (let i = arr1.length;i>=0; i--) {
//     if (i==0) {
//         arr1[i+1]=arr1[i]
//         arr1[i]=5
        
//     } else {
//         arr1[i+1]=arr1[i]
//     }

    
// }
// console.log(arr1);

// const arr1=[1,2,3,4,5,6,7,8,9]
// for (let i = arr1.length; i>=0; i--) {
//     console.log(arr1[i]);
    
// }

// const arr1=[1,2,3,4,5]
// let sum=0
// let avg=0
// for (let i = 0; i < arr1.length; i++) {
//     sum=sum+arr1[i]
//     avg=(sum/arr1.length)
// }
// console.log(sum);
// console.log(avg);

// const arr1=[1,2,3,4,5,6,7,8,9]
// let even=0
// let odd=0
// for (let i = 0; i < arr1.length; i++) {
//     if (i%2==0) {
//        odd=odd+1
        
//     } else {
//         even=even+1
        
//     }

// }
// console.log("eve"+even);
// console.log("odd"+odd);    


// const arr1=[1,2,3,4,5,6,7,8,9]
// console.log(arr1);
// const arr2=[9,8,7,6,5,4,3,2,1]
// console.log(arr2);
// let sumr = []

// for (let i = 0; i < arr2.length; i++) {
    
//     sumr[i]=arr2[i]+arr1[i]
    
// }
// console.log(sumr);

// const arr1=[5,10,15,20,25,30]
// console.log(arr1)
// const arr2=[30,25,20,15,10,5]
// console.log(arr2);
// let sumarr=[]
// for (let i = 0; i < arr2.length; i++) {
//     sumarr[i]=arr1[i]+arr2[i]
    
// }
// console.log(sumarr);
//second largest
// const arr1=[2,4,6,8,10,5]
// if(arr1[0]>arr1[1]){
//     fl= arr1[0];
//     sl =arr1[1];
// }else{
//     fl= arr1[1];
//     sl =arr1[0];
// }

// for(let i =2 ; i<arr1.length-1;i++){
//    if(arr1[i]>fl ){
//         sl = fl
//         fl =arr1[i]
//     }
//     else if(fl>arr1[i] && sl<arr1[i]){
//         sl = arr1[i]
//     }
// }
// console.log(sl,fl);
// largest number in an array
// const arr1=[1,2,3,4,5,6,7,8,9,5]
// console.log(arr1);
// let temp=arr1[0]
// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i]>temp) {
//         temp=arr1[i]
        
//     }
    
// }
// console.log(temp);

// reverse
// const arr1=[1,2,3,4,5,6,7]
// console.log(arr1);
// for (let i = arr1.length;i>0; i--) {
//     console.log(arr1[i]);
    
// }

// const a = "b";
// const b = "b";
// if (a < b) {
//   // true
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }



// strings
// const p="malayalam"
// console.log(p);
// console.log(p.replaceAll("a","*"));
// length of the string
// let counter;
// counter=0;
// const s="aniket";
// console.log(s);
// let i;       //index variable to traverse string s
// i=0;
// while(s[i]!=null)  //to check if string gets empty 
// {
//   counter++;      //increment counter as string is not empty 
//   i++;            //increment index to traverse next element
// }
// console.log(counter);

// // result-->6
// // Time Complexity-->O(n)

// concatenation
// const s1="hai"
// const s2="man"
// console.log(s1.length);
// console.log(s2.length);
// for (let i = 0; i < s2.length; i++) {
//     s1[s1.length+i]=s2[i]
    
// }
// console.log(s1);
// const instagram = '@sam';
// const twitter = '#antha';
// const tiktok = '_ming';

// const newString = 'My handles are ' + instagram + twitter + tiktok;
// console.log(newString);

//Compare two string
// const s1="hi"
// const s2="hi"
// console.log(s1===s2);
// reverse string
// const strin="hello"
// for (let i =  strin.length;i>=0; i--) {
//     console.log(strin[i]); 
// }

// palindrom
// program to check if the string is palindrome or not

// function checkPalindrome(string) {

//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }
// // call the function
// const value = checkPalindrome("malayalam");

// console.log(value);

// const st="malayalam"
// let re=""
// for (let i =  st.length-1;i>=0; i--) {

//     console.log(i);
//     re=re+st[i]
//     // console.log(re);
    
// }
// console.log(re);
// if (re==st) {
//     console.log("palindrom");
// } 
// else{
//     console.log("koppp");
// }

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
// console .log(newS);
// unique elements in an array
// // const arr=[1,1,2,2,3,4,5,6,7,8,9,2]
// // for (let i = 0; i < arr.length; i++) {
// //     flag =0 
// //     for (let j = 0; j < arr.length; j++) {
// //         if (arr[i]==arr[j]&&i!=j) {
// //             flag = 1
            
// //         }
// //     }
// //         if(flag==0){
// //             console.log(arr[i]);
// //         }
    
// }
// sum(5,10)
// function sum(a,b) {
//     let sum=callfn(a,b)
//     c(sum)

// }
// function callfn(a,b) {
//     return a+b
// }

// function c(sum) {
//     console.log(sum);
// }
// let fact=1
// number=5
// for (let i = 1; i <= number; i++) {
//     fact=fact*i
// }
// console.log(fact);


// function recf(value) {
//     if (value==1) {
//         return 1
//     }
//     return value*recf(value-1)
// }

// console.log(recf(5));

// const arr=[1,2,3,4,5,6,7]
// // console.log(arr.reverse());
// for (let  i = arr.length;i>=0; i--) {
//     console.log(arr[i]);  
// }


// setTimeout(() => {
//     console.log("hi");
// }, 5000);


