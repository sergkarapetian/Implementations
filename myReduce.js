let arr = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function (callBack, initialValue) {
  for (let i = 0; i < this.length; i++) {
    if (i === 0 && initialValue === undefined) {
      initialValue = this[i];
    } else {
      initialValue = callBack(initialValue, this[i]);
    }
  }
  return initialValue;
};

let obj = arr.myReduce((prev, current) => {
   return prev + current
    
}, 5);

console.log(obj);
