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
    let result = [];
    let p1 = typeof list1?.val == 'number' ? list1.val : null;
    let p2 = typeof list2?.val == 'number' ? list2.val : null;
    let node = null, obj;

    if (p1 == null) return list2;
    else if (p2 == null) return list1;

    while (
        typeof p1 == 'number' || 
        typeof p2 == 'number'
    ) {
        if (p1 < p2 && p1 != null) {
            result.push(p1);
            list1 = list1?.next;
            p1 = typeof list1?.val == 'number' ? list1.val : null;
        } else if (p2 < p1 && p2 != null) {
            result.push(p2);
            list2 = list2?.next;
            p2 = typeof list2?.val == 'number' ? list2.val : null;
        } else if (p1 == p2 && p1 != null && p2 != null) {
            result.push(p1);
            result.push(p2);
            list1 = list1?.next;
            list2 = list2?.next;
            p1 = typeof list1?.val == 'number' ? list1.val : null;
            p2 = typeof list2?.val == 'number' ? list2.val : null;
        } else if (p2 == null && p1 != null) {
            result.push(p1);
            list1 = list1?.next;
            p1 = typeof list1?.val == 'number' ? list1.val : null;
        } else if (p1 == null && p2 != null) {
            result.push(p2);
            list2 = list2?.next;
            p2 = typeof list2?.val == 'number' ? list2.val : null;
        }
    }

    for (i = result.length - 1; i >= 0; i--) {
        obj = new ListNode(result[i], node);
        node = obj
    }

    return obj;
};