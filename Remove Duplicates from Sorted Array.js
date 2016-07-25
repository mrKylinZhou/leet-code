/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var len = nums.length - 1;
    for(var i = 0; i < len; ++i){
    	if(nums[i] === nums[i+1]){
    		nums.splice(i,1);
    		--i;
    		--len;
    	}
    }
    return nums.length;
};