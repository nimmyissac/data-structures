var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var queueStart = 0;
  var queueEnd = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[queueStart++] = value;
  };

  someInstance.dequeue = function() {
    var temp = storage[queueEnd];
    delete storage[queueEnd++];
    return temp;
  };

  someInstance.size = function() {
    return  (queueStart-queueEnd > 0) ? queueStart-queueEnd : 0;
  };

  return someInstance;
};
