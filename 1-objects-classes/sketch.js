let angle = 45;

function setup() {
 createCanvas(1000,800);
}

function draw(){
  background("blue");
  textSize(80);
  fill("black");
  text(+ angle,430, 600);
  textSize(32);
  fill("black");
  text("Press Up Arrow to add and Down Arrow to subtract.",100,500)
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    angle = angle+1;
  } else if (keyCode === DOWN_ARROW) {
    angle = angle-1;
  }
}
