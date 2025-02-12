var maximumSum = function (nums) {
  let cnt = new Array(100).fill(0);
  return nums.reduce((ans, item) => {
    const sum = Math.abs(item).toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
    let newAns = ans;
    if (cnt[sum] !== 0 && item + cnt[sum] > ans) newAns = item + cnt[sum];
    if (item > cnt[sum]) cnt[sum] = ans;
    return newAns;
  }, -1);
}
