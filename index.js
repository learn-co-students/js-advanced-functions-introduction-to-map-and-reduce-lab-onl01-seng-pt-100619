// Your code here

function mapToNegativize(arr) {
    let newArray = [];
    arr.forEach(element => {
        element = -element
        newArray.push(element)
    });
    return newArray
}

function mapToNoChange(arr) {
    let newArray = [];
    arr.forEach(element => {
        newArray.push(element)
    });
    return newArray
}

function mapToDouble(arr) {
    let newArray = [];
    arr.forEach(element => {
        element = element * 2
        newArray.push(element)
    });
    return newArray
}

function mapToSquare(arr) {
    let newArray = [];
    arr.forEach(element => {
        element = element * element
        newArray.push(element)
    });
    return newArray
}

function reduceToTotal(arr, i = 0) {
    let total = i
    for (let n = 0; n < arr.length; n++) {
        total += arr[n];
    }
    return total
}

function reduceToAllTrue(arr) {
    for(let i = 0; i < arr.length; i++) {
      if (!arr[i]) return false
    }
    return true
}

function reduceToAnyTrue(arr) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i]) return true
    }
    return false
}