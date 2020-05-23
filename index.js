// import { start } from "repl"

function mapToNegativize(sourceArray) {
  let newArr = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(sourceArray[i] - sourceArray[i] * 2)
  }
  return newArr
}
function mapToNoChange(sourceArray) {
  let newArr = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(sourceArray[i])
  }
  return newArr
}
function mapToDouble(sourceArray) {
  let newArr = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(sourceArray[i] * 2)
  }
  return newArr
}

function mapToSquare(sourceArray) {
  let newArr = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(sourceArray[i] ** 2)
  }
  return newArr
}
function reduceToTotal(arr, starting_point = 0) {
  let count = starting_point
  for (let i = 0; i < arr.length; i++) {
    count += arr[i]
  }
  return count
}

function reduceToAllTrue(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      return false
    }
  }
  return true
}
function reduceToAnyTrue(arr) {
  for (let i = 0; i < arr.length; i++) {
    debugger
    if (arr[i]) {
      return true
    }
  }
  return false
}