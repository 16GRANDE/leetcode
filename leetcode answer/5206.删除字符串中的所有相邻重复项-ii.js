/*
 * @lc app=leetcode.cn id=5206 lang=javascript
 *
 * [5206] 删除字符串中的所有相邻重复项 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let tmp=s
    while(true){
    let ans=[]
    let time=0
    for(let i=0;i<tmp.length;i++){
        if(ans.length===0){
            ans.push(tmp.charAt(i))
            time++
        }else if(ans[ans.length-1]===tmp.charAt(i)){
            ans.push(tmp.charAt(i))
            time++
        }else if(ans[ans.length-1]!=tmp.charAt(i)){
            ans.push(tmp.charAt(i))
            time=1
        }
        
        if(time===k){
            for(let i=0;i<k;i++){
                ans.pop()
            }
        }
    }
    if(tmp.length===ans.length)
        return tmp
    tmp=ans.join("")
    }
};
// @lc code=end

