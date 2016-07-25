/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n===1){
        return "1";
    }
    else{
        var str = countAndSay(--n);
        var count = 1;
        var sign = str[0];
        var result = "";
        for(var i=1; i<str.length;++i){
            if(sign===str[i]){
                count++;
            }
            else{
                result += count + sign;
                count = 1;
                sign = str[i];
            }
        }
        result += count + sign;
    }
    return result;
};