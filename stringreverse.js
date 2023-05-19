function reverseString(str) {
    let reversedStr = "";
    for (let char of str) {
      reversedStr = char + reversedStr;
    }
    return reversedStr;
  }
  
  let str = "hello world";
  let reversedStr = reverseString(str);
  console.log(reversedStr); 
  