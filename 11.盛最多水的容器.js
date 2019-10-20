/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l=0,r=height.length-1;
    let contain=0;
    while(l<r){
        contain=Math.max(contain,Math.min(height[l],height[r])*(r-l))
        if(height[l]<height[r])
            l++;
        else
            r--;
    }
    return contain;
};

