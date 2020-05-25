
const mapToNegativize = function(sourceArray) {
    let final = []
    for (let i = 0; i < sourceArray.length; i++ ) {
      final.push(sourceArray[i] * -1)
    }
    return final
  };

  
const mapToNoChange = function(sourceArray) {
    return sourceArray
  };

  const mapToDouble = function(sourceArray) {
    let final = []
    for (let i = 0; i < sourceArray.length; i++ ) {
      final.push(sourceArray[i] * 2)
    }
    return final
  };

  const mapToSquare = function(sourceArray) {
    let final = []
    for (let i = 0; i < sourceArray.length; i++ ) {
      final.push(sourceArray[i] ** 2)
    }
    return final
  };

  const reduceToTotal = function(sourceArray, start) {
    let total = start ? start : 0
    for (let i = 0; i < sourceArray.length; i++ ) {
      total += sourceArray[i]
    }
    return total
  };

  const reduceToAllTrue = function(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (!sourceArray[i]){
            return false
        }
    }; 
       return true 
  };

  const reduceToAnyTrue = function(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray[i]){
            return true
        }
    }; 
       return false 
  };