// You are given an array of numbers. Your task is to implement a function called arrayStats that returns an object containing various statistics about the array.

// The returned object should have the following properties:
// sum: The sum of all numbers in the array.
// average: The average of all numbers in the array (rounded to two decimal places).
// min: The minimum value in the array.
// max: The maximum value in the array.

// Example:
// arrayStats([1, 2, 3, 4, 5]); // should return { sum: 15, average: 3.00, min: 1, max: 5 }



// function arrayStats(array){
//     var sum =0
//    for(var i =0;i<array.length;i++){
//     sum +=i
//    }
//    return sum
// }
// var arrays =[1,2,3,4,5]
// console.log(arrayStats(arrays))

function arrayStats(arr){
   let array = [...arr];
    var sum = array.reduce((a,b)=>a+b,0)
    //console.log(`sum: ${sum}`)
    var average = sum/array.length
    //console .log(`average: ${average}`)
    var minMum = Math.min(...array)
    //console.log(`min: ${minMum}`)
    var max = Math.max(...array)
    //console.log(`maximum: ${max}`)

    return {
        "sum":sum,
        "average":average,
        "minMum":minMum,
        "max":max
    };

}
console.log(arrayStats([1,2,3,4,5]))


