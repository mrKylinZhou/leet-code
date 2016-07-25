/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs || !strs.length){
    	return "";
    }
    var c = null;
    var temp = null;
    var minIndex = strMinIndex(strs);
    for(var i = 0; i < strs[minIndex].length; ++i){
    	c = strs[minIndex][i];
    	for(var x = 0; x < strs.length; ++x){
    		temp = strs[x];
    		if(temp.length === i || temp[i] !== c){
    			return strs[minIndex].substring(0,i);
    		}
    	}
    }
    return strs[minIndex];
};

function strMinIndex(strs){
	var minLength = Infinity;
	var minIndex = 0;
	for(var i = 0; i < strs.length; ++i){
		if(strs[i].length < minLength){
			minLength = strs[i].length;
			minIndex = i;
		}
	}
	return minIndex;
}