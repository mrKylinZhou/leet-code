function pathSum(root, sum) {
	if(root === null){
		return false;
	}
	if(root.val === sum && (root.left === null || root.right === null)){
		return true;
	}
	return pathSum(root.left, sum-root.val)||pathSum(root.right, sum-root.val);
}