/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    return helper(1 ,n);
};

function helper(left ,right){
	var arrList = [];
	if(left > right){
		arrList.push(null);
		return arrList;
	}
	for(var i = left; i <= right; ++i){
		var leftList = helper(left, i - 1);
		var rightList = helper(i + 1, right);
		for(var j = 0; j < leftList.length; ++j){
			for(var k = 0; k < rightList.length; ++k){
				var treeRoot = new TreeNode(i);
				treeRoot.left = leftList[j];
				treeRoot.right = rightList[k];
				arrList.push(treeRoot);
			}
		}
	}
	return arrList;
}