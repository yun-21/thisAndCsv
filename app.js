const fs = require('fs');

const a = fs.readFileSync('./basicData.csv', "utf-8")

const b = a.split('\r\n')
console.log(b[17])

console.log(JSON.stringify(a));