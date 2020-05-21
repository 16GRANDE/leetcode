/*
 * @Author: your name
 * @Date: 2020-05-22 01:18:53
 * @LastEditTime: 2020-05-22 01:23:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\手写代码\promise.race.js
 */

Promise.tsetRace = function (iterators) {
  const promise = Array.from(iterators);

  return new Promise((resolve, reject) => {
    promise.forEach((promise, index) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
};
