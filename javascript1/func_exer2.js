// problem number1
function sleepIn(weekday, vacation) {
    return (!weekday || vacation)
}

// 2nd problem - monkey trouble

function monkeyTrouble(aSmile, bSmile) {
    return (aSmile && bSmile) || (!aSmile && !bSmile)
}

// 3rd problem - strind times
function stringTimes(str, n) {
   var returnStr = "";
   var i = 0;
   while (i<n){
     returnStr += str
     i++
   }
   return returnStr
}

// 4th problem - lucky sum
function luckySum(a, b, c) {
   if (a === 13) {
     return 0
   }else if (b === 13) {
     return a

   }else if (c === 13) {
     return a +b
   }else {
      return a+b+c
   }
}

// 5th problem - you driving a little too fast, and a police officer stop monkeyTrouble
function caught_speeding(speed, is_birtday) {
    if (is_birthday)
    speed -= 5
}
if (speed <= 60) {
  return 0
}
if () {

}
