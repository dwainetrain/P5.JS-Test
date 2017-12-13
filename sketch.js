//start working in p5

function setup() {
  createCanvas(700,400)
  // put setup code here
}

function draw() {
  // put drawing code here

  if (mouseIsPressed) {
    fill(0);
  }else{
    fill(255);
  }

rect(mouseX, mouseY, 50,50);

}
