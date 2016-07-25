/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var x = new Array(n+1);
    x[0] = x[1] = 1;
    for(var i = 2; i <= n; ++i){
    	for(var j = 0; j < i; ++j){
    		x[i] += x[j] * x[i - 1 - j];
    	}
    }
    return x[n];
};