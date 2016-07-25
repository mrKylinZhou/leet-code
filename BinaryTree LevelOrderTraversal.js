function Hello(root) {
	var num = [];
    if(root === null){
		return num;
	}
	var p = root;
	var parentCount = 0,
		childCount = 0,
		dataStore = [],
		temp = [],
		i = 1;
	num[0] = [p.val];
	if(p.left){
		dataStore.push(p.left);
		parentCount++;
	}
	if(p.right){
		dataStore.push(p.right);
		parentCount++;
	}
	while(dataStore.length !== 0){
		p = dataStore.shift();
		temp.push(p.val);
		parentCount--;
		if(p.left){
			dataStore.push(p.left);
			childCount++;
		}
		if(p.right){
			dataStore.push(p.right);
			childCount++;
		}
		if(parentCount === 0){
			num.push(temp);
			temp = [];
			i++;
			parentCount = childCount;
			childCount = 0;
		}
	}
	return num;
}