function setup() {
  createCanvas(500, 400);

function draw(){
	background(0);
  ellipse(100,200,50,50);
}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
        fill("yellow")
        stroke("red")
        strokeWeight(4)
        triangle(this.x,this.y+30,this.x-40,this.y+50,this.x+40,this.y+50)
    		stroke("green");
        strokeWeight(3);
    		fill("blue");
		    ellipse(this.x,this.y,50,90);
        fill("red")
        ellipse(this.x,this.y+20,20,20)
        ellipse(this.x,this.y-10,20,20)

	}

	moveMe(){
    if (keyIsDown(RIGHT_ARROW)) { //if you hold the up arrow, move up by speed
       this.x += 10;
    }

    if (keyIsDown(LEFT_ARROW)) { // if you hold the down arrow, move down by speed
        this.x -= 10;
    }

    if (keyIsDown(UP_ARROW)) { // if you hold the down arrow, move down by speed
        this.y -= 10;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += 10;
    }
	}

  die(){

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(1);
    	fill(0,255,124);
		  ellipse(this.x,this.y,40,40);
      fill(random(255),random(255),random(255))
      ellipse(this.x+10,this.y+10,8,8)
      ellipse(this.x-10,this.y+10,8,8)
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x;
		this.y = this.y- this.speed;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-25 && this.x <= me.x+25 && this.y > me.y-80 && this.y < me.y+30){
      			this.speed = -this.speed;
    		}
  	}

}
