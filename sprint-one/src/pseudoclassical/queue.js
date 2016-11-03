var Queue = function() {
 
  this.storage = {}; 
  this.queueEnd = 0; 
  this.queueStart = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.queueStart++] = value;
};

Queue.prototype.dequeue = function() {
  var temp = this.storage[this.queueEnd];
  delete this.storage[this.queueEnd++];
  return temp;
};

Queue.prototype.size = function() { 
  return (this.queueStart - this.queueEnd > 0) ? this.queueStart - this.queueEnd : 0;
};




