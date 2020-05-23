// Your code here
function mapToNegativize(sourceArray){
    let newArr = []
    for(let i = 0; i < sourceArray.length; i++){
        newArr.push(sourceArray[i] * -1)
    }
    return newArr
}

function mapToNoChange(sourceArray){
    let newArr = []
    for(let i = 0; i < sourceArray.length; i++){
        newArr.push(sourceArray[i])
    }
    return newArr
}
function mapToDouble(sourceArray){
    let newArr = []
    for(let i = 0; i < sourceArray.length; i++){
        newArr.push(sourceArray[i] * 2)
    }
    return newArr
}
function mapToSquare(sourceArray){
    let newArr = []
    for(let i = 0; i < sourceArray.length; i++){
        newArr.push(sourceArray[i] ** 2)
    }
    return newArr
}

function reduceToTotal(sourceArray, startingPoint){
    let runningTotal = startingPoint ? startingPoint : 0
    for(let i = 0; i < sourceArray.length; i++){
        runningTotal += sourceArray[i] 
    }
    return runningTotal
}
function reduceToAllTrue(sourceArray){

    for(let i = 0; i < sourceArray.length; i++){
        if(sourceArray[i]) {
            continue
        } else {
            return false
        }
    }
    return true

}
function reduceToAnyTrue(sourceArray){
    for(let i = 0; i < sourceArray.length; i++){
        if(!sourceArray[i]) {
            continue
        } else {
            return true
        }
    }
    return false
}