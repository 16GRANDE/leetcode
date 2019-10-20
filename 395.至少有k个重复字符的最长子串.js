/*
 * @lc app=leetcode.cn id=395 lang=javascript
 *
 * [395] 至少有K个重复字符的最长子串
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    var res=0;
    function dg(str,k){
        if(str.length<k||str.length<res.length)
            return ;
        var arr=[...new Set(str)],
            sum=new Array(arr.length).fill(0);
        for(var i=0;i<str.length;i++){
            var index=arr.indexOf(str[i]);
            sum[index]+=1;
        }
        var strarr;
        for(var ii=0;ii<sum.length;ii++){
            if(sum[ii]<k){
                strarr=str.split(arr[ii]);
                break;
            }
        }
        if(strarr===undefined){
            if(res<str.length)
                res=str.length;
        }else{
            for(var i=0;i<strarr.length;i++){
                dg(strarr[i],k);
            }
        }
    }
    dg(s,k);
    return res;
};