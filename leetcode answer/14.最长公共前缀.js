/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort()
    if (strs.length === 0) return ''
	var first = strs[0],
		end = strs[strs.length - 1]
    if(end.startsWith(first)){
		return first
    }
	for(var i=0;i<first.length;i++){
		if(first[i] !== end[i]){
			return first.substring(0,i)
        }
	}
};
// @lc code=end

