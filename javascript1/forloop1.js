// javascript are has three types of for loops:
// 1.for-loops through a number of timr
// 2.for/in-loops through s js object
// for/of- used with arrays
// for loop
var word = "ABCDE"

for (var i = 0; i < word.length; i++) {
  console.log(word[i]);
}

// while loop
var x = 0;

while (x<5) {
   console.log("hello");
   x++
}
// for loop
for (var i = 0; i < 5; i++) {
  console.log("hello brother");
}

// method one while loops
var num = 1;

while (num<25){
  if (num%2 !== 0) {
    console.log(num);

  }
  num++
}

// method two for loops
for (var i = 0; i < 25; i++) {
  if (i%2 !== 0) {
     console.log(i);
  }
}
