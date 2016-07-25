/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
	var data = [0];
	var count = 1;
	var counter = 0;
	var temp = 0;
    for(var i = 1; i <= num; ++i){
    	if(Math.pow(2,counter) === i){
    		count = 1;
    		counter++;
    		data[i] = count;
    		continue;
    	}
    	temp = i;
    	while(temp % 2 === 0){
    		count--;
    		temp = temp / 2;
    	}
    	count++;
    	data[i] = count;
    }
    return data;
};