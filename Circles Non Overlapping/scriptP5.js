var circles = []

function setup() {
    createCanvas(640, 360);

    // Let op dat de while loop niet in een oneindige lus tercht komt
    while (circles.length < 25) {
    // for (var i = 0; i < 50; i++) {

        var circle = {
            x: random(width),
            y: random(height),
            r: 32
        };
        
        var overlapping = false;
        for (var j = 0; j < circles.length; j++){
            var other = circles[j];
            var d = dist(circle.x, circle.y, other.x, other.y);
            if (d < circle.r + other.r) {
                // Dan overlappen ze elkaar
                overlapping = true;
                break;
            }
        }
        if (! overlapping) {
            circles.push(circle);
        }
            
    }
    for (var i = 0; i < circles.length; i++) {
        fill(255, 0, 150, 100);
        noStroke();
        ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
    }
}


function draw() {

}