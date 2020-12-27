// Task-1
function getSign(num1,num2,num3){
  var num1String= num1.toString().split("");
  var num2String= num2.toString().split("");
  var num3String= num3.toString().split("");

  var finalArray= num1String.concat(num2String, num3String);
  if(finalArray.includes("+" && "-")){
    alert("+ & - sign");
  }
  else if(finalArray.includes("+")){
    alert("+ sign");
  }
  else if(finalArray.includes("-")){
    alert("- sign");
  }
  else alert("welcome");
}

var num1= prompt("enter 1st number:");
var num2= prompt("enter 2nd number:");
var num3= prompt("enter 3rd number:");
getSign(num1, num2, num3);




// Task-2
for(var i=0; i<=100; i++){
  if (i%3 ==0 && i%5 ==0){
    console.log("bestenlist");
  }
  else if (i%3==0){
    console.log("react");
  }
  else if(i%5==0){
    console.log("bestenlistreact");
  }
  else console.log(i);
}



// Task-3
//task3 is a react-app
