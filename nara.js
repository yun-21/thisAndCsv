const fs = require('fs')
const csvData = fs.readFileSync("Nara.csv", "utf-8")

const arrayCsv = (callback) => {
  const arrCsvData = csvData.split('\r\n')
  callback(arrCsvData, arrData)
}

const arrData = (data, callback) => {
  const arr = [];
  for (let key in data) {
    arr.push(data[key].split(","));
  }
  callback(arr, filterData);
}

const filterData = (arr) => {
  const year = arr[0].filter((word) => word.includes("연도"))
  const deletes = (year) => {
    const array = [];
    for (let key in year) {
      array.push(year[key].split(" "))
    }
    function inner(array) {
      array.forEach((element) => {
        element.splice(0, 1)
      })
      return array
    }
    inner(array)
    return array
  }
  return deletes(year)
}


arrayCsv((data, callback) => (callback(data, filterData)));


