// Task-1
today=new Date();
var christmasDay=new Date(today.getFullYear(), 11, 25);

if (today.getMonth()==11 && today.getDate()>25){
  christmasDay.setFullYear(christmasDay.getFullYear()+1);
}

var oneDay=1000*60*60*24;
var daysLeft= (Math.ceil((christmasDay.getTime()-today.getTime())/(oneDay))+" days left until Christmas!");
document.getElementById("task1").innerHTML = daysLeft;


// Task-2
function test50(){
  var num1= prompt("enter num1");
  var num2= prompt("enter num2");
  if ((num1 == 50 || num2 == 50) || (num1 + num2 == 50)){
    document.getElementById("task2").innerHTML= "test50 passed";
  }else{
    document.getElementById("task2").innerHTML= "test50 failed";
  }
}
test50();


// Task-3
var string= prompt("enter any string");
var length= string.length;
document.getElementById("task3").innerHTML= length;
