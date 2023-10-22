/*
// Set up canvas
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

// Define ball properties
const ballRadius = 8;
const ballColor = '#FF0000';

// Define pendulum properties
const pendulumLength = 50;
const pendulumAngle = 0;

// Calculate the x and y coordinates of the ball depending on the pendulum angle
let ballX = pendulumLength*Math.cos(pendulumAngle);
let ballY = pendulumLength*Math.sin(pendulumAngle);

// Draw the ball
function drawBall() {
	ctx.beginPath();
	ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = ballColor;
	ctx.fill();
	ctx.closePath();
}

// Simulate the movement of the pendulum
function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	drawBall();

	pendulumAngle += Math.PI
	*/
