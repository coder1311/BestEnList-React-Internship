// Task-1
String.prototype.begetdatebetween = function(){
  var start=this.split(",")[0];
  var start_date = new Date(""+start.split("/")[2]+"/"+start.split("/")[1]+"/"+start.split("/")[0]+"");
  var e=this.split(",")[1];
  var end=new Date(""+e.split("/")[2]+"/"+e.split("/")[1]+"/"+e.split("/")[0]+"");
  var end_date = end.setDate(end.getDate()-1);
  var a = [];

  while(start_date < end_date){
    start_date.setDate(start_date.getDate()+1);
    new Date(start_date);
    a.push(start_date.getDate()+"/"+(start_date.getMonth()+1)+"/"+start_date.getFullYear());
  }
  return a
};

console.log("02/11/2020,04/11/2021".begetdatebetween());
