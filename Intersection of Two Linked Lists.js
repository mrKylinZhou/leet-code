/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var p = headA;
    var q = headB;
    if(!p || !q){
        return null;
    }
    while(p !== q){
        p = p.next;
        q = q.next;
        if(!p && q){
            p = headB;
        }
        if(!q && p){
            q = headA;
        }
   }
   return p;
};