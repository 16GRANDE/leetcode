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

<<<<<<< HEAD


console.log(5>>1)

var minRemoveToMakeValid = function(s) {
  const t=[]
  const t1=[]
  
  for(let i=0;i<s.length;i++){
      
      if(s[i]===")"&&t[t.length-1]==="("){
          t.pop()
          t1.pop()
      }else if(s[i]==="("||s[i]===")"){
          t.push(s[i])
          t1.push(i)
      }
  }
  console.log(t1)
  let result=s.split("")
  for(let i=0;i<t1.length;i++){
      result.splice(t1[i],1)
      console.log(result)
  }
  
  return result.join("")
};

let r="))(("
minRemoveToMakeValid(r)

let s="jaflkjaslkf"
let tmp=s.split("")
tmp[3]=""
console.log(tmp.join(""))
=======
console.log(parseInt(5/2))


let n=2
n /= 2
console.log(n)

var isPowerOfTwo = function(n) {
  console.log(n&1)
  console.log(n)
  while(n&1===0){
     
      n /= 2
      
  }
  console.log(n)
  return n===1
};

isPowerOfTwo(2)
>>>>>>> 10be706ae1a9525e181f76768b6537725f7c1818
