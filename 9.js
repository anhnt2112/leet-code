var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x < 10) return true;
    const xStr = x.toString().split('');
    return xStr.reduce((ans, item, index) => ans && (item === xStr[xStr.length - 1 - index]));
};
