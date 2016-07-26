var fs = require("fs");
var data = fs.readFileSync('India2011.csv');
var data1 = fs.readFileSync('IndiaSC2011.csv');
var data2 = fs.readFileSync('IndiaST2011.csv');


var cnt_area,cnt_age,cnt_lit,cnt_total,cnt_wo,cnt_below,cnt_pri,cnt_mid,cnt_sec,cnt_high,cnt_non,cnt_tech,cnt_unclas,cnt_grad ;

// var noOfRow = arrayOne.length;
// var noOfCol = header.length;

var final_obj={};
var final_obj1={};
var arr_age=[];
var arr_edu=[];
var i=0,j=0;
var obj={};
var obj1={};
function calc (data) {
  var stringData=data.toString();
  var arrayOne= stringData.split('\r\n');
  var header=arrayOne[0].split(',');
  cnt_area = header.indexOf('Area Name');
  cnt_age = header.indexOf('Age-group');
  cnt_lit = header.indexOf('Literate - Persons');
  cnt_total = header.indexOf('Total/ Rural/ Urban');

for (i = 1; i < arrayOne.length-1; i++) {
     var line=arrayOne[i].split(',');
  if(obj[state]==undefined)
  {
  obj[state]=obj1();
  if(obj[state[key]]==undefined)
  {
    obj[state[key]]=value;
  }
  else {
    obj[state[key]]+=value
  }

  }
};
}//function data
calc(data);
calc(data1);
calc(data2);

console.log(arr_age);
console.log(final_obj1);
