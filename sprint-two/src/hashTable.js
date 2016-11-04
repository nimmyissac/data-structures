

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // debugger;
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(Array.isArray(this._storage.get(index))){
    this._storage.get(index).push([k,v]);
  }else{
    this._storage.set(index, [[k,v]]);
  }

  //this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  // debugger;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for(var i = 0; i < bucket.length; i++){
    if(bucket[i][0] === k) return bucket[i][1]; 
  } 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for(var i = 0; i < bucket.length; i++){
    if(bucket[i][0] === k) bucket.splice(i, 1); 
  } 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


