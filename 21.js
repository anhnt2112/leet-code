/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    var dummy = new ListNode();
    var ans = dummy;
    while (list1 && list2) {
        if (list1.val > list2.val) {
            ans.next = list2;
            list2 = list2.next;
        } else {
            ans.next = list1;
            list1 = list1.next;
        }
        ans = ans.next;
    }

    ans.next = list1 || list2;
    return dummy.next;
};
