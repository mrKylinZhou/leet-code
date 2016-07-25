var lengthOfLongestSubstring = function(s) {
    var map = [];
    var num = 0;
    var i = 0;
    var j = 0;
    while(i < s.length){
        if(map.indexOf(s[i]) < 0){
            map[j] = s[i];
            i++;
            j++;
        }
        else{
            num = num > map.length ? num : map.length;
            map.splice(0,map.indexOf(s[i])+1);
            j = map.length;
        }
    }
    num = num || map.length;
    return num;
};