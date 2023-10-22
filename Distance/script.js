// Syntax
// dist(x1, y1, x2, y2)
// dist(x1, y1, z1, x2, y2, z2)

// Parameters
// x1 Number: x-coordinate of the first point
// y1 Number: y-coordinate of the first point
// x2 Number: x-coordinate of the second point
// y2 Number: y-coordinate of the second point
// z1 Number: z-coordinate of the first point
// z2 Number: z-coordinate of the second point

// Move your mouse inside the canvas to see the
// change in distance between two points!
function setup() {
    createCanvas(600, 300);
}

function draw() {
    background(200);
    fill(0);

    let x1 = 10;
    let y1 = 90;
    let x2 = mouseX;
    let y2 = mouseY;

    line(x1, y1, x2, y2);
    ellipse(x1, y1, 7, 7);
    ellipse(x2, y2, 7, 7);

    // d is the length of the line
    // the distance from point 1 to point 2.
    let d = dist(x1, y1, x2, y2);

    // Let's write d along the line we are drawing!
    push();
    translate((x1 + x2) / 2, (y1 + y2) / 2);
    rotate(atan2(y2 - y1, x2 - x1));
    text(nfc(d, 1), 0, -5);
    pop();
    // Fancy!

    describe(`2 ellipses joined by line. 1 ellipse moves with
    mouse X&Y. Distance displayed.`);
}
