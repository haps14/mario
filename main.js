/*noseX =0;
noseY = 0;
marioX = 325;
marioY = 325;
img = "";*/
       function preload() {
	   world_start = loadSound("world_start.wav");
	   mario_jump = loadSound("jump.wav");
	   mario_coin = loadSound("coin.wav");
	   mario_kick = loadSound("kick.wav");
	   mario_die = loadSound("maiodie.wav");
	   mario_gameOver = loadSound("gameover.wav");
	
	   img = loadImage("mario05.png");
	   setSprites();
	   MarioAnimation();

}

function setup() {                                                         
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);


     video = createCapture(VIDEO);
	 video.size(800,400);
      video.parent('game_console');

	
	 poseNet = ml5.poseNet(video,modelLoaded);
      poseNet.on('pose',gotPoses);
}

	

function draw() {
	game();
}

function modelLoaded()
{
    console.log('modelLoaded');


}

function gotPoses(results)
	{
        if(results.length > 0 )
		{
               noseX  = results[0].pose.nose.x;
			   noseY  = results[0].pose.nose.y;
			   console.log("noseX = " +noseX+ ", noseY +" + noseY  );
		}

	}







