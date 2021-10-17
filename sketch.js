var database;
var bgImg;
var gameState = 0;
var playerCount = 0;
var allPlayers;

var player, form, game;
var player1, player2;
var players = [];
var fruits;
var fruitsGroup;
var fruit1Img, fruit2Img, fruit3Img, fruit4Img, fruit5Img;
var playerImg;

function preload() {
	bgImg = loadImage('jungle.jpg');
	playerImg = loadImage('basket2.png');
	fruit1Img = loadImage('apple2.png');
	fruit2Img = loadImage('banana2.png');
	fruit3Img = loadImage('melon2.png');
	fruit4Img = loadImage('orange2.png');
	fruit5Img = loadImage('pineapple2.png');
	fruitsGroup = new Group();
}
function setup() {
	createCanvas(1000, 600);
	database = firebase.database();
	game = new Game();
	game.getState();
	game.start();
}

function draw() {
	background(bgImg);

	if (playerCount === 2) {
		game.update(1);
	}
	if (gameState === 1) {
		clear();
		game.play();
	}
	if (gameState === 2) {
		game.end();
	}
}
