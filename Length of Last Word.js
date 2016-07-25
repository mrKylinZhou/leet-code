/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(!s){
        return 0;
    }
    var trimS = s.trim();
    var lSIndex = trimS.lastIndexOf(" "); 
    if(lSIndex < 0){
        return trimS.length;
    }
    var lastWord = trimS.substring(lSIndex + 1);
    return lastWord.length;
};