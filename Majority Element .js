/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var len = nums.length;
    var map = {};
    for(var i = 0; i < len; ++i){
    	if(!map[nums[i]]){
    		map[nums[i]] = 1;
    	}
    	else{
    		map[nums[i]]++;
    	}
    	if(map[nums[i]] > Math.floor(len / 2)){
    		return nums[i];
    	}
    }
};