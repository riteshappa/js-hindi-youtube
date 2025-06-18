//pass by value = primitive(stack)

let one = "hello ritesh"
let two = one
two = "hello rohan"
console.log(one);
console.log(two);

//pass by refrence = non-primitive(heap)#og value change
let three  = {
    email : "ritesh@gmail.com"
}
let four = three

four.email = "rhan@gmail.com"

console.log(three.email);
console.log(four.email);

