var mySqrt = function(x) {
  var high = x;
  var low = 0;
  if(x === 0 || x === 1) {
    return x;
  }
  while(high > low) {
    var mid = low + Math.round((high - low)/2);
    if(low === mid || high === mid) {
      return low;
    }
    if(mid * mid === x) {
      return mid;
    }
    else if (mid * mid > x) {
      high = mid;
    } else {
      low = mid;
    }
  }
  return low;
};
