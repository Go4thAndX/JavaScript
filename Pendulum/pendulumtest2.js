/*
// Could you make the JS code for simulating a string of balls moving as if they were attached to a moving pendulum and simulate a picture of a red ball as the actual ball that is moving ?

// Create an array of balls
let balls = [1,2,3,4,5];

// Create a variable to hold the current position of the pendulum
let currentPos = 0;

// Create a loop to simulate the pendulum's movement
setInterval(function(){

  // Increment currentPos by one
  currentPos++;

  // Create an empty array to store the new ball positions
  let newPositions = [];

  // Iterate through each of the balls
  for (let i = 0; i < balls.length; i++) {

    // Calculate the new position of the ball, based on the current position of the pendulum
    let newPosition = i + (currentPos * 1/balls[i]);

    // Add the new position to the array of new positions
    newPositions.push(newPosition);
  }

  // Update the positions of the balls
  //balls = newPositions;

//}, 30); // Run the loop every 30ms

// Create a canvas for drawing
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Draw the balls on the canvas
setInterval(function(){
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Iterate through each of the balls
  for (let i = 0; i < balls.length; i++) {
    // Set the fill colour to red if this is the ball that is moving
    if (i === 0) {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = 'black';
    }

    // Draw the ball on the canvas
    ctx.beginPath();
    ctx.arc(balls[i] * 100, 50, 10, 0, 2 * Math.PI);
    ctx.fill();
  }
}, 30); // Run the loop every 30ms
*/
