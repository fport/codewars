// const openOrSenior = (data) => {
//   let array = [];
//   for (let i = 0; i < data.length; i++) {
//     const x =
//       data[i][0] >= 55 && data[i][1] > 7
//         ? (array[i] = "Senior")
//         : (array[i] = "Open");
//   }
//   return array;
// };

const openOrSenior = (data) => {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
};

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
