function findOdd(arr) {
  let result = {};
  let porti = 0;
  arr.forEach(function (x) {
    result[x] = (result[x] || 0) + 1;
  });
  let len = Object.keys(result).length;
  Object.keys(result).forEach((key) => {
    if (result[key] % 2 === 1) {
      porti = parseInt(key);
    }
  });
  return porti;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
