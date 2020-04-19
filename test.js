// let str=new Array(5).fill(0)
// str[2]=6
// let n=str.indexOf(5)
// console.log(n)

let s={2:[555,111]}
s[3]=[1,33]
let res=[]
for(let [key ,value] of Object.entries(s)){
    key=parseInt(key)
    res.push([key,...value])
}

const g=[1,2,3,4,5,6].join("").split("")
console.log(g)