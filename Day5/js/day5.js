// Task-1
String.prototype.beSpacify = function() {
  return this.split("").join(" ");

};
console.log("hello".beSpacify());




// Task-2
String.prototype.beVowel = function(){
  return this.split("").map(char=>char.replace( /[^aeiouAEIOU]/g, '' )).join("");
}
console.log("hello".beVowel());
