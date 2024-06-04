const list = [
  ["지역"],
  ["대전", "2", "3"],
  ["서울", "3", "4"]
]
const object = {};

const local = list[0]
const daejeon = list[1][0]
const a = {}
object[local] = a
a[daejeon] = list[1][1]
// console.log(object)


for (let i = 1; i < list.length; i++) {
  var name = list[i][0];
  const num = list[i].slice(1)
  const content = num[0].split(",")
  const ddd = {}
  a[name] = ddd
  ddd[num] = num[i]
  console.log(content)
  // console.log(num)
}
// list[1].shift(); // 배열 첫번째요소 날림