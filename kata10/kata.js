const SeriesSum = (n) =>  {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
}
  return s.toFixed(2)
}

// return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)


console.log(SeriesSum(5))

