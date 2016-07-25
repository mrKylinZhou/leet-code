/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var y = s.split("");
    var data = [];
    var number = [];
    var len = s.length;
    for(var i = 0; i < len; ++i){
        if(y[i] === "a" || y[i] === "e" || y[i] === "i" || y[i] === "o" || y[i] === "u"|| y[i] === "A" || y[i] === "E" || y[i] === "I" || y[i] === "O" || y[i] === "U"){
            data.push(y[i]);
            number.push(i);
        }
    }
    data = data.reverse();
    for(var j = 0; j < data.length; ++j){
        y[number[j]] = data[j];
    }
    s = y.join("");
    return s;
};