var twoSum = function(nums, target) {
    let map = new Map();
    for (let i=0;i<nums.length;i++){
        const complement = target - nums[i];
        if(map.has(complement))
            return [map.get(complement), i];
            map.set(nums[i], i);
    }
    return a;
};
let result = twoSum([2,7,11,15]);
console.log("result", result);