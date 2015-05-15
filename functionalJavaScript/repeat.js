function repeat(operation, num) {
  var counter = 0;
  while(counter < num) {
    operation();
    counter++;
  }
}

module.exports = repeat;
