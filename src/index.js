module.exports = function check(str, bracketsConfig) {
  counter = 0;  //баланс правильной последовательности
  for (var i = 0; i < str.length; i++) {
    if (str[i] == '(') {
      counter++;
    } else {
      counter--;
    }
  }
  
  if (counter < 0) {
    return false;
  }
  return counter == 0;
}
