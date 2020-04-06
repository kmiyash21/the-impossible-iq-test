
//create an empty array called balls

let balls = [];

function setup() {
  createCanvas(1200, 800);

}

function draw(){
	background(0,155,255);
  fill("green")
  rect(0,700,1200,100)

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
	  }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  let  b = new Ball(100, 100, 5, 2);
  balls.push(b);
  console.log(balls);
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y, speed,speed2){ //every ball needs an x value and a y value
		    this.x = random(1200);
    		this.y = random(700);
        this.speed = speed;
        this.speed2 = speed2;
	}

	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill("red");
		    ellipse(this.x,this.y,30,30);
        fill("white")
        ellipse(this.x+6,this.y-5,7,7);
        ellipse(this.x-6,this.y-5,7,7);
        fill("yellow");
        ellipse(this.x, this.y+5,10,7);
        fill("black");
        rect(this.x-15, this.y-20,30,10);
        rect(this.x-7, this.y-30,14,10);

	}
	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+this.speed;
		this.y = this.y+this.speed2;
    if (this.x >= 1200){
      this.speed= -this.speed;
    }
    if (this.y >= 700){
      this.speed2= -this.speed2;
    }
    if (this.x <= 0){
      this.speed= -this.speed;
    }
    if (this.y <= 0){
      this.speed2= -this.speed2;
    }
	}
}
