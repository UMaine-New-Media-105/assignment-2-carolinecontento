function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("lightpink");
  //first heart
  heartA(0, 0, 1);
  //second heart
  heartA(0, 0, 0.5);
  //third heart
  heartA(45, -10, 1.3);
}

function heartA(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  noStroke();
  beginShape();
  translate(-20, 30);
  noStroke();
  fill("red");
  vertex(100, 0);
  //vertex(300, 5);
  vertex(200, 100);
  vertex(300, 0);
  //vertex(300, 140);
  // vertex(380, 200);
  vertex(200, 300);
  endShape();
  pop();
}
