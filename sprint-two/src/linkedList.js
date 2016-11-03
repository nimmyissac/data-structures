var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if(list.head === null){
      list.head = newNode;
      list.tail = newNode;
    } else {
      var tempNode = list.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      };
      tempNode.next = newNode;
      list.tail = newNode; 
    }
  };

  list.removeHead = function() {   
    var tempNode = list.head;
    list.head = tempNode.next;
    return tempNode.value;
  };

  list.contains = function(target) {
    var tempNode = list.head;
    while(tempNode !== null){
      if(tempNode.value === target){
        return true;
      }
      tempNode = tempNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
