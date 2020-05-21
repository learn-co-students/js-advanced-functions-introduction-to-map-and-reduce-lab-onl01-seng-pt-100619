function mapToNegativize(sourceArray) {
  return sourceArray.map(int => {
    if (int < 0) {
      return Math.abs(int)
    }
    else
      return -Math.abs(int)
  })
}
function mapToNoChange(sourceArray) {
  return sourceArray.map(int => int)
}
function mapToDouble(sourceArray) {
  return sourceArray.map(int => int *= 2)
}

function mapToSquare(sourceArray) {
  return sourceArray.map(int => int ** 2)
}
function reduceToTotal(arr, starting_point) {
  let reduced = arr.reduce((accumulator, arrayIndex) => accumulator + arrayIndex, 0)
  if (starting_point)
    return reduced + starting_point
  else
    return reduced
}

function reduceToAllTrue(arr) {
  let count = 0
  arr.forEach(bool => {
    if (Boolean(bool) === true) {
      count += 1;
    }
  })
  if (arr.length === count) {
    return true
  }
  return false
}
function reduceToAnyTrue(arr) {
  let count = 0;
  arr.forEach(bool => {
    if (Boolean(bool) === true) {
      count += 1;
    }
  })
  if (count >= 1) {
    return true
  }
  return false
}