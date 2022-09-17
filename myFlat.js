Array.prototype.myFlat = function(level = 1){
  let newArr = []

  function nested(arr){
    level -= 1
    for(let elem of arr){
      Array.isArray(elem) && level > 0 ? nested(elem) : newArr.push(elem)
    }
    return newArr
  }

  for(let elem of this){
Array.isArray(elem) && level > 0 ? nested(elem) : newArr.push(elem)
  }
  return newArr
}

console.log([1, 2, [[[3, [4, [5, [6, [7, [8, [9, [10, [11]]]]]]]]]]]].myFlat(11))