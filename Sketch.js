function setup() {
  createCanvas(600, 600);
  background("white");
}

function draw() {
  stroke("midnightblue");
  fill("green");

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
