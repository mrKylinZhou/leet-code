/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
	var res = null;
	var tail = null;
	var l = head;
	var r = head ? head.next : null;
	while(l){
		if(r === null || l.val !== r.val){
			if(l.next === r){
				res = res ? res : l;
				if(tail){
					tail.next = l;
				}
				tail = l;
				tail.next = null;
			}
			l = r;
		}
		r = r ? r.next : null;
	}
	return res;
}