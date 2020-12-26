const narcissistic = (value) => {
  const array = value.toString().split("");
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result = result + Math.pow(array[i], array.length);
  }
  return result === value || value < 10 ? true : false;
};

console.log(narcissistic(371));
