/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(!s){
    	return true;
    }
    var stack = [];
    var map = {};
    var out = null;
    Array.prototype.empty = function(){
    	if(this.length === 0){
    		return true;
    	}
    	else{
    		return false;
    	}
    }
    map["}"] = "{";
    map["]"] = "[";
    map[")"] = "(";
    for(var i = 0; i < s.length; ++i){
    	if(s[i] === "(" || s[i] === "{" || s[i] === "["){
    		stack.push(s[i]);
    	}
    	else{
    		if(stack.empty()){
    			return false;
    		}
    		out = stack.pop();
    		if(map[s[i]] !== out){
    			return false;
    		}
    	}
    }
    return stack.empty();
};