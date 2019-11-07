var allow = function(a, c) {
  for (let i = 0; i < a.length; i++) {
      if (a[i][0] <= c[0] && a[i][2] >= c[0] && a[i][1] <= c[1] && a[i][3] >= c[1]) return false;
      if (a[i][0] <= c[0] && a[i][2] >= c[0] && a[i][1] <= c[3] && a[i][3] >= c[3]) return false;
      if (a[i][0] <= c[2] && a[i][2] >= c[2] && a[i][1] <= c[1] && a[i][3] >= c[1]) return false;
      if (a[i][0] <= c[2] && a[i][2] >= c[2] && a[i][1] <= c[3] && a[i][3] >= c[3]) return false;
      if (c[0] <= a[i][0] && c[2] >= a[i][0] && c[1] <= a[i][1] && c[3] >= a[i][1]) return false;
      if (c[0] <= a[i][0] && c[2] >= a[i][0] && c[1] <= a[i][3] && c[3] >= a[i][3]) return false;
      if (c[0] <= a[i][2] && c[2] >= a[i][2] && c[1] <= a[i][1] && c[3] >= a[i][1]) return false;
      if (c[0] <= a[i][2] && c[2] >= a[i][2] && c[1] <= a[i][3] && c[3] >= a[i][3]) return false;
  }
  return true;
}

var dfs = function(a, n, m, min) {
  if (min < 1) return min;
  let fI = -1;
  let fJ = -1;
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          if (allow(a, [i, j, i, j])) {
              fI = i;
              fJ = j;
              break;
          }
      }
      if (fI > -1) break;
  }
  if (fI < 0) return 0;
  const maxK = Math.min(n - fI, m - fJ);
  let tMin = min;
  for (let k = maxK - 1; k >= 0 ; k--) {
      if (!allow(a, [fI, fJ, fI + k, fJ + k])) continue;
      a.push([fI, fJ, fI + k, fJ + k]);
      tMin = dfs(a, n, m, tMin - 1) + 1;
      a.splice(a.length - 1,1);
  }
  return tMin;
}

var tilingRectangle = function(n, m) {
  const a = [];
  return dfs(a, n, m, 170);
};

console.log(parseInt(5/2))


let n=2
n /= 2
console.log(n)

