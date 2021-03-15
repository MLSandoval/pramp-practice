function getCheapestCost(rootNode) {
  
  let lowest = Infinity;
  let sum = 0;
  
  const recurse = (node, sum) => {
    
    let cost = node.cost
    
    sum += cost;
    
    if(!node.children[0]){
      lowest = lowest > sum ? sum : lowest;
      
      return;
    }
    node.children.forEach(child => {
      recurse(child, sum);
    })
  }
  
  recurse(rootNode, sum);
  
  return lowest;
}

/******************************************
 * Use the helper code below to implement *
 * and test your function above           *
 ******************************************/ 

// Constructor to create a new Node

let rootNode = {
  cost: 0,
  children: [
    {
      cost: 4,
      children:[
        {
          cost:1,
          children:[]
        }
      ]
    },
    {
      cost: 1,
      children: [
        {},
        {}
      ]
    },
    {
      cost:2,
      children:[]
    }
  ]
}


function Node(cost) {
  this.cost = cost;
  this.children = [];
}

/*
  i: node
  o: int
  
  - traverse all nodes of tree, recursive
  - set a stop condition
  - carry values of nodes, sum, then compare 
  - return lowest branch sum
*/

