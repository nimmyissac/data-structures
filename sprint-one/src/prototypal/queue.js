var Queue = function() {
  var theQueue = Object.create(queueMethods); 
  theQueue.storage = {}; 
  theQueue.queueEnd = 0; 
  theQueue.queueStart = 0;

  return theQueue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.queueStart++] = value;
  },

  dequeue: function() {
    var temp = this.storage[this.queueEnd];
    delete this.storage[this.queueEnd++];
    return temp;
  },

  size: function() {
    return  (this.queueStart-this.queueEnd > 0) ? this.queueStart-this.queueEnd : 0;
  }
};

