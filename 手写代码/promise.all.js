/*
 * @Author: your name
 * @Date: 2020-05-21 16:27:15
 * @LastEditTime: 2020-05-22 01:19:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\手写代码\promise.all.js
 */

Promise.testAll = function (iterators) {
  const promises = Array.from(iterators);
  const num = promises.length;
  const resolvedList = new Array(num);
  let resolvedNum = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          resolveList[index] = value;
          if (++resolvedNum === num){
            resolve(resolvedList);
          } 
        })
        .catch(reject);
    });
  });
};
