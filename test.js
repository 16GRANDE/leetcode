/*
 * @Author: your name
 * @Date: 2019-08-17 11:56:06
 * @LastEditTime: 2020-04-27 21:00:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\test.js
 */
// let str=new Array(5).fill(0)
// str[2]=6
// let n=str.indexOf(5)
// console.log(n)

// let s={2:[555,111]}
// s[3]=[1,33]
// let res=[]
// for(let [key ,value] of Object.entries(s)){
//     key=parseInt(key)
//     res.push([key,...value])
// }

// const g=[1,2,3,4,5,6].join("").split("")
// console.log(g)

// let m=new Map([[2,{3:6}]])
// console.log(m.get(2))

// let t={1:2}
// t[1]=3
// console.log(t)

var reverseList = function (head) {
  if (head === null || head.next === null)
    return head
  var cur = head
  var pre = null
  while (cur != null) {
    var next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

let j=[,]
console.log(0 in j)
console.log(typeof j[1])


//防抖
function debounce(fn){
  let timeout =null
  return function(){
    clearTimeout(timeout)
    timeout=setTimeout(()=>{
      fn.apply(this,arguments)
    },500)
    console.log(timeout,typeof timeout)
  }
}

function sayHi(){
  console.log('防抖成功')
}

let de = debounce(sayHi)
de()

var inp = document.getElementById('inp')
inp.addEventListener('input',debounce(sayHi))

//节流
function throttle(fn){
  let canRun = true
  return function(){
    if(!canRun) return
    canRun =false
    setTimeout(()=>{
      fn.apply(this,arguments)
      canRun = true
    },500)
  }
}

function sayHello(){
  console.log(e.target.innerWidth,e.target.innerHight)
}

window.addEventListener('resize',throttle(sayHello))

for(let i=0;i<5;++i){
  console.log(i)
}
