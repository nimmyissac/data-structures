

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};


// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
   // debugger;
   return (node in this) ?  true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for(var i=0;i<this[node].length; i++){
    this.removeEdge(node,this[node][i]);

  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edgeFound = false;
  this[fromNode].forEach(function(element){
    if(element === toNode){
      edgeFound = true;
    }
  });
  return edgeFound;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // debugger;
 for(var i=0;i< this[fromNode].length; i++){
   if(this[fromNode][i] === toNode){
     this[fromNode].splice(i,1);
   }
 }
 for(var i=0;i< this[toNode].length; i++){
   if(this[toNode][i] === fromNode){
     this[toNode].splice(i,1);
   }
 }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  Object.keys(this).forEach(node => cb(node));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


