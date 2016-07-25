/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var len  = nums.length;
    var map = {};
    for(var i = 0; i < len; ++i){
    	if(isNaN(map[nums[i]])){
    		map[nums[i]] = i;
    	}
    	else{
    		if(Math.abs(map[nums[i]] - i) <= k){
    			return true;
    		}
    		map[nums[i]] = i;
    	}
    }
    return false;
};