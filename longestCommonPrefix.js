var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  let prefix = '';
  for (let i = 0; i < strs[0].length; i++) {
    let letter = strs[0][i];
    if (!letter) return "";
    if(strs.every(str => str[i] === letter)) {
        prefix = prefix + letter;  
    } else break
  }
  return prefix
};
console.log("Result", longestCommonPrefix(["flower","flower","flower","flower"]));
