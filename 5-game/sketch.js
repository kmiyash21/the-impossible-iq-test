let mode = 0

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
  } else if (mode == 3) {
    screen4();
  } else if (mode == 4) {
    screen5();
  } else if (mode == 5) {
    screen6();
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
strokeWeight(6);
	background(200,100,0);
  fill("blue")
  ellipse(300,400,150,150);
  ellipse(500,400,150,150);
  stroke("black");
  line(300,325,500,325);
  line(310,325,310,250);
  line(300,250,320,250);
  line(410,300,410,325);
  line(400,300,420,300);
  line(300,475,300,325);
  line(225,400,375,400);
  line(575,400,425,400);
  line(500,475,500,325);
  noStroke();
  textSize(40);
  text("Fix the bicylce with the wrench!",220,200);
  text("Click where the bicycle should be fixed!",130,550);
  stroke("black")
  line(680,450,680,400)
  line(690,450,690,400)
  line(680,450,690,450)
  noFill()
  arc(685,380,40,40,0,PI)
  arc(685,380,30,30,0,PI)
  line(664.5,379,669,379)
  line(700,379,704,379)
}

function screen4(){
  background("pink")
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
text("Can't say",636,255);
noFill();
}

function mousePressed() {
  if (mode == 0){
    mode = 1;
  } else if (mode == 1 && 305<mouseX && mouseX<325 && 210<mouseY && mouseY<230) {
    mode = 2;
  } else if (mode == 2 && 350<mouseX && mouseX<470 && 165<mouseY && mouseY<205) {
    mode = 3;
  }  else if (mode == 3 && 459<mouseX && mouseX<517 && 40<mouseY && mouseY<90){
    mode = 0
}
}
