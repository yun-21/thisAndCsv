function workOne(a,b){
  if(typeof(a)==="number" && typeof(b)==="number"){
    let local = a + b;
    return local
  }else{
    console.error('숫자만 적어주세요');
  }
}
console.log(workOne(1,12))