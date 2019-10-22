/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if(num>0){
        while(num%2===0){
            num/=2
        }
        while(num%3===0){
            num/=3
        }
        while(num%5===0){
            num/=5
        }
    }else{
        return false
    }
    return num===1
};




