/*
Design a stack that supports push, pop, top, and retrieving
the minimum element in constant time.
push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
*/

var MinStack = function() {
  this.items = [];
  this.min = [];
};

MinStack.prototype.push = function(x) {
  if(!this.min.length) {
    this.min.push(x);

  } else {
    if(this.min[this.min.length - 1] >= x) {
      this.min.push(x);
    }
  }
  this.items.push(x);
};

MinStack.prototype.pop = function() {
  if(this.items[this.items.length - 1] === this.min[this.min.length - 1]) {
    this.min.pop();
  }
  return this.items.pop();
};

MinStack.prototype.top = function() {
  return this.items[this.items.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.min[this.min.length - 1];
};
