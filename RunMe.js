function setup() {
  createCanvas(550, 550, WEBGL);
  describe('a white box rotating in 3D space');
}

function draw() {
  background('rgba(0,255,150, 0.25)');
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.04);
  let c = color(175, 100, 150);
  let blueValue = blue(c);
  fill(0, 0, blueValue);
  stroke('red');
  strokeWeight(2);
  box(100);
}