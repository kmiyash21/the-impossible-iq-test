function setup() {
  createCanvas(1000,800);
  background("pink")

}

function draw(){
  textSize(30);
  fill("purple");
  text("When you overtake the runner in 2nd place, what place are you now in?",20,50,980,50);
  fill("yellow")
  noStroke();
rect(230,200,100,100);
rect(430,200,100,100);
rect(630,200,100,100);
textSize(30);
fill("black")
text("1st",260,260);
text("3rd",460,260);
textSize(23);
text("can't say",636,255);
noFill();
stroke("yellow");
strokeWeight(3);
rect(459,40,58,50);



}
