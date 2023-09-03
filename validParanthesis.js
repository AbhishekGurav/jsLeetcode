class Stack {
  // Array is used to implement stack
  constructor() {
    this.items = [];
  }
  peek() {
    // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1];
  }

  push(element) {
    // push element into the items
    this.items.push(element);
  }

  pop() {
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0) return "Underflow";
    return this.items.pop();
  }
}

var isValid = function (s) {
  let topOfStack;

  let paraStack = new Stack();
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "(" || s.charAt(i) === "[" || s.charAt(i) === "{") {
      paraStack.push(s[i]);
    }
    topOfStack = paraStack.peek();
    if (
      topOfStack === undefined &&
      (s[i] === "]" || s[i] === ")" || s[i] === "}")
    ) {
      return false;
    }
    switch (s[i]) {
      case ")":
        if (topOfStack === "(") {
          paraStack.pop();
        }
        else {
          return false;
        }
        break;
      case "]":
        if (topOfStack === "[") {
          paraStack.pop();
        }
        else {
          return false;
        }
        break;
      case "}":
        if (topOfStack === "{") {
          paraStack.pop();
        }
        else {
          return false;
        }
        break;

      default:
        break;
    }
  }
  if (paraStack.peek() === undefined) {
    return true;
  }
  else return false;
};
let result = isValid("(])");
console.log("result", result);
