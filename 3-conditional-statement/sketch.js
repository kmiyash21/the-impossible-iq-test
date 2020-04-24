var mode = 0

function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background("red");
  rect(200,200,400,400);
  text("Click Your Mouse to Start the Game",500,200);
  text("The Impossible IQ Game by Annie Hockin and Kyler Miyashita",500,400)
}


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
  ellipse(width / 2, height / 2, 300, 300);
}

function screen2() {
  rect(50, 50, 300, 300);
}

function screen3() {
  line(0, 0, width, height);
  line(0, width, width, 0);
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

//Method 2: Can only go in order
// function mousePressed(){
//   mode=mode+1;
//   if (mode==3) {
//     mode=0;
//   }
//   print(mode);
// }
