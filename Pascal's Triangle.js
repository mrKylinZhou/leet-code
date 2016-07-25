/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
	var number = [];
    if(!numRows){
    	return number;
    }
    var temp = [1];
    var temp1 = [1,1];
    for(var i = 0; i < numRows; ++i){
    	number[i] = [];
    	for(var y = 0; y < temp.length; ++y){
    		number[i][y] = temp[y];
    	}
    	for(var x = 0; x < temp1.length; ++x){
    		temp[x] = temp1[x];
    	}
    	for(var j = 1 ; j < temp1.length; ++j){
    		temp1[j] = temp[j-1] + temp[j];
    	}
    	temp1[temp1.length] = 1;
    }
    return number;
}