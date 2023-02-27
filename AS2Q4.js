function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
}

function draw() {
  background("orangered");

  //first square
  fill("orange");
  mySquares(0, 0, 200);
  //second square
  fill("white");
  mySquares(200, 0, 200);
  //third square
  fill("green");
  mySquares(400, 0, 200);

  //star
  fill("white");
  strokeWeight(0);
  translate(99, 90);
  rotate(180);
  //first point
  triangle(0, 50, 20, 0, -20, 0);
  //second point
  rotate(72);
  triangle(0, 50, 20, 0, -20, 0);
  //third point
  rotate(72);
  triangle(0, 50, 20, 0, -20, 0);
  //fourth point
  rotate(72);
  triangle(0, 50, 20, 0, -20, 0);
  //fifth point
  rotate(72);
  triangle(0, 50, 20, 0, -20, 0);

  //top right star
  fill("mediumpurple");
  noStroke();
  strokeWeight(0);
  translate(-80, -50);
  //first point
  triangle(0, 25, 10, 0, -10, 0);
  //second little point
  rotate(72);
  triangle(0, 25, 10, 0, -10, 0);
  //third point little
  triangle(0, 25, 10, 0, -10, 0);
  rotate(72);
  //fourth
  triangle(0, 25, 10, 0, -10, 0);
  rotate(72);
  //fifth point
  triangle(0, 25, 10, 0, -10, 0);
  rotate(72);
  triangle(0, 25, 10, 0, -10, 0);
  rotate(72);

  //bottom right star
  fill("mediumpurple");
  noStroke();
  strokeWeight(0);
  translate(130, -46);
  //first point
  triangle(0, 25, 10, 0, -10, 0);
  //second little point
  rotate(72);
  triangle(0, 25, 10, 0, -10, 0);
  //third point little
  triangle(0, 25, 10, 0, -10, 0);
  rotate(72);
  //fourth
  triangle(0, 25, 10, 0, -10, 0);
  rotate(72);
  //fifth point
  triangle(0, 25, 10, 0, -10, 0);
  rotate(72);
  triangle(0, 25, 10, 0, -10, 0);
  rotate(72);

  //bottom left star
  fill("mediumpurple");
  noStroke();
  strokeWeight(0);
  translate(45, 135);
  //first point
  triangle(0, 25, 10, 0, -10, 0);
  //second little point
  rotate(72);
  triangle(0, 25, 10, 0, -10, 0);
  //third point little
  triangle(0, 25, 10, 0, -10, 0);
  rotate(72);
  //fourth
  triangle(0, 25, 10, 0, -10, 0);
  rotate(72);
  //fifth point
  triangle(0, 25, 10, 0, -10, 0);
  rotate(72);
  triangle(0, 25, 10, 0, -10, 0);
  rotate(72);

  //top left star
  fill("mediumpurple");
  noStroke();
  strokeWeight(0);
  translate(-130, 48);
  //first point
  triangle(0, 25, 10, 0, -10, 0);
  //second little point
  rotate(72);
  triangle(0, 25, 10, 0, -10, 0);
  //third point little
  triangle(0, 25, 10, 0, -10, 0);
  rotate(72);
  //fourth
  triangle(0, 25, 10, 0, -10, 0);
  rotate(72);
  //fifth point
  triangle(0, 25, 10, 0, -10, 0);
  rotate(72);
  triangle(0, 25, 10, 0, -10, 0);
  rotate(72);
}

function mySquares(x, y, size) {
  //first square
  noStroke();
  square(x, y, size);
}
