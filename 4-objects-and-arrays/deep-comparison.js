// Your code here.
function deepEqual(a, b) {
  const entriesA = Object.entries(a)
  const entriesB = Object.entries(b)

  for (let i = 0; i < entriesA.length; i++) {
    let [keyA, valueA] = entriesA[i]
    let [keyB, valueB] = entriesB[i]

    if (typeof valueA === 'object' && typeof valueB === 'object') {
      deepEqual(valueA, valueB)
    } else if (keyA !== keyB) {
      return false
    } else if (valueA !== valueB) {
      return false
    }
  }

  return true
}

let obj = { here: { is: 'an' }, object: 2 }
console.log(deepEqual(obj, obj))
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }))
// → false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }))
// → true
