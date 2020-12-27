// Task-1
Array.prototype.beAddObject = function(key,value) {
  this.forEach((item) => {
    item[key]=value;
    console.log(item);
  });
};

var sampleinput=[{name:"John",age:26},{name:"siva",age:27}];
console.log(sampleinput.beAddObject("country","India"));
