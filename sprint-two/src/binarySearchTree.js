var BinarySearchTree = function(value) {
  var binarySearchTree = Object.create(BinarySearchTree.prototype);
  
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  binarySearchTree.value = value;

  return binarySearchTree;

};

BinarySearchTree.prototype.insert = function(value){
  var tempTree = this;
  var newTree = BinarySearchTree(value);

    while(tempTree.value > value && tempTree.left !== null){
      tempTree = tempTree.left;
    }
    while(tempTree.value < value && tempTree.right !== null){
      tempTree = tempTree.right;
    }
    if(tempTree.value > value){
      tempTree.left = newTree;
    } else {
      tempTree.right = newTree;
    }


};

BinarySearchTree.prototype.contains = function(value){
  var tempTree = this, hasValue = false;
  // debugger;
  while(tempTree !== null){
    while(tempTree !== null && tempTree.value >= value){
      if(tempTree.value === value){
        return true;
      }
      tempTree = tempTree.left;
    }
    while(tempTree !== null && tempTree.value < value){
      if(tempTree.value === value){
        return true;
      }
      tempTree = tempTree.right;
    }
  }
  return false;

};

BinarySearchTree.prototype.depthFirstLog = function(func){

  function traverse(tree){
    if(tree === null) return;
    func(tree.value);
    traverse(tree.left);
    traverse(tree.right);
  }
  traverse(this);
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
