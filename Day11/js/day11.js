// Task-1
function getFormvalue()
{
  let value=[];
  document.querySelectorAll("#form1 input").forEach(function(e){
    if (e.value != "Submit"){
      value.push(e.getAttribute("value"));
    }
  })
  return (value);
}
console.log(getFormvalue());




//TAsk-2
document.querySelector("p").style.backgroundColor="green";
