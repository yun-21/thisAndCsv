const fs = require('fs')
const csvData = fs.readFileSync("Nara.csv","utf-8")

const arrayCsv = (callback) =>{
  const arrCsvData = csvData.split('\r\n')
  callback(arrCsvData,arrData)
}

const arrData= (data,callback)=>{
  const arr =[];
  for(let key in data){
    arr.push(data[key].split(","));
  }
  callback(arr,filterData);
}

const filterData = (arr)=>{
  const result = arr[0].filter((word)=>word.includes("연도"))
}

arrayCsv((data,callback)=>(callback(data,filterData)));
