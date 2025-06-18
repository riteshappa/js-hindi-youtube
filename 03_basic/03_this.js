const user={
   name:"ritesh",
   roll_no:'22',
   opening_msg : function()
   {
    console.log(`hey my name is ${this.name} thank you`);
    //console.log(this);
    
   }
}
// user.opening_msg()
// //console.log(user);
// user.name ="rohan"
// user.opening_msg()

// addtwono = (num1,num2) => {
//  let add = num1+num2
//  return add;
// }
// console.log(addtwono(3,5))

addtwono = (num1,num2) => (num1 + num2)//no need write return statment if paranthsis add
//console.log(addtwono(3,5))

addtwono = (num1,num2) => {return num1 + num2}// need to write return statment if "  {}   " added       #used in react
console.log(addtwono(3,4))