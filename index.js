const standardizeInput = function(collection) {
    return collection instanceof Array ? collection.slice(): Object.values(collection)
} 

function myEach(collection, callback) {
    let newCollection = standardizeInput(collection)
    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
    }
    return collection
}

function myMap(collection, callback) {
    let newCollection = standardizeInput(collection)
    let newArr = []
    for (let i = 0; i < newCollection.length; i++) {
        newArr.push(callback(newCollection[i]))
    }
    return newArr
}

function myReduce(collection, callback, acc) {
    let newCollection = standardizeInput(collection)
    if(!acc) {
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    }
    for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection)
    }
    return acc
}

function myFind(collection, predicate) {
    let newCollection = standardizeInput(collection)
    for (let i = 0; i < newCollection.length; i++) {
        if(predicate(newCollection[i])) {
            return newCollection[i]
        }
    }
}

function myFilter(collection, predicate) {
    let newCollection = standardizeInput(collection)
    let newArr = []
    for (let i = 0; i < newCollection.length; i++) {
        if(predicate(newCollection[i])) {
            newArr.push(newCollection[i])
        }
    }
   return newArr
}

function mySize(collection) {
    let newCollection = standardizeInput(collection) 
    return newCollection.length
}

function myFirst(array, n) {
    if (n) {
        return array.slice(0, n)
    } else {
        return array[0]
    }
}

function myLast(array, n) {
    if (n) {
        return array.slice(-n)
    } else {
        return array.slice(-1)[0]
    }
}

function myKeys(object) {
   return Object.keys(object)
}

function myValues(object) {
    let array = []
    for (const [key, value] of Object.entries(object)) {
        array.push(value);
      }
      return array
}