
var addTwoNumbers = function(l1, l2) {
  let tmp = 0;
  return [...Array(Math.max(l1.length, l2.length)).keys()].reduce((acc, ele) => {
    const sum = l1[ele] + l2[ele] + tmp;
    tmp = sum > 9 ? 1 : 0;
    return [...acc, sum % 10];
  }, []);
};

console.log(addTwoNumbers([2,4,3], [5,6,4]));
