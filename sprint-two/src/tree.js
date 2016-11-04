var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(new Tree(value)); 
};

treeMethods.contains = function(target) {
  // debugger;
  var flag = false;
  function traverseTree(tree) {
    for(var i=0; i< tree.children.length; i++){
      if(tree.children[i].value === target){
        flag = true;
      }else{
        traverseTree(tree.children[i]);
      }
    }
  }
  traverseTree(this);
  return flag; 
};
