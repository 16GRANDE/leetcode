/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let root=new ListNode(0);
    let cursor=root;
    let carry=0;
    while(l1!=null||l2!=null||carry!=0){
        let l1val=l1!=null ? l1.val :0
        let l2val=l2!=null ? l2.val :0
        let sumval=l1val +l2val+carry
        carry=Math.floor(sumval/10)
        
        let sumNode=new ListNode(sumval%10)
        cursor.next=sumNode
        cursor=sumNode
        
        if(l1!=null) l1=l1.next
        if(l2!=null) l2=l2.next
    }
    
    return root.next
};
// @lc code=end

