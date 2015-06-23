var plusOne = function(digits) {
  var carry = 1;
  var result = [];
  for(var i = digits.length - 1; i >= 0; i--) {
    var number = digits[i] + carry;
    if(number < 10) {
      result.unshift(number);
      carry = 0;
    } else {
      result.unshift(0);
      carry = 1;
    }
  }
  if(carry === 1) {
    result.unshift(1);
  }
  return result;
};
