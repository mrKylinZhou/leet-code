/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if(!nums1 || !nums2){
    	return [];
    }
    var dataStore = [];
    var x = new Set(nums1);
    for(var i of x){
    	if(nums2.indexOf(i) > -1){
    		dataStore.push(i);
    	}
    }
    return dataStore;
};