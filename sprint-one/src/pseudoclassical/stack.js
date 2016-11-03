var Stack = function() {
  this.storage = {}; // va
  this._size = 0; 
};

Stack.prototype.push = function(value) {
  // var stackKeys = Object.keys(storage);
  // var length = stackKeys.length;
  // storage[length] = value;
  this.storage[++this._size] = value;
};

Stack.prototype.pop = function() {
  return this._size > 0 ? this.storage[this._size--] : 0;
};

Stack.prototype.size = function() {
  return this._size;
 //return Object.keys(storage).length;
};