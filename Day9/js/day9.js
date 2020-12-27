// Task-1
Array.prototype.beGetDuplicate = function() {
  return this.filter((item, index) => this.indexOf(item) !== index);
};

var sampleinput=[1,2,4,5,2,5];
console.log(sampleinput.beGetDuplicate());
