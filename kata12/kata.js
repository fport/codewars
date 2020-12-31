function digital_root(n) {
  return ((n - 1) % 9) + 1;
}

// const digital_root = (n) => {
//   if (n < 10) return n;
//   let out = 0;
//   while (n > 0) {
//     out += Math.floor(n % 10);
//     n = n / 10;
//   }
//   return digital_root(out);
// };

// function digital_root(n) {
//   const arr = n.toString().split("");
//   const len = arr.length;
//   let result = 0;
//   if (len < 2 && len >= 0) {
//     return n;
//   } else {
//     for (let i = 0; i < len; i++) {
//       result += parseInt(arr[i]);
//     }
//     if (result >= 10) {
//       return digital_root(result);
//     } else {
//       return result;
//     }
//   }
// }

console.log(digital_root(493193));
