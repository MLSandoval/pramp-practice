function spiralCopy(inputMatrix) {
  // your code goes here
  /*
  i: 2d array
  o: spiral 1d version array
  c: intput length >=1, <= 100
  */
  
  top left corner -> top right corner, (0,0) - (0, 3), assign coordinates of last value to      pointer: 4
  
  top right corner -> bottom right corner, 'length.first inner  - 1' - length.outer
  bottom right corner -> bottom left corner, length.outer -1, length.inner -1
  bottom left -> top left -1, (3,0) , (1,0)
  
  let output = [];
  
  let columnPointer = 0;
  let rowPointer = 0;
  
  while(columnPointer < inputMatrix.length){
    
  }
  
  for(let i = 0; i < inputMatrix[0].length; i++){
    let val = inputMatrix[0][i];
    output.push(val);
  } //[1,2,3,4,5]
  
  
  
  
  
}