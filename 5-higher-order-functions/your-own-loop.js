function loop(value, doTest, doUpdate, action) {
  console.log(doTest(value))
  for (let i = value; doTest(i); i = doUpdate(i)) {
    action(i)
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
)
// → 3
// → 2
// → 1
