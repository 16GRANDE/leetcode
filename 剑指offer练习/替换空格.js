// 请实现一个函数，把字符串中的每个空格替换成"%20"。

// 例如输入“We are happy.”，则输出“We%20are%20happy.”。

function replaceEmpty(end) {
  const re = / /g;
  return String.replace(re, "%20"); //可以把/ /换成/s=>匹配任何空白字符
}

function replaceEmpty1(str) {
  str = str.split("");

  let count = 0,
    a = 0,
    b = 0;
  for (let i = 0; i < str.length; ++i) {
    str[i] === " " && ++count;
  }

  let length = str.length + count * 2;
  let result = new Array(length);

  while (a < result.length) {
    if (str[j] === " ") {
      result[i++] = "%";
      result[i++] = "2";
      result[i++] = "0";
    } else {
      result[i++] = str[j++];
    }
  }

  return result.join("");
}
