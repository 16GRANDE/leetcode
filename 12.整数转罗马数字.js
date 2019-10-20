/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var str=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var value=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var res="";
    for(let i=0;i<str.length;i++){
        while(num>=value[i]){
            num -=value[i];
            res +=str[i];
        }
    }
    return res;
};

