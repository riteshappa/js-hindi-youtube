// imediatily invoked fuction expersion(IIFE)

( function chai(){
    console.log("connected succesfully")
})();

( (name) =>{
    console.log(`connected succesfully and ${name}`)
})("ritesh mali in the hood bitch");