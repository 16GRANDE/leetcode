/*
 * @Author: your name
 * @Date: 2020-05-22 01:36:19
 * @LastEditTime: 2020-05-22 01:36:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\手写代码\promise.finally.js
 */ 
Promise.prototype.finally = function(cb) {
  return this.then(
      value => Promise.resolve(cb()).then(() => value),
      error =>
          Promise.resolve(cb()).then(() => {
              throw error;
          })
  );
};