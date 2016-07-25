var generate = function(numRows) {
    var temp = [1];
    var temp1 = [1,1];
    if(!numRows){
        return temp;
    }
    for(var i = 0; i < numRows; ++i){
        for(var x = 0; x < temp1.length; ++x){
            temp[x] = temp1[x];
        }
        for(var j = 1 ; j < temp1.length; ++j){
            temp1[j] = temp[j-1] + temp[j];
        }
        temp1[temp1.length] = 1;
    }
    return temp;
}