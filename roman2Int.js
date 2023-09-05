const Roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let result = 0;
  let prev = null;

  for (let i = 0; i < s.length; i++) {
    if (prev && prev < Roman[s[i]]) {
      result = result - prev - prev;
    }
    prev = Roman[s[i]];
    result += Roman[s[i]];
  }

  return result;
};
console.log("Result", romanToInt("MCMXCIV"));
