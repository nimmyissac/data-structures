var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {

};

setPrototype.add = function(item) {
  this[item] = true;
};

setPrototype.contains = function(item) {
  return (item in this) ? true : false;
};

setPrototype.remove = function(item) {
  delete this[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
