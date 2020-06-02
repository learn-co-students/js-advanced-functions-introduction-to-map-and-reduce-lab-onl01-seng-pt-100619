// Your code here


function mapToNegativize(sourceArray) {
    let Array = []
    for(let i =0; i< sourceArray.length; i++) {
        Array.push(sourceArray[i]*-1)
    }
    return Array
}
function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    let Array = []
    for(let i =0; i< sourceArray.length; i++) {
        Array.push(sourceArray[i]*2)
    }
    return Array
}

function mapToSquare(sourceArray) {
    let Array = []
    for (let i =0; i< sourceArray.length; i++) {
        Array.push(sourceArray[i] * sourceArray[i])
    }
    return Array
}

//reduceToTotal(sourcesourceArrayay, startingPoint)
//reduceToAllTrue(sourcesourceArrayay)
//reduceToAnyTrue(sourcesourceArrayay)





function reduceToTotal(sourceArray, start = 0) {

for(let i = 0; i< sourceArray.length; i++) {
    start += sourceArray[i]
}
return start
}
function reduceToAllTrue(sourceArray) {

for(let i = 0; i< sourceArray.length; i++) {
    if(sourceArray[i] === false || sourceArray[i] === undefined) {
        return false
    }
}
return true
}

function reduceToAnyTrue(sourceArray) {
for(let i = 0; i< sourceArray.length; i++) {
    if(sourceArray[i] === true) {
        return true
    }
}
return false;
}