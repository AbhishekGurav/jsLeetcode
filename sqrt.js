var mySqrt = function (x) {
  if (x <= 1) {
    return x;
  }
  if (x === 2 || x===3) {
    return 1;
  }
  if (x === 4) {
    return 2;
  }
  for (let i = 3; i <= x/2; i++) {
    if (x<i*i) return i-1;
  } 
};
let result = mySqrt(10);
console.log("result", result);
