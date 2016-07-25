/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    if(!nums){
    	return;
    }
    nums.sort(function(x,y){return x - y;});
    var mid = parseInt(nums.length/2);
    if(nums.length % 2 !== 0){
    	mid = mid + 1;
    }
    var lo = mid - 1;
    var hi = nums.length - 1;
    var dataStore = [];
    for(var i = 0; i < nums.length; ++i){
    	if(i % 2 === 0){
    		dataStore[i] = nums[lo];
    		lo = lo - 1;
    	}
    	else{
    		dataStore[i] = nums[hi];
    		hi = hi - 1;
    	}
    }
    console.log(dataStore);
    for(var j = 0; j < nums.length; ++j){
    	nums[j] = dataStore[j];
    }
};