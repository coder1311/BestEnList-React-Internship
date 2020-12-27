// Task-1
function repeated(num){
  var numString= num.toString().split("");
  var digit1= numString[numString.length-1];
  var digit2= numString[numString.length-2];
  return (digit1 === digit2);
}

var num= prompt("enter the number:");
var result= repeated(num);
document.getElementById("task1").innerHTML = result;



// Task-2
function secondMax(array){
  var max = Math.max.apply(null, array);
  array.splice(array.indexOf(max), 1);
  return Math.max.apply(null, array);
}

var sizeOfArray= prompt("enter the number of integers:");
var inputArray= [];

for(var i=0; i<sizeOfArray; i++) {
	inputArray[i] = prompt('Enter Element ' + (i+1));
}

var secondMax= secondMax(inputArray);
document.getElementById("task2").innerHTML = secondMax;



// Task-3
function square(num){
  var numString= num.toString().split("");
  var squaredDigit= numString.map(digit => digit * digit);
  return squaredDigit.join('');
}

var num = prompt("enter the number:");
var squaredNumber = square(num);
document.getElementById("task3").innerHTML = squaredNumber;
