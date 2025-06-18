//constructor se banega to singltone

//object literal
const mysym = Symbol("mykey1")
const jsuser = {
   name : "ritesh",
   email : "maliritesh66@gmail.com",
   " my name" : "mali ritesh",
   [mysym] : "mykey2",
   age : 18,

}
//console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser.name)
// console.log(jsuser["my name"]);
// console.log(jsuser[mysym]);

// jsuser.email = "rm1705270@gmail.com"//change value of keys
// console.log(jsuser)
// Object.freeze(jsuser)//cant change value when freez
// jsuser.email = "1705270@gmail.com"
// console.log(jsuser);

//fuctions
jsuser.greeting =function(){
console.log("hello everyone");
}
jsuser.mygreeting = function(){
    console.log(`hello everyone my name is ${this.name} thank you`); 
}
console.log(jsuser.mygreeting())
console.log(jsuser.greeting());
