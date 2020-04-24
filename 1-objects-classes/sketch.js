var mode = 0

function setup() {
  createCanvas(1000, 800);
}

function draw() {
  if (mode == 0) {
    screen1();
  } else if (mode == 1) {
    screen2();
  } else if (mode == 2) {
    screen3();
  }

}
//Useful to have multiple elements on one screen
function screen1() {
  background("red");
    textSize(40);
    text("Click Your Mouse on the Circle to Start the Game",60,200);
    textSize(30);
    text("The Impossible IQ Game by Annie Hockin and Kyler Miyashita",100,650)
  fill("yellow");
  strokeWeight(3)
  stroke("green");
  ellipse(width / 2, height / 2, 300, 300);
}

function screen2() {
  background("blue");
  noStroke();
  textSize(80);
  fill("black");
  text("45",450, 630);
  text("30",250, 630);
  text("60",650, 630);
  textSize(50);
  fill("black");
  text("Click on the right answer.",230,500)
  fill("yellow")
  triangle(300,200,300,400,700,400);
  rect(300,379,20,20);
  fill("black")
  fill("blue")
  strokeWeight(5);
  stroke("black")
  ellipse(560,580,20,20)
  ellipse(360,580,20,20)
  ellipse(760,580,20,20)
  noStroke();
  fill("black")
  textSize(40);
  text("Find X",450,150)
  textSize(20)
  text("x",310,230)
  text("y",640,390)
}

function screen3() {

}


//Method 1: More flexible, any order
function mousePressed() {
  if (mode == 0) {
    mode = 1;
  } else if (mode == 1) {
    mode = 2;
  } else if (mode == 2) {
    mode = 0;
  }
}
