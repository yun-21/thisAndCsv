class ItsMe{
  constructor(){
    this.name ="신지윤",
    this.age = 25,
    this.home = '대전'
  }
  sentence(){
    return this.name + "입니다";
  }
}

let itsMe = new ItsMe();
console.log(itsMe);
console.log(itsMe.sentence());
