/*  DXB211 A2 Brief: Creative coding project, mini game

    Group: Jessie Ting Hsuan Su
    
    Sketch by: Ting Hsuan Su N10162453
    
    
    About: This code will let the player catches snowflake with their mouse moving. It is the game designed for young children around 6-10 years old based on the popular movie “Frozen”. And the aim is to promtoe the movie thorhg this game. 
    
    FAVPNG. April, 2019. Olaf image. [image]. Retrieved from https://favpng.com/png_view/olaf-snowman-face-olaf-gif-frozen-elsa-anna-png/B7eAe2Lx

    Pinterest. 2019. Frozen wallpaper. [image]. Retrieved from https://www.pinterest.com.au/pin/336292297149555271/
    Pinterest. 2017. Snowflake. [image]. Retrieved from https://www.pinterest.com.au/pin/493636809153842920/
    
    Ashamaluevmusic. N.d. Kids. [music]. Retrieved from  https://www.ashamaluevmusic.com/happy-music
    
    Free song clip bites effect. N.d. Button click sound. [music]. Retrieved from file:///Users/jessie/Desktop/Button%20Click%20Off%20Sounds%20%7C%20Effects%20%7C%20Sound%20Bites%20%7C%20Sound%20Clips%20from%20SoundBible.com.webarchive


*/
let screen = 0;
let y = -20;
let x = 200;
let speed = 2;
let score = 0;
let snowflake;
let olaf;
let bg;
let gameover;
let music;
let fade;
let fadeAmount = 1;
let catchingsound;

function preload() {
	soundFormats('mp3', 'ogg');
	snowflake = loadImage('data/snowflake.png');
	olaf = loadImage('data/olaf.png');
	bg = loadImage('data/bg.jpg');
	//gameover = loadImage('data/ olafbye.jpg');

	catchingsound = loadSound('Button Click Off.mp3');
	music = loadSound('data/kid.mp3');
}

function setup() {
	createCanvas(600, 400);
	//music. play();

	addSnowflakes(10);
}

function draw() {
	if (screen == 0) {
		startScreen();
	} else if (screen == 1) {
		gameOn();
	} else if (screen == 2) {
		endScreen();
	}
}

function startScreen() {
	catchingsound.pause();
	background(0);
	image(bg, 0, 0, 600, 400);
	imageMode(CORNER);
	fill(255);

	textAlign(CENTER);
	textSize(35);
	text('Frozen- Snowflake challenge', width / 2, height / 2);
	text('click to start', width / 2, height / 2 + 30);
	reset();
	//if (fade<0) fadeAmount=1;
	//if (fade>255) fadeAmount=-10;

	// fade += fadeAmount;
	//print(fade)
}

function gameOn() {
	imageMode(CENTER);
	catchingsound.setVolume(0.1);
	image(bg, width / 2, height / 2, 600, 500);
	textSize(15);

	text('score = ' + score, 50, 20);
	rectMode(CENTER);

	image(olaf, mouseX, height - 50, 70, 100);

	image(snowflake, x, y, 60, 50);

	//when catching more iceball, the falling speed goes up
	y += speed;
	if (y > height) {
		screen = 2;
		catchingsound.stop();
	}
	if (y > height - 50 && x > mouseX - 35 && x < mouseX + 35) {
		y = -20;
		speed += 0.5;
		score += 1;
		if (!music.isPlaying()) {
			music.play();
			catchingsound.play();
		}
	}
	if (y == -20) {
		pickRandom();
	}
}

function pickRandom() {
	x = random(20, width - 20);
}

let snowflakes = [];

function endScreen() {
	background(0, 10, 150);
	textAlign(CENTER);
	textSize(25);
	fill(25);
	text('GAME OVER', width / 2, height / 2);
	text('SCORE = ' + score, width / 2, height / 2 + 20);
	text('click to play again', width / 2, height / 2 + 40);

	//snowflake falling effect at the end
	for (let snowflake of snowflakes) {
		snowflake.show();
		snowflake.update();
	}

	addSnowflakes(10);
}

function addSnowflakes(num) {
	for (let count = 0; count < num; count++) {
		let tempSnowflake = new Snowflake(
			random(width),
			-10 + random(20),
			random(0.5, 5)
		);
		snowflakes.push(tempSnowflake);
	}
}

class Snowflake {
	constructor(x, y, speed) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.falling = true;
	}

	update() {
		if (this.falling) {
			// this.x += 10*sin(this.y/10);
			this.y += this.speed;
			if (this.y > height - random(10)) {
				this.falling = false;
			}
		}
	}

	show() {
		noStroke();
		fill(255, 150);
		ellipse(this.x, this.y, 10);
	}
}

function mousePressed() {
	if (screen == 0) {
		screen = 1;
		catchingsound.loop();
		catchingsound.play();
	} else if (screen == 2) {
		screen = 0;
	}
}

function reset() {
	score = 0;
	speed = 2;
	y = -20;
}
