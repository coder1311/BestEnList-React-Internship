// Task-1
Array.prototype.beRemoveObject = function(key) {
  this.map((item) => delete (item[key]));
  this.forEach((item) => {
    console.log(item)
  });
};

var sampleinput=[{name:"John",age:26,country:"india"},{name:"siva",age:27,country:"india"}];
sampleinput.beRemoveObject("country");
