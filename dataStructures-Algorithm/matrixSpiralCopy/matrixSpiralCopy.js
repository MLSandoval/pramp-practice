function spiralCopy(inputMatrix) {
  // your code goes here
  /*
  i: 2d array
  o: spiral 1d version array
  c: input length >=1, <= 100
 


  if in: [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]]
  then out: [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]
  coordinate form:
    [(0, 0),(0, 1),(0, 2),(0, 3),(0, 4),(1,4),(2, 4),(3, 4),(3, 3),(3, 2),(3, 1),(3, 0),(2, 0),(1,0),(1, 1),(1, 2),(1,3),(2, 3),(2, 2),(2, 1),]

    [
      (0, 0),(0, 1),(0, 2),(0, 3),(0, 4),TURN
      (1,4),(2, 4),(3, 4),TURN
      (3, 3),(3, 2),(3, 1),(3, 0),TURN
      (2, 0),(1,0),TURN
      (1, 1),(1, 2),(1,3),TURN
      (2, 3),(2, 2),(2, 1)END
    ]
  */
  
    //through all subarrays + elements, maybe map the value as a key to a map, with map value at key = array holding coordinates of where it should be 
  
}

let matrix = [[1,    2,   3,  4,    5],
              [6,    7,   8,  9,   10],
              [11,  12,  13,  14,  15],
              [16,  17,  18,  19,  20] ]

console.log(spiralCopy(matrix))