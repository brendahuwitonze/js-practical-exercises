// var person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     ssn: '299-24-2351'
//   };
//   for(let key in person){
//     console.log(`${key} :${person[key]}`)
//   }
  
var objects ={
    color:"red"
}
var newObject = Object.create(objects)
    newObject.bike = "Toyota"
// for(let key in newObject){
//     console.log(`${key}: ${newObject[key]}`)
// }

//if you want to iterate through the properties of the newObject without including the inherited one 
for(let key in newObject){
    if(newObject.hasOwnProperty(key)){
     console.log(`${key}: ${newObject[key]}`)
    }
}