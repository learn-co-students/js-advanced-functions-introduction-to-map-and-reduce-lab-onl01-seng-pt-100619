// MAP
const mapToNegativize = function(array){
    return array.map(number => number * -1)
}

const mapToNoChange = function(array){
    return array.map(number => number);
}

const mapToDouble = function(array){
    return array.map(number => number * 2);
} 

const mapToSquare = function(array){
    return array.map(number => number ** 2);
}

// REDUCE
const reduceToTotal = function(array, initialValue=0){
    return array.reduce(function (accumulator, currentValue){
        return accumulator + currentValue
    }, initialValue)
}


function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++ ) {
      if (!array[i]) return false
    }
    return true
  }

function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }