// Creates a stack
var Stack = function() {
    this.count = 0;
    this.storage = {};
  
    // Adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }
    
    // Removes and returns the value at the end of the stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    
    this.size = function() {
        return this.count;
    }
    
    // Returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count-1];
    }
}

var pancakeStack = new Stack();

pancakeStack.push(1);
pancakeStack.push(2);
console.log(pancakeStack.peek());
console.log(pancakeStack.pop());
console.log(pancakeStack.peek());
pancakeStack.push("pancakes");
console.log(pancakeStack.size());
console.log(pancakeStack.peek());
console.log(pancakeStack.pop());
console.log(pancakeStack.peek());
