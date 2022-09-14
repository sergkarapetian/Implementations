Array.prototype.myMap = function (callBack) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callBack(this[i]));
  }
  return newArr;
};

let arr = [1, 2, 3, 4, 5]

let array = arr.myMap((elem)=>{
return elem * 10
})

console.log(array);