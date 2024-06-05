const fs = require('fs');

const a = fs.readFileSync('./basicData.csv', "utf-8")

function csvTest(a,c){
  
  const b = a.split('\r\n')
  
  const array = [];
  for(let key in b){
    array.push(b[key].split(','))
  }
  
  //csv데이터를 넣어줄 object 객체 초기화
  const object = {};
  
  //값으로 넣어줄 객체 초기화
  const value = {};
  
  //객체값을 가진 지역키
  object[array[0][0]] = value
  
  for (let i = 1; i < array.length; i++) {
    //값으로 넣어줄 객체 초기화
    const value2 = {}
    //객체값을 가진 지역명키
    value[array[i][0]] = value2
    for (let j = 1; j < array[0].length; j++) {   
      //각 연도를 키로 두고 그 연도에 해당되는 값을 프로퍼티 값으로 줬음 
      value2[array[0][j]+"년"] = array[i][j]+"개"
    }
  }
  fs.writeFileSync(`${c}`,JSON.stringify(object, null, 2))
}
csvTest(a,'./a.json')