/**
 * @param {string} s
 * @return {string}
 */

 var reverseVowels = function(s) {
    var y = s.split("");
    var len = s.length - 1;
    var temp = null;
    var i = 0;
    while(i < len){
    	if(!isboolean(y[i])){
    		i++;
    	}
    	else if(!isboolean(y[len])){
    		len--;
    	}
    	else{
    		temp = y[i];
    		y[i] = y[len];
    		y[len] = temp;
    		i++;
    		len--;
    	}
    }
    s = y.join("");
    return s;
};


function isboolean(s){
	var lowcase = s.toLowerCase();
	return lowcase === "a" || lowcase === "e" || lowcase === "i" || lowcase === "o" || lowcase === "u";
}