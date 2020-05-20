function mapToNegativize(sourceArray){
    let a = []
    for (let i = 0; i < sourceArray.length; i++){
        a.push(sourceArray[i] * -1)
    }
    return a
}

function mapToNoChange(sourceArray){
    let a = []
    for (let i = 0; i < sourceArray.length; i++){
        a.push(sourceArray[i])
    }
    return a
}

function mapToDouble(sourceArray){
    let a = []
    for (let i = 0; i < sourceArray.length; i++){
        a.push(sourceArray[i] * 2)
    }
    return a
}

function mapToSquare(sourceArray){
    let a = []
    for (let i = 0; i < sourceArray.length; i++){
        a.push(sourceArray[i] * sourceArray[i])
    }
    return a
} 

function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++ ) {
      total = total + src[i]
    }
    return total
  }

  function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }