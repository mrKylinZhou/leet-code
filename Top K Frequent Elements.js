/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var map = {};
    var dataStore = [];
    for(var i = 0; i < nums.length; ++i){
    	if(!map[nums[i]]){
    		map[nums[i]] = 1;
    	}
    	else{
    		map[nums[i]]++;
    	}
    }
    var count = 0;
    for(var j in map){
    	dataStore[count++] = [j,map[j]];
    }
    return data;
};