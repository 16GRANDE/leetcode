// 统计一个数字在排序数组中出现的次数

function findBoundary(nums, target, mode) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let mid = (right + left) >> 1;

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (mode === "left") {
      if (mid === 0 || nums[mid - 1] !== target) {
        return mid;
      }

      right = mid - 1;
    } else if (mode === "right") {
      if (mid === nums.length - 1 || nums[mid + 1] !== target) {
        return mid;
      }

      left = mid + 1;
    }
  }

  if (nums[left] === target) {
    return left;
  }

  return -1;
}


function getTotalTimes(nums,target){
    const length=nums.length
    if(!length){
        return 0
    }

    return (findBoundary(nums,target,"right")-findBoundary(nums,target,"left"))
}