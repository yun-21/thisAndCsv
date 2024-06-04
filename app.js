const fs = require('fs');

const a = fs.readFileSync('./basicData.csv', "utf-8")

const b = a.split('\r\n')
for(let key in b){
  console.log(b[key].split(',')[0])
}