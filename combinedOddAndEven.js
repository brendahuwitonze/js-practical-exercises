function combinedNUmbers(array){
    var evenNumbers = array.filter(n=>n%2===0).sort((a,b)=> a-b)
  var oddNumbers = array.filter(n=>n%2!==0).sort((a,b)=>a-b)
  var  combinationOfArray = [[...evenNumbers].join(""),[...oddNumbers].join('')]
  return combinationOfArray;
  }
  
  const combineNumbers=[1, 22,3, 5, 4, 9, 6, 45, 11, 8, ] 
  console.log(combinedNUmbers(combineNumbers))
  