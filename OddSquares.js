
function oddSquares(array){
    let arr = [...array]
    let oddNUmbers =arr.filter(num =>num%2!=0)
    var squareOddNumbers = oddNUmbers.map(powerTwo)
    return squareOddNumbers
    }

    console.log(oddSquares([1, 2, 3, 4, 5, 6]))
   console.log (oddSquares([10, 15, 20, 25, 30]))

  function powerTwo(number){
   return Math.pow(number,2)
  }
