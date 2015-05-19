var twoSum = function(nums, target) {
    var count = {};
    var result = [];
    for(var i = 0; i < nums.length; i++) {
        if(!count[nums[i]]) {
            count[target - nums[i]] = i+1;
        } else {
            result.push(count[nums[i]], i+1);
        }
    }
    return result;
};
