// Your code here
function mapToNegativize(sourceArray){
    let newArray = []
    for(let i= 0; i < sourceArray.length; i++){
        newArray.push(-sourceArray[i])
    }
    return newArray
}

function mapToNoChange(sourceArray){
    let newArray = []
    for(let i= 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i])
    }
    return newArray
}

function mapToDouble(sourceArray){
    let newArray = []
    for(let i= 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i] * 2)
    }
    return newArray
}

function mapToSquare(sourceArray){
    let newArray = []
    for(let i= 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i] * sourceArray[i]) // or use ** 2
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint = 0){
    let num = startingPoint
    for(let i= 0; i < sourceArray.length; i++){
        num += sourceArray[i]
    }
    return num
}

function reduceToAllTrue(sourceArray){
    let value
    for(let i= 0; i < sourceArray.length; i++){
        if (!sourceArray[i]){
        value = false
        } else if (sourceArray[i]){
        value = true
        }
    }
    return value
}

function reduceToAnyTrue(sourceArray){
    let value
    for(let i= 0; i < sourceArray.length; i++){
        if (!sourceArray[i]){
        value = false
        } else if (sourceArray[i]){
        value = true
        }
    }
    return value
}