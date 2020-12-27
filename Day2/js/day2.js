// Task-1
function square(num){
  return num*num
}
var num= prompt("enter the number:")
var result= square(num)
document.getElementById("task1").innerHTML = result;


// Task-2
function randomNumber(){
  return 100000 + Math.floor(Math.random() * 900000);
}
sixDigitNumber= randomNumber();
document.getElementById("task2").innerHTML = sixDigitNumber;


// Task-3
browserName = navigator.appName;
browserVersion= navigator.appVersion;
alert("browserName is " + browserName + "and browserVersion is "+ browserVersion);
document.getElementById("task3").innerHTML = browserName + " " + browserVersion;
