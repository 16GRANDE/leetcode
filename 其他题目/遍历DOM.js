/*
 * @Author: your name
 * @Date: 2020-04-26 21:08:38
 * @LastEditTime: 2020-04-28 10:14:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\其他题目\遍历DOM.js
 */

//广度优先遍历(BFS)
function DomBFS(element, callback) {
  var queue = []; //存放子节点的队列
  while (element) {
    callback(element);
    if (element.children.length !== 0) {
      for (var i = 0; i < element.children.length; i++) {
        queue.push(element.children[i]); //存放子节点
      }
    }
    element = queue.shift(); //取出第一项
  }
}

var arr = []; //存放标签名
var root = document.getElementById('root');
DomBFS(root, function (element) {
  arr.push(element.tagName);
});
console.log(arr);

//深度优先遍历
function DomDFS(element, callback) {
  var stack = []; //存放子节点的栈
  while (element) {
    callback(element);
    if (element.children.length !== 0) {
      for (var i = element.children.length - 1; i >= 0; i--) {
        //将最后的子节点先压进堆栈
        stack.push(element.children[i]);
      }
    }
    element = stack.pop();
  }
}

function DomDFS(element, callback) {
  callback(element);
  element = element.firstElementChild;
  while (element) {
    DomDFS(element, callback);
    element = element.nextElementSibling;
  }
}

//es6遍历
function* DomTraversal(element) {
  yield element;
  element = element.firstElementChild;
  while (element) {
    yield* DomTraversal(element);
    element = element.nextElementSibling;
  }

  var arr = [];
  var root = document.getElementById('root');
  for (let element of DomTraversal(root)) {
    arr.push(element.tagName);
  }
  console.log(arr);
}
