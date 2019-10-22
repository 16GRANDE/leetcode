/*
 * @lc app=leetcode.cn id=1189 lang=javascript
 *
 * [1189] “气球” 的最大数量
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    if(text.length <7)
        return 0;
    let tmp = new Map();
    let result =Infinity;
    let balloon="balon";
    for(let i=0;i<text.length;i++){
        if(balloon.includes(text.charAt(i))){
            if(tmp.has(text.charAt(i)))
                tmp.set(text.charAt(i),tmp.get(text.charAt(i))+1)
            else
                tmp.set(text.charAt(i),1)
        }
    }
    if(tmp.size<5)
        return 0;
    for(let i=0;i<5;i++){
        if(balloon.charAt(i)==="l"||balloon.charAt(i)==="o")
            result = Math.min(result,Math.floor(tmp.get(balloon.charAt(i))/2))
        else
            result = Math.min(result,tmp.get(balloon.charAt(i)))
     }
    return result;
};
// @lc code=end

