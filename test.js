const list = [
  ["지역", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
  ["강원도", "25", "163", "236", "253", "347", "377", "468"],
  ["경기도", "140", "735", "1639", "1734", "2023", "2151", "2268"]
]
//csv를 객체화 시켜서 넣을 변수 초기화
const object = {};

//값으로 넣어줄 객체 초기화
const value = {};
object[list[0][0]] = value


for (let i = 1; i < list.length; i++) {
  const value2 = {}
  value[list[i][0]] = value2
  for (let j = 1; j < list.length; j++) {
    const year = list[0][j]
    value2[year] = 1
  }
}
console.log(JSON.stringify(object, null, 2))
// list[1].shift(); // 배열 첫번째요소 날림