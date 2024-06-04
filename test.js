const array = [
  ["지역", "2016", "2017"],
  ["대전", "2", "3"]
]
const aa = {};
const a=array[1][0]
aa[array[0][0]]={a}
// console.log(JSON.stringify(aa,null,2));

for(let key in aa){
  console.log(aa[key])
  for(let ket in aa[key]){
    console.log(ket);
  }
}

