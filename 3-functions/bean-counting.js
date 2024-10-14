function countBs(str) {
  return countChar(str, 'B')
}

function countChar(str, charArgument) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (char === charArgument) {
      count++
    }
  }
  return count
}

console.log(countBs('BOB'))
// → 2
console.log(countChar('kakkerlak', 'k'))
// → 4
