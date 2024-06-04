const fs = require('fs');

const a = fs.readFileSync('./basicData.csv', "utf-8")

const b = a.split('\r\n')
const array = [];
for(let key in b){
  array.push(b[key].split(','))
}
console.log(array);