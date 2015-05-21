var majorityElement = function(nums) {
    var container = {};
    var currentHighestCount = 0;
    var result = nums[0];
    for(var i = 0; i < nums.length; i++) {
        if(!container[nums[i]]) {
            container[nums[i]] = 1;
        } else {
            container[nums[i]] = container[nums[i]] + 1;
            if(currentHighestCount < container[nums[i]]) {
              currentHighestCount = container[nums[i]];
                result = nums[i];
            }
        }
    }
    return result;
};
