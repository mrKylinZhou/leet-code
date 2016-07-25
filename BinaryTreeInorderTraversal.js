var dataStore = [];
function inOrder(root) {
	if(!!root){
		inOrder(root.left);
		dataStore.push(root.val);
		inOrder(root.right);
	}
}