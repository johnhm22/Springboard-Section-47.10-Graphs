class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  // This function should add a node to the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let vertex of vertexArray){
      this.addVertex(vertex)
    }
  }



  // this function accepts two vertices and updates their adjacent values to include the other vertex
  // This function should add an edge between two nodes in the graph and place each value of the nodes in each array for the value of the node in the adjacency list
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }




  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  // This function should accept two nodes and remove the edge between them. It should modify the adjacency list to ensure that both values are not in each array for the two nodes which no longer contain the edge
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }




  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  // This function should remove the node in the array of nodes and also remove all edges that the removed node previously contained
  removeVertex(vertex) {
    for(let node of vertex.adjacent){
    node.adjacent.delete(vertex);
    }
    vertex.adjacent.clear()
    this.nodes.delete(vertex);
  }



  // this function returns an array of Node values using DFS
  // This function should return an array of nodes visited using DFS. You can do this iteratively (using a stack) or recursively, but note the order of the results will be different. Try to solve this without consulting the lecture notes!
  depthFirstSearch(start) {
    //add start into seen Set
    //add neighbours into queue
    //take from start of queue and, if not in seen, add to seen and array
    //add neighbours into queue
    //repeat
    //when queue is empty return array

    let nodeQueue = [];
    nodeQueue.push(start);
    let current = nodeQueue.pop();
    if(!seen.has(current)){
    for(let neighbour of current.adjacent){
      console.log(neighbour);
      // nodeQueue.push(neighbour);
      seen.add(neigbour);
    }
console.log("seen: ", seen);
  }
    console.log("nodeQueue: ", nodeQueue);
  }


  depthFirstSearch(start) {
    let nodeValueArray = [];
    let nodeQueue = [];
    let seen = new Set();
    nodeQueue.push(start);
    function populateArray(){
        if(nodeQueue.length === 0) return; 
        let current = nodeQueue.pop(); 
        if(!seen.has(current)){
        nodeValueArray.push(current.value);
        seen.add(current);
        for(let neighbour of current.adjacent){
          if(!nodeQueue.includes(neighbour) && !seen.has(neighbour)){
              nodeQueue.push(neighbour);
              }
          }
         populateArray();
      } 
         populateArray();
         return nodeValueArray;
    } 
  }


  // this function returns an array of Node values using BFS
  //This function should return an array of vertices visited using BFS.
  breadthFirstSearch(start) {
  let nodeValueArray = [];
  let nodeQueue = [];
  let seen = new Set();
  nodeQueue.push(start);
  while(nodeQueue.length){
      let current = nodeQueue.shift();
      nodeValueArray.push(current.value);
      seen.add(current);
       for(let neighbour of current.adjacent){
           if(!nodeQueue.includes(neighbour) && !seen.has(neighbour)){
               nodeQueue.push(neighbour);
                      }
                  }     
          } 
          return nodeValueArray;
      }

}

module.exports = {Graph, Node}