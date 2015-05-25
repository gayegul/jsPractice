var rotate = function(nums, k) {
  var tempArr = nums.slice();
  for(var i = 0; i < nums.length; i++) {
    nums[(i+k)%nums.length] = tempArr[i];
  }
};
