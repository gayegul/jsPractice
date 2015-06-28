function fibbonachi(num) {
  if(num === 0 || num === 1) {
    return 1;
  }
  var result = fibbonachi(num - 1) + fibbonachi(num - 2);
  return result;
}
