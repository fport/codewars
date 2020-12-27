const calculateYears = (principal, interest, tax, desired) => {
  let result = 0;
  let j = 0;
  let k = 0;
  if (principal < desired) {
    while (principal <= desired) {
      result = result + principal * interest + principal;
      console.log(result);
      k = (result - principal) * tax;
      result = result - k;
      j = j + 1;
      principal = result;
      result = 0;
    }
  } else {
    return j;
  }
  return j;
};
console.log(calculateYears(1000, 0.01625, 0.18, 1200));
