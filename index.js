// Your code here

function mapToNegativize(sourceArray) {
    const newArray = []
    for(let i=0; i<sourceArray.length; i++) {
      newArray[i] = sourceArray[i] * -1;
    }
    return newArray;
}

function mapToNoChange(sourceArray) {
    return sourceArray;
}

function mapToDouble(sourceArray) {
    const newArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        newArray[i] = sourceArray[i] * 2;
    }
    return newArray;
}

function mapToSquare(sourceArray) {
    const newArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        newArray[i] = sourceArray[i] ** 2;
    }
    return newArray;
}


function reduceToTotal(sourceArray, startingPoint= 0) {
    let total = startingPoint;
    for (const n of sourceArray) {
      total += n;
    }
    return total;
}

function reduceToAllTrue(sourceArray) {
    for (const n of sourceArray) {
        if(!n){
            return false;
        }
    }
    return true;
}

function reduceToAnyTrue(sourceArray) {
    for (const n of sourceArray) {
        if (n) {
          return true;
        }
    }
    return false;
}