let mode = 0;
let counter = 1;

function setup() {
  createCanvas(1000, 800);
}

function draw() {
  if (mode == 0) {
    screen1();
  } else if (mode == 1) {
    screen2();
    counter = 1;
  } else if (mode == 2) {
    screen3();
    counter = 2;
  } else if (mode == 3) {
    screen4();
    counter = 3;
  } else if (mode == 4) {
    screen5();
    counter = 4;
  } else if (mode == 5) {
    screen6();
    counter = 0;
  } else if (mode==6){
    screen7();
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
  textSize(40);
  text(counter,20,50);
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
background(200,100,0);
  fill("black");
  strokeWeight(2);
  textSize(40);
  text(counter,20,50);
  strokeWeight(6);
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
  fill("black");
  strokeWeight(2);
  textSize(40);
  text(counter,20,50);
  textSize(30);
  fill("purple");
  text("When you overtake the runner in 2nd place, what place are you now in?",20,100);
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

function screen5(){
  background("red");
  fill("black");
  strokeWeight(2);
  textSize(40);
  text(counter,20,50);
  noFill();
  strokeWeight(3);
  stroke("black");
  ellipse(400,350,250,250);
  textSize(30);
  text("12",385,260);
  text("1",445,270)
  text("2",477,310);
  text("3",490,360);
  text("4",480,405);
  text("5",445,440);
  text("6",395,455);
  text("7",350,440);
  text("8",305,405);
  text("9",290,355);
  text("10",300,310);
  text("11",335,270);
  rect(600,375,150,20);
  fill("black");
  triangle(650, 295, 650, 335, 720, 345);
  triangle(650, 295, 650, 335, 580, 345);
  ellipse(400,350,10,10);
  line(405,350,450,350);
  line(450,350,440,360);
  line(450,350,440,340);
  line(400,345,400,270);
  line(400,270,390,280);
  line(400,270,410,280);
  textSize(80);
  text("What time is it?",300,100);
  ellipse(650,275,40,40);
  ellipse(650,325,60,60);
  fill("red")
  ellipse(642,270,10,15);
  ellipse(658,270,10,15);
  ellipse(650,285,10,10);
  ellipse(650,325,30,30);
  line(640,353,640,375);
  line(660,353,660,375);
  rect(300,600,100,80);
  rect(510,600,100,80);
  rect(720,600,100,80);
  textSize(30);
  text("3 AM", 730,650);
  text("12:15", 520,650);
  text("3 PM", 310,650);
  line(700,275,780,230);
  line(780,230,770,250);
  line(780,230,760,224);
  textSize(30);
  text("Owl",800,235)
}

function screen6(){
  background("green");
  textSize(80);
  text("You win, Brainiac!",180,400);
  text("Congratulations!",210,520)
  text("Click to Play Again", 150,680);
}

function screen7(){
background("red");
noStroke();
fill("black");
textSize(60);
text("Game Over! Try again!",190,400)
text("Click Mouse to Start Over", 160,600)
}

function mousePressed() {
  if (mode == 0){
    mode = 1;
  } else if (mode == 1 && 305<mouseX && mouseX<325 && 210<mouseY && mouseY<230) {
    mode = 2;
  } else if (mode == 2 && 350<mouseX && mouseX<470 && 165<mouseY && mouseY<205) {
    mode = 3;
  }  else if (mode == 3 && 459<mouseX && mouseX<517 && 70<mouseY && mouseY<120){
    mode = 4
  } else if (mode == 4 && 720<mouseX && mouseX<820 && 600<mouseY && mouseY<680){
    mode = 5
  } else if (mode == 6){
    mode = 0
  } else if (mode == 5){
    mode = 0
  }else if (mode == 1 && mouseX<305){
    mode = 6
  } else if (mode == 1 && mouseX>325){
    mode = 6
  }else if (mode == 1 && mouseY>230){
    mode = 6
  }else if (mode == 1 && mouseY<210){
    mode = 6
  }else if (mode == 2 && mouseX<350){
    mode = 6
  }else if (mode == 2 && mouseX>470){
    mode = 6
  }else if (mode == 2 && mouseY<165){
    mode = 6
  }else if (mode == 2 && mouseY>205){
    mode = 6
  }else if (mode == 3 && mouseX<459){
    mode = 6
  }else if (mode == 3 && mouseX>517){
    mode = 6
  }else if (mode == 3 && mouseY<70){
    mode = 6
  }else if (mode == 3 && mouseY>120){
    mode = 6
  }else if (mode == 4 && mouseX>820){
    mode = 6
  }else if (mode == 4 && mouseX<720){
    mode = 6
  }else if (mode == 4 && mouseY<600){
    mode = 6
  }else if (mode == 4 && mouseY>680){
    mode = 6
  }
}
