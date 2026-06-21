function hello(){
  console.log("hello world!");
}

// function examples
// 1. multiplication
function timesFive(numInput){
  // local scope to the function
   var result = numInput * 5
   return result
}

// global scope
var v ="GLOBAL V"
var stuff = "GLOBAL STUFF"

function fun(stuff) {
   console.log(v);
   stuff = "Reassign stuff inside func"
   console.log(stuff);
}
fun()
console.log(stuff);
