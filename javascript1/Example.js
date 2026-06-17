var hot = false
var temp = 50

if (temp>80) {
    console.log("Hot outside!");
}else if (temp <= 80 && temp >= 50) {
    console.log("Avarage temp outside");
}else if (temp < 50 && temp >= 32) {
    console.log("its pretty cold outside!");
}else {
    console.log("its very cold outside!");
}
