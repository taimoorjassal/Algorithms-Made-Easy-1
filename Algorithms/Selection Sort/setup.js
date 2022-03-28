function setup() {
  var a = window.innerWidth / 3.5;
  let cn;

  if (a > 400) {
    cn = createCanvas(400, 400);
    a = 400;
  } else {
    cn = createCanvas(a, a);
  }
  var x = 40;
  var y = 60;
  console.log(window.innerWidth)

  cn.position(x, y);

  var completed = false;

  for (let i = 0; i < width / 8; i++) {
    values.push(random(height));
    states.push(0);
  }
  startButton = createButton('Start');
  startButton.size(40, 25);
  startButton.style("background", "#fff");
  startButton.mousePressed(starts);

  resetButton = createButton('Shuffle');
  resetButton.size(60, 25);
  resetButton.style("background", "#fff");
  resetButton.mousePressed(reset);

  slider = createSlider(5, 100, 10);

  p = createP('Animation Speed');
  p.style("color", "#d1e8e2");

  startButton.position(x + 20, a + y + 10);
  resetButton.position(startButton.size().width + x + 80, a + y + 10);
  slider.position(x + 15, a + y + 40)
  p.position(x + 30 + slider.size().width, height + y + 35);
}
