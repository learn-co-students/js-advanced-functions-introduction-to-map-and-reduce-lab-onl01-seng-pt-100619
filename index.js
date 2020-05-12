// Your code here

function mapToNegativize(sourceArray){
    let newArray = []
    for(let i= 0; i < sourceArray.length; i++){
        newArray.push(-sourceArray[i])
    }
    return newArray;
}

function mapToNoChange(sourceArray){
    let newArray = []
    for(let i= 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i])
    }
    return newArray;
}

function mapToDouble(sourceArray){
    let newArray = []
    for(let i= 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i]*2)
    }
    return newArray;
}

function mapToSquare(sourceArray){
    let newArray = []
    for(let i= 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i] ** 2)
    }
    return newArray;
}

function reduceToTotal(sourceArray, startingPoint = 0){
    let value = startingPoint
    for(let i= 0; i < sourceArray.length; i++){
        value += sourceArray[i]
    }
    return value;
}

function reduceToAllTrue(sourceArray){
    let result;
    for(let i= 0; i < sourceArray.length; i++){
        if (!sourceArray[i]){
        result =  false; 
        } else if (sourceArray[i]){
        result = true;
        }
    }
    return result;
    
}

function reduceToAnyTrue(sourceArray){
    let result;
    for(let i= 0; i < sourceArray.length; i++){
        if (sourceArray[i]){
        result = true; 
        } else if (!sourceArray[i]){
        result = false;
        }
    }
    return result;
}