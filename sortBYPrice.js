const products =[{product:"iphone",price:200000},{product:"Android",price:100000},{Samsung:400000}]
function  sortingProducts(array){
    return array.sort((a,b) => a.price - b.price);
}

console.log(sortingProducts(products))




var myChars = ["a", "b", "c", "d"];
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
console.log(myChars.length);

// 1: [empty, 'b', 'c', 'd'], empty, 3
// 2: [null, 'b', 'c', 'd'], empty, 3
// 3: [empty, 'b', 'c', 'd'], undefined, 4
// 4: [null, 'b', 'c', 'd'], undefined, 4