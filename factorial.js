function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  let n = 5;
  let result = factorial(n);
  console.log(result); 
  