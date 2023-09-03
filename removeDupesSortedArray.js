var removeDuplicates = function(nums) {
    let expNums = [];
    expNums[0]=nums[0];
    for (let i=1;i < nums.length; i++){
        if (nums[i] != nums[i+1]){
            expNums.push[nums[i]]
        }
    }
    nums = expNums;
    return nums;
};