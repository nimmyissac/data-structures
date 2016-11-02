var Stack = function() {
  var someInstance = {};
  // properties  in someinstance ...> storage, and size
  // pushing means return storage[size] increment size
  //poping means delete someinstance.storage[size]; size --;

  var storage = {}; // va
  var size = 0; 

  // Implement the methods below
  someInstance.push = function(value) {
    // var stackKeys = Object.keys(storage);
    // var length = stackKeys.length;
    // storage[length] = value;
    storage[++size] = value;
  };

  someInstance.pop = function() {
    return size > 0 ? storage[size--] : 0;
  };

  someInstance.size = function() {
    return size;
   //return Object.keys(storage).length;
  };

  return someInstance;
};

//var s1 = Stack();
//s1.push(item1);
