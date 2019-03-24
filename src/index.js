module.exports = function check(str, bracketsConfig) {
  if (typeof str !== 'string') {
    alert('Данные не ввиде строки!');
  }

  var result = [];

  //  перебор скобок
  for (var i =0; i < str.length; i++) {
    if (str[i] == '(' || str[i] == '{' || str[i] == '[') {
      result.push(str[i]);
    }
    else if (str[i] == ')') {
      if (result.pop() != '(') {
        return false;
      }
    }
    else if (str[i] == '}') {
      if (result.pop() != '{') {
        return false;
      }
    }
    else if (str[i] == ']') {
      if (result.pop() != '[') {
        return false;
      }
    }
  }

  return true;

  //  проверка баланса правильной последовательности
  // counter = 0;
  // for (var i = 0; i < str.length; i++) {
  //   if (str[i] == '(') {
  //     counter++;
  //   } else {
  //     counter--;
  //   }
  // }
  
  // if (counter < 0) {
  //   return false;
  // }
  // return counter == 0;
}
