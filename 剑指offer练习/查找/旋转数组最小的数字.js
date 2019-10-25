// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

// 输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为 1。


function orderSearchMin(arr, left, right) {
  let min = arr[left];

  for (let i = left + 1; i <= right; ++i) {
    arr[i] < min && (min = arr[i]);
  }

  return min;
}

function binSearchMin(arr) {
  if (!Array.isArray() || !arr.length) {
    throw Error("Empty Array");
  }

  let left = 0,
    right = arr.length - 1,
    mid = null;

  while (left < right) {
    if (right == 1 + left) {
      return arr[right];
    }

    mid = Math.floor((left + right) / 2);

    if (arr[mid] === arr[left] && arr[mid] === arr[right]) {
      return orderSearchMin(arr, left, right);
    }

    if (arr[mid] >= arr[left]) {
      left = mid;
    } else if (arr[mid] <= arr[right]) {
      right = mid;
    }
  }

  return arr[right];
}
