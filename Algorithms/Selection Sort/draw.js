function draw() {
  const fr = slider.value();
  
  frameRate(fr);
  background(225);
  simulateSorting(values);
  if (started) {
    if (i < values.length) {
      var temp;
      if (values[j] > values[j + 1]) {
        swap(values, j, j + 1);
        temp=j;
        states[temp]=1;
        states[temp+1]=1;
      }
      j++;
      if (j >= values.length - i - 1) {
        j = 0;
        i++;
      }
      states[values.length - i] = -1;
    } else {
      noLoop();
      completed(10);
    }
  }
}
