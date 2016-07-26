var fs = require("fs");

var data = fs.readFileSync('India2011.csv');


var stringData=data.toString();
var arrayOne= stringData.split('\r\n');
var header=arrayOne[0].split(',');

var cnt_area,cnt_age,cnt_lit,cnt_total,cnt_wo,cnt_below,cnt_pri,cnt_mid,cnt_sec,cnt_high,cnt_non,cnt_tech,cnt_unclas,cnt_grad ;
cnt_area = header.indexOf('Area Name');
console.log(Area Name);
