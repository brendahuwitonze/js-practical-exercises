const products =[{product:"iphone",price:200000},{product:"Android",price:100000},{Samsung:400000}]
// products.sort((a,b)=>a.price - b.price)
// console.log(products.sort(sorts))

function  sortingProducts(array){
    return array.sort((a,b) => a.price - b.price);
}

console.log(sortingProducts(products))