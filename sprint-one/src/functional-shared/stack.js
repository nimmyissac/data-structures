var Stack = function() {
  var someInstance = {};
  // properties  in someinstance ...> storage, and size
  // pushing means return storage[size] increment size
  //poping means delete someinstance.storage[size]; size --;
  someInstance = extend(someInstance, stackMethods);
  someInstance.storage = {}; // va
  someInstance._size = 0; 

  return someInstance;
};

var stackMethods = {
  // Implement the methods below
  push: function(value) {
    // var stackKeys = Object.keys(storage);
    // var length = stackKeys.length;
    // storage[length] = value;
    this.storage[++this._size] = value;
  },
  pop: function() {
    return this._size > 0 ? this.storage[this._size--] : 0;
  },
  size: function() {
    return this._size;
   //return Object.keys(storage).length;
  }
};


function extend(obj) {
  var toAdd = Array.prototype.slice.call(arguments);
  toAdd.shift();
  toAdd.forEach(function(item){
    for(var prop in item){
      obj[prop] = item[prop];
    }
  });
  return obj; 
};