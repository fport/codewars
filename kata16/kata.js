function assertEquals(n) {
  const arr = n.toString().split("");
  const len = arr.length;
  let result = 1;
  if (len < 2 && len >= 0) {
    return n;
  } else {
    for (let i = 0; i < len; i++) {
      result *= parseInt(arr[i]);
    }
    if (result >= 10) {

      return assertEquals(result);
    } else {
      return result;
    }
  }
}

  Test.assertEquals(persistence(39),3);
  Test.assertEquals(persistence(4),0);
  Test.assertEquals(persistence(25),2);
  Test.assertEquals(persistence(999),4);
