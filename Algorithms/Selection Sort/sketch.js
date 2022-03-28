var values = [];
var states = [];

var i = 0;
var j = 0;

var started = false;

function starts() {
  started = true;
}

function reset() {
  location.reload();
}

function simulateSorting(arr) {
  r = random(255); // r is a random number between 0 - 255
  g = random(100, 200); // g is a random number betwen 100 - 200
  b = random(100); // b is a random number between 0 - 100
  a = random(200, 255);

  for (let i = 0; i < arr.length; i++) {
    if (states[i] === -1) {
      stroke(100, 143, 143);
      fill(5, 33, 57);
      rect(i * 8, height, 8, -values[i], 20);
    } else if (states === 1) {
      stroke(100, 143, 143);
      fill(50);
      rect(i * 8, height, 8, -values[i], 20);
    } else {
      stroke(100, 143, 143);
      fill(r, g, b, a);
      rect(i * 8, height, 8, -values[i], 20);
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function completed(wait) {
  for (let i = 0; i < values.length; i++) {
    await sleep(wait);
    stroke(17, 100, 102);
    fill(255, 203, 154);
    rect(i * 8, height, 8, -values[i], 20);
  }
}

async function asleep(wait){
  await sleep(wait);
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
