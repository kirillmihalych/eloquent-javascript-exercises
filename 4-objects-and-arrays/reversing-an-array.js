const reverseArray = (arr) => arr.reverse()

function reverseArrayInPlace(arr) {
  let length
  if (arr.length % 2 !== 0) {
    length = (arr.length - 1) / 2
  } else {
    length = arr.length / 2
  }

  for (let i = 0; i < length; i++) {
    let fromFirstHalf = arr[i]
    let fromSecondHalf = arr[arr.length - (i + 1)]
    arr[i] = fromSecondHalf
    arr[arr.length - (i + 1)] = fromFirstHalf
  }
}

let myArray = ['A', 'B', 'C']
console.log(reverseArray(myArray))
// → ["C", "B", "A"];
console.log(myArray)
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
// → [5, 4, 3, 2, 1]
