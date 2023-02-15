function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(70);
  fill("pink");
  addSquares(0, 0, 80);
  addSquares(0, 80, 80);
  addSquares(0, 160, 80);
  addSquares(0, 240, 80);
  addLine(0,80,80)
  
  //fill for C
  fill("yellow");
  square(80, 0, 80);
  square(160, 0, 80);
  square(240, 0, 80);
  square(0, 80, 80);
  square(0, 160, 80);
  square(0, 240, 80);
  square(80, 320, 80);
  square(240, 320, 80);
  square(160, 320, 80);
  
}

function addSquares(x, y, size){
  rect(x, y, size); // column 1
  rect(x, y + 80, size); // column 2
  rect(x, y + 80 * 2, size); // column 3
  rect(x, y + 80 * 3, size);// column 4
  rect(x, y + 80 * 4, size); // column 5
  
  rect(x + 80, y, size); // row 2
  rect(x + 80 * 2, y, size); // row 3
  rect(x + 80 * 3, y, size);// row 4
  rect(x + 80 * 4, y, size); //row 5
 
}

function addLine(x, y, size){
  
  rect(x,320,80);
  rect( x + 80, 320, 80);
  rect( x + 160, 320, 80);
  rect( x + 240, 320, 80);
  rect( x + 320, 320, 80);
}


