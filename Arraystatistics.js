// // You are given an array of numbers. Your task is to implement a function called arrayStats that returns an object containing various statistics about the array.

// // The returned object should have the following properties:
// // sum: The sum of all numbers in the array.
// // average: The average of all numbers in the array (rounded to two decimal places).
// // min: The minimum value in the array.
// // max: The maximum value in the array.

// // Example:
// // arrayStats([1, 2, 3, 4, 5]); // should return { sum: 15, average: 3.00, min: 1, max: 5 }



// function arrayStats(array){
//     var sum =0
//    for(var i =0;i<array.length;i++){
//     sum +=i
//    }
//    return sum
// }
// var arrays =[1,2,3,4,5]
// console.log(arrayStats(arrays))

// function arrayStats(arr){
//    let array = [...arr];
//     var sum = array.reduce((a,b)=>a+b,0)
    
//     var average = sum/array.length
    
//     var minMum = Math.min(...array)
   
//     var max = Math.max(...array)
   

//     return {
//         "sum":sum,
//         "average":average,
//         "minMum":minMum,
//         "max":max
//     };

// }
// console.log(arrayStats([1,2,3,4,5]))


// function capitalizeCharacter(str){
// // put the string to array
// let capitalizedWord=[]
//  let strings = str.split(" ");
//  for(let i=0;i<strings.length;i++){
//     let word = strings[i]
//     var wordToUpper = word.charAt(0).toUpperCase()+word.slice(1)
//     capitalizedWord.push(wordToUpper)
//  }
// return capitalizedWord.join(" ")
// }
// console.log(capitalizeCharacter('good morning holy spirit'))

// var num =[7,8,9,10]
// var numbers =[2,3,4,5,6]
// Array.prototype.unshift.apply(num,numbers)
// console.log(num)



// // Use reduce to concatenate the letters into a single string "hello".
// var letters = ['h', 'e', 'l', 'l', 'o']
// var concateNatedLetters = letters.reduce((acc,curre ) => acc.concat(curre))
// console.log(concateNatedLetters)


// function concatenate(array){
// var word = [...array]
// let concateNatedArray = word.reduce((acc,current)=>acc.concat(current))
// return concateNatedArray
// }
// console.log(concatenate(['b', 'r', 'e', 'n', 'd','a','h']))



// function product(array){
// let arr = [...array]
// var product = arr.reduce((acc,curre)=>acc*curre)
// console.log(product)
// }
// product([ 100, 3, 4, 1, 2])

// // reducing the dimension of the array
// const arrays = [["how", "now"], ["brown", "cow"]];
// const flattern= arrays.reduce((acc,index)=>acc.concat(index))
// console.log(flattern)

// function oddSquares(array){
//     let arr = [...array]
//     let oddNUmbers =arr.filter(num =>num%2!=0)
//     var squareOddNumbers = oddNUmbers.map(powerTwo)
//     return squareOddNumbers
//     }

//     console.log(oddSquares([1, 2, 3, 4, 5, 6]))
//    console.log (oddSquares([10, 15, 20, 25, 30]))

//   function powerTwo(number){
//    return Math.pow(number,2)
//   }


// // map can also take a callback function 
//     var arr =[1,2,3,4]
//     console.log(arr.map(squareNumber))

//     function squareNumber(number){
//      var squared = Math.pow(number,2)
//      return squared
//     }

// const colors =['blue','green','yellow']
// console.log(colors.map(upperCase))

// function upperCase(element){
// var newElement = element.charAt(0).toUpperCase()+element.slice(1)

// return newElement
// }

// Create an empty array
// const people = [];

// // Define objects with properties
// const person1 = {
//   name: "Alice",
//   age: 30,
//   city: "New York"
// };

// const person2 = {
//   name: "Bob",
//   age: 25,
//   city: "Los Angeles"
// };

// // Add the objects to the array using push
// people.push(person1);
// people.push(person2);

// // Access objects in the array
// console.log(people[0]); // Access the first object (Alice)

// Sort products
// You are given an array of product objects, each containing a name (string) and a price (number). Your task is to implement a function called sortProducts that sorts the products based on their prices in ascending order. 

const products =[{product:"iphone",price:200000},{product:"Android",price:100000},{Samsung:400000}]
// products.sort((a,b)=>a.price - b.price)
// console.log(products.sort(sorts))

function  sortingProducts(array){
    return array.sort((a,b) => a.price - b.price);
}

console.log(sortingProducts(products))
