var fs = require("fs");
var data = fs.readFileSync('India2011.csv');
var data1 = fs.readFileSync('IndiaSC2011.csv');
var data2 = fs.readFileSync('IndiaST2011.csv');
var cnt_area,cnt_age,cnt_lit,cnt_total;
var final_obj={};

var arr=[];
var i=0,j=0;

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
     if(final_obj[header[cnt_lit]]==undefined || final_obj[header[cnt_area]]==undefined)
     {
       final_obj[header[cnt_lit]]=0;
       final_obj[header[cnt_area]]=0;
     }
    if((line[cnt_age] != '0-6') && (line[cnt_age] != 'All ages') && (line[cnt_total] == 'Total'))
    {
      final_obj[header[cnt_area]]=line[cnt_area];
      final_obj[header[cnt_age]]=line[cnt_age];
      final_obj[header[cnt_lit]]+=parseInt(line[cnt_lit]);
    }
};
}//function data
calc(data);
calc(data1);
calc(data2);
console.log(final_obj);
