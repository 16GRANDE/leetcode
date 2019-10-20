/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var temp=x.toString().split("");
    let bf=0,la=temp.length-1;
    for(let i=0;i<temp.length;i++){
        if(temp[bf]!=temp[la])
            return false;
        bf++;
        la--;
    }
    return true;
};

