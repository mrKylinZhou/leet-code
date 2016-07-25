/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1){
    	return s;
    }
    var flag = 0;
    var str = new Array(numRows);
    for(var y = 0; y < numRows; ++y){
        str[y] = "";
    }
    var tmp = "";
    for(var i = 0,j = 0; i < s.length; i++){
    	if(j === 0){
    		flag = 1;
    	}
    	if(j === numRows - 1){
    		flag = -1;
    	}
    	str[j] = str[j] + s[i];
    	j += flag;
    }
    console.log(str);
    for(var x = 0; x < numRows; ++x){
    	tmp = tmp + str[x];
    }
    return tmp;
};