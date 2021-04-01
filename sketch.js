var ball, goal;
var wall1, wall2, wall3, wall4;
var defender1, defender2, defender3, defender4, defender5, defender6, defender7;
var world;
var sprite;
var score = 0;

function preload(){
	backgroundImg = loadImage("images/soccerfield.png");
    ballImg = loadImage("images/soccerball.png");
	defenderImg = loadImage("images/soccerdefender.png");
	goalImg = loadImage("images/soccergoal.png");

	winSound = loadSound("sounds/winsound.wav");
	loseSound = loadSound("sounds/losesound.wav");
}

function setup(){
  	createCanvas(windowWidth - 80, windowHeight*3);

	//for the barriers
	wall1 = createSprite(0 ,0, windowWidth*2, 20);
	wall2 = createSprite(windowWidth/2, windowHeight*3, windowWidth*4, 20);
	wall3 = createSprite(0, 0, 20, windowHeight*8);
	wall4 = createSprite(windowWidth - 80, 0, 20, windowHeight*8);

	ball = createSprite(windowWidth/2 - 45, windowHeight*3 - 400, 100, 50);
	ball.addImage(ballImg)
	ball.scale = 0.13;

	goal = createSprite(windowWidth/2 - 40, 130, 300, 250);
	goal.addImage(goalImg);
	goal.scale = 0.5;
	goal.setCollider("rectangle",0,0,300,120)
	//goal.debug = true;

	//sprites for the defenders
	defender1 = createSprite(windowWidth/2 - 45,2000,300,270);
	defender1.addImage(defenderImg);
	defender1.scale = 0.55;
	defender1.setCollider("rectangle",0,0,270,550)

	defender2 = createSprite(windowWidth/2 - 45,1650,300,270);
	defender2.addImage(defenderImg);
	defender2.scale = 0.55;
	defender2.setCollider("rectangle",0,0,270,550)

	defender3 = createSprite(windowWidth/2 - 45,1300,300,270);
	defender3.addImage(defenderImg);
	defender3.scale = 0.55;
	defender3.setCollider("rectangle",0,0,270,550)

	defender4 = createSprite(windowWidth/2 - 45,950,300,270);
	defender4.addImage(defenderImg);
	defender4.scale = 0.55;
	defender4.setCollider("rectangle",0,0,270,550)

	defender5 = createSprite(windowWidth/2 - 45,600,300,270);
	defender5.addImage(defenderImg);
	defender5.scale = 0.55;
	defender5.setCollider("rectangle",0,0,270,550)

	defender1.velocityX = 13;
	defender1.velocityY = -10;
	defender2.velocityX = -14;
	defender2.velocityY = 12;
	defender3.velocityX = 15;
	defender3.velocityY = -12;
	defender4.velocityX = -11;
	defender4.velocityY = 14;
	defender5.velocityX = 16;
	defender5.velocityY = -9;

}

function draw(){
	background(backgroundImg);  

	fill("yellow")
	textSize(55);
	text("GOAL",840,60);
	textSize(36);
	text("Don't touch the defenders!",710,2360);
	//textSize(40);
	//text("Score: " + score, 160,100);

	//to move the ball
	if(keyIsDown(UP_ARROW)){
		ball.velocityY = -7;
	}
	if(keyIsDown(DOWN_ARROW)){
		ball.velocityY = 7;
	}
	if(keyIsDown(RIGHT_ARROW)){
		ball.velocityX = 7;
	}
	if(keyIsDown(LEFT_ARROW)){
		ball.velocityX = -7;
	}

	//to increase the score when the player scores
	if(ball.isTouching(goal)){
		winSound.play();
		textSize(105);
		text("You Scored!!!", 620,400);	
		text("You Win!!!!!", 670,520);
		textSize(25)
		text("Refresh the page to start over", 740,560)	
		ball.velocityX = 0;
		ball.velocityY = 0;
		defender1.velocityX = 0;
		defender2.velocityX = 0;
		defender3.velocityX = 0;
		defender4.velocityX = 0;
		defender5.velocityX = 0;
		defender1.velocityY = 0;
		defender2.velocityY = 0;
		defender3.velocityY = 0;
		defender4.velocityY = 0;
		defender5.velocityY = 0;
	}

	//to reset the ball when it touches the defender 
	if(ball.isTouching(defender1) || ball.isTouching(defender2) || ball.isTouching(defender3) || ball.isTouching(defender4) || ball.isTouching(defender5)){
		loseSound.play()
		//ball.x = windowWidth/2 - 45;
		//ball.y = windowHeight*3 - 400;
		textSize(85);
		text("You LOSE!!!", 680,400);
		text("You LOSE!!!", 680,700);
		text("You LOSE!!!", 680,1000);
		text("You LOSE!!!", 680,1300);
		text("You LOSE!!!", 680,1600);
		text("You LOSE!!!", 680,1900);
		text("You LOSE!!!", 680,2200);
		ball.velocityX = 0;
		ball.velocityY = 0;
		defender1.velocityX = 0;
		defender2.velocityX = 0;
		defender3.velocityX = 0;
		defender4.velocityX = 0;
		defender5.velocityX = 0;
		defender1.velocityY = 0;
		defender2.velocityY = 0;
		defender3.velocityY = 0;
		defender4.velocityY = 0;
		defender5.velocityY = 0;
	}

	ball.bounceOff(wall1);
	ball.bounceOff(wall2);
	ball.bounceOff(wall3);
	ball.bounceOff(wall4);

	defender1.bounceOff(wall1);
	defender1.bounceOff(wall2);
	defender1.bounceOff(wall3);
	defender1.bounceOff(wall4);

	defender2.bounceOff(wall1);
	defender2.bounceOff(wall2);
	defender2.bounceOff(wall3);
	defender2.bounceOff(wall4);

	defender3.bounceOff(wall1);
	defender3.bounceOff(wall2);
	defender3.bounceOff(wall3);
	defender3.bounceOff(wall4);

	defender4.bounceOff(wall1);
	defender4.bounceOff(wall2);
	defender4.bounceOff(wall3);
	defender4.bounceOff(wall4);

	defender5.bounceOff(wall1);
	defender5.bounceOff(wall2);
	defender5.bounceOff(wall3);
	defender5.bounceOff(wall4);


  	drawSprites(); 
}
