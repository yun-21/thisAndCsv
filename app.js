const fs = require('fs');

const a = fs.readFileSync('./basicData.csv', "utf-8")

const b = a.split('\r\n')
const c =[];
for(let key in b){
  c.push(b[key].split(',')[0])
}
const d ={};
c.forEach((element ,index)=>{
  if(index===0){
    d[element]={}
  }
  console.log(element,index)
})
console.log(d);
d['지역']='대전';
console.log(d);