
var removeOccurrences = function(s, part) {
  let ans = s;
  while (1) {
    let i = ans.indexOf(part);
    if (i === -1) break;
    ans = ans.slice(0, i) + ans.slice(i+part.length); 
  }
  return ans;
};

console.log(removeOccurrences("daabcbaabcbc", "abc"));
console.log(removeOccurrences("axxxxyyyyb", "xy"));
