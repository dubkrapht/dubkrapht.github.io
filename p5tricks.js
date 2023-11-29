let sprayRadius = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(10);
  stroke(0);
}

function draw() {
  if (mouseIsPressed) {
    for (let i = 0; i < 10; i++) {
      let offsetX = random(-sprayRadius, sprayRadius);
      let offsetY = random(-sprayRadius, sprayRadius);
      ellipse(mouseX + offsetX, mouseY + offsetY, 2, 2);
    }
  }
}