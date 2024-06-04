class WorkTwo{
  constructor(a,b){
    this.a = a;
    this.b = b;
  }

  set a(value){
    if(typeof(value)==="number"){
      return this._a = value;
    }else{
      throw new Error("a는 숫자만 입력할 수 있습니다.")
    }
  }

  set b(value){
    if(typeof(value)==="number"){
      return this._b = value;
    }else{
      throw new Error("b는 숫자만 입력할 수 있습니다.")
    }
  }

  //그냥 함수가 아니라 메서드를 만드는 것이다.
  add(){
    return this._a+this._b;
  }
}

let test = new WorkTwo(1,2);
console.log(test);

console.log(test instanceof WorkTwo);