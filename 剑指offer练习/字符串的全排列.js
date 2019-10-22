// 输入一个字符串，打印出该字符串中字符的所有排列。例如输入字符串 abc，
// 则打印出由字符 a、b、c 所能排列出来的所有字符串 abc、acb、bac、bca、cab 和 cba。

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function check(arr, start, end) {
  for (let i = start; i < end; ++i) {
    if (arr[end] === arr[i]) {
      return false;
    }
  }
  return true;
}

function perm(arr = [], n = 0) {
  const length = arr.length;
  if (length === n) {
    console.log(arr.join(" "));
    return;
  }

  for (let i = n; i < length; ++i) {
    if (check(arr, n, i)) {
      swap(arr, n, i);
      perm(arr, n + 1);
      swap(arr, n, i);
    }
  }
}
