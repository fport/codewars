const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

// const getSum = (a, b) => {
//   let result = 0;
//   if (a < b) {
//     for (let i = a; i <= b; i++) {
//       result = result + i;
//     }
//   } else {
//     for (let i = b; i <= a; i++) {
//       result = result + i;
//     }
//   }
//   return result;
// };

console.log(getSum(-1, 2));
