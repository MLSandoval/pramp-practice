
// first implementation, not so good
// function getDifferentNumber(arr) {
//   const sorted = arr.sort((a, b) => a-b);
  
//   let n = arr.length;
  
//   if(n > (Math.pow(2, 31) - 1)){
//     return undefined;
//   }
  
//   for(let i = 0; i < sorted.length; i++){
//     if(i !== sorted[i]){
//       return i;
//     }else if(i + 1 === sorted.length){
      
//       return sorted.length;
//     }
//   }
// }

// let x = [1] //0
// let y = [0,1] //2
// let z = [0,1,2,4] //3

function getDifferentNumber (arr){
  const map = new Map();
  console.log("arr: ", arr);
  arr.forEach((el, ind) => {
    map.set(el, el);
  })

  for (let i = 0;i < map.size; i++){
    if(i !== map.get(i)){
      return i;
    }else if(i + 1 === map.size){
      return map.size;
    }
  }
  return null
}

let v = [0,1,2,3,4,5,6] //7
let w = [0,1,2,3,5] // 4
let x = [0,1] //2
let y = [0,2] //1
let z = [1,2,3,4,5] //0
console.log(getDifferentNumber(v))
console.log(getDifferentNumber(w))
console.log(getDifferentNumber(x))
console.log(getDifferentNumber(y))
console.log(getDifferentNumber(z))