// compressString("AAAABBBCCDAA"); // should return "A4B3C2D1A2"
// compressString("XYZ"); // should return "X1Y1Z1"

function compressString(str){
   let count =1;
   let newString ='';
   for (let index = 0; index < str.length; index++) {
      if(str[index]===str[index+1]){
         count++
      }
      else{
         newString+=str[index]+count
     count =1
      }
   }
   return newString;
}


console.log(compressString("AAAABBBCCDAA")) //should return "A4B3C2D1A2"
