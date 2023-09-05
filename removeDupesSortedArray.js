var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;
    let result = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[result]) { 
            nums[++result] = nums[i];
        }
    }
    return result + 1;
};