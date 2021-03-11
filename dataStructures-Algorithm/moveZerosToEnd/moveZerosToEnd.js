function moveZerosToEnd(arr) {
	/**
	@param arr: integer[]
	@return: integer[]
  
  i : array
  o: array
  c: array length 0-20
      5s time limit
	*/
  
  if(arr.length <= 1) return arr;
  
  let left = 0; 
  let right = 1;
  
  for(let i = 0; right < arr.length; i++){
     if(arr[left] !== 0 ){
       left++;
       right++;
       continue;
     }else if(arr[left] === 0 && arr[right] !== 0){
       let temp = arr[left];
       arr[left] = arr[right];
       arr[right] = temp;
       continue;
     }else if(arr[left] === 0 && arr[right] === 0){
       right++;
       continue;
     }if(right > arr.length - 1){
         break;
     }
  }
  return arr;
}
