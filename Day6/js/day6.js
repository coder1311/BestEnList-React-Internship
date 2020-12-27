// Task-1
Array.prototype.beFindObject = function(property) {
  var arr = [];
  this.forEach((item) => {
    arr.push(item[property]);
  });
  return arr;
};

var sampleinput=[{name:"John",age:26},{name:"siva",age:27}];
console.log(sampleinput.beFindObject('name'));
