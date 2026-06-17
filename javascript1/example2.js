var ham = 1;
var cheeese = 10;

var report = "blank";

if (ham >= 10 && cheeese >= 10){
  report = "Strong sales of both ham and cheeese!"
}else if (ham === 0 && cheeese === 0) {
    report ="Nothing sold!"
}else {
  report = "we have some sales of item"
}

console.log(report);
