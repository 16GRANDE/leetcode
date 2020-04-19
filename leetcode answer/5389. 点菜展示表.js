/**
 * 5389. 点菜展示表
给你一个数组 orders，表示客户在餐厅中完成的订单，确切地说， orders[i]=[customerNamei,tableNumberi,foodItemi] ，其中 customerNamei 是客户的姓名，tableNumberi 是客户所在餐桌的桌号，而 foodItemi 是客户点的餐品名称。

请你返回该餐厅的 点菜展示表 。在这张表中，表中第一行为标题，其第一列为餐桌桌号 “Table” ，后面每一列都是按字母顺序排列的餐品名称。接下来每一行中的项则表示每张餐桌订购的相应餐品数量，第一列应当填对应的桌号，后面依次填写下单的餐品数量。

注意：客户姓名不是点菜展示表的一部分。此外，表中的数据行应该按餐桌桌号升序排列。
 * 
 * 
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function(orders) {
  let food=[...new Set(orders.map(item=>item[2]))].sort()
  let s={}
  for(let i=0;i<orders.length;++i){
      const n=food.indexOf(orders[i][2])
      if(s[orders[i][1]]){
          s[orders[i][1]][n]++
      }else{
          s[orders[i][1]]=new Array(food.length).fill(0)
          s[orders[i][1]][n]++
      }
  }
  food.unshift("Table")
  let res=[food]
  for(let [key ,value] of Object.entries(s)){
      value=value.join("").split("")
      res.push([key,...value])
  }
  return res
};