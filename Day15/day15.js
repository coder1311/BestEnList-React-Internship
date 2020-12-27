// Task-1
String.prototype.commaCurrency = function() {
  if (this.length>3){
    return this.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
};

var sampleinput=prompt("Enter the number:");
console.log(sampleinput.commaCurrency());
