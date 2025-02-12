
var clearDigits = function (s) {
  return s.split("").reduce((acc, ele) => {
    if(ele < '0' || ele > '9') return acc + ele;
    else return acc.slice(0, -1);
  }, '');
}

console.log(clearDigits("abc"));
console.log(clearDigits("cb34"));
