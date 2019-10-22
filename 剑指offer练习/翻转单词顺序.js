// 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。

// 为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student."，则输出"student. a am I"

function reverseSentence(sentence) {
  const chars = sentence.split("").reverse();
  let result = "",
    last = [];
  chars.forEach(ch => {
    if (ch === " ") {
      result += last.reverse().join("");
      last.length = 0;
    }

    last.push(ch);
  });

  result += last.reverse.join("");
  return result;
}


