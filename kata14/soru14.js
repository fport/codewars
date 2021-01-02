/*function findOdd(arr) {
    let result = {}; 
    arr.forEach(function (x) {
      result[x] = (result[x] || 0) + 1;
    }); 
    let len = Object.keys(result).length;
    let arr= {};
    let i=0;
    for (const [key, value] of Object.entries(result)) {
        arr[i]=`${key}`
        i++
      }
  }
  */

 const findOdd = (xs) => xs.reduce((a, b) => a ^ b);


  console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));