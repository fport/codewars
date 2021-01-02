// function isIsogram(str) {
//   return !/(\w).*\1/i.test(str);
// }
function isIsogram(str) {
  let strArr = str;
  for (var i = 0; i < strArr.length; i++) {
    for (var j = 0; j < strArr.length; j++) {
      if (i != j) {
        if (strArr[i] == strArr[j]) {
          return false;
        }
      }
    }
  }
  return true;
}
console.log(isIsogram("asd"));
