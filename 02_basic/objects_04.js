const tinderuser = {}


tinderuser.email = "rm1705270@gmail.com"
tinderuser.name = "ritesh"
tinderuser.isloggedin = false
//console.log(tinderuser);

const reguleruser = {
email:"some@gmail.com",
fullname:{
    userfullname:{
        name:"ritesh",
        lastname:"mali"
    }
}
}
//console.log(reguleruser.fullname.userfullname.lastname);

const obj1 = {1 : "a",2 : 'b'}
const obj2 = {3 : 'a',4 : 'b'}
const obj3 = {5 : 'a',6 : 'b'}

const obj4 ={...obj1,...obj2,...obj3}
//console.log(obj4);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
