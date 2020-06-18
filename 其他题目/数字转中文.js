/*
 * @Author: your name
 * @Date: 2020-06-18 16:17:39
 * @LastEditTime: 2020-06-18 21:16:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \guangfa\1.js
 */ 
function convert( number ) {
  let n={0:"零",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六",7:"七",8:"八",9:"九",10:"十",100:"百",1000:"千",10000:"万",1000000000:"亿"}
  let res=[],m=[1,10,100,1000,10000,1000000000]
  let num= parseInt(number)
  function cnt(count){
    let t=count
    for(let i=m.length-1;i>0;i--){
      if(t >= m[i]){
        let a=Math.floor(t/m[i])
        if(a>=10){
          cnt(a)
          res.push(n[m[i]])
        }else{
          res.push(n[a],n[m[i]])
        }
        t = t%m[i]
      }else if(res.length&&res[res.length-1]!=="零"){
        res.push("零")
      }
    }
    if(t>0) res.push(n[t])
  }
  cnt(num)
  return res.join("")
}