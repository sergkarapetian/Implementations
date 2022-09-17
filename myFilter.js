let array = [1, 2, 3, 4, 5, 6];

Array.prototype.myFilter = function (callBack) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};
