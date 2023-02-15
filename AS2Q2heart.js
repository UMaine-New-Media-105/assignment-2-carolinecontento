function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("lightpink");

  beginShape();
  translate(-20, 30);
  noStroke();
  fill("purple");
  vertex(100, 0);
  //vertex(300, 5);
  vertex(200, 100);
  vertex(300, 0);
  //vertex(300, 140);
  // vertex(380, 200);
  vertex(200, 300);
  endShape();
}
