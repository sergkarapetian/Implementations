Array.prototype.myForEach = function (callBack) {
    for (let i = 0; i < this.length; i++) {
      callBack(this[i]);
    }
  };
  
  let array = [1, 2, 3];
  let arr = []
  array.myForEach((elem) => {
      arr.push(elem + 10);
  });
  
  console.log(arr);