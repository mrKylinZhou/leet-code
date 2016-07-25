/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	var mapS = {};
	var mapT = {};
	if(s.length !== t.length){
		return false;
	}
	for(var i = 0; i < s.length; ++i){
		mapS[s[i]] = (mapS[s[i]] || 0) +1;
		mapT[t[i]] = (mapT[t[i]] || 0) +1;
	}
	var arrS = Object.keys(mapS),
		arrT = Object.keys(mapT);
	console.log(arrS);
	console.log(arrT);
	if(arrS.length !== arrT.length){
		return false;
	}
	var len = arrS.length;
	for(i = 0; i < len; ++i){
		if(mapS[arrS[i]] !== mapT[arrS[i]]){
			return false;
		}
	}
	return true;
};