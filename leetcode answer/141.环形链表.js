/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head)
        return false;
    var slow=head;
    var fast=head;
    while(1){
          if(slow.next!=null)
            slow=slow.next;
          else return false;
          if(fast.next!=null&&fast.next.next!=null)
              fast=fast.next.next;
          else return false;
          if(slow==fast)
              return true;
          }
};
// @lc code=end

