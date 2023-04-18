function setup() {
    console.log("🚀 - Setup initialized - P5 is running");
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER).noFill().frameRate(140);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    if (mouseIsPressed) {
        fill(0);
    }
    else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
    translate(width / 2, height / 2);
    rect(0, 0, 200, 200);
}
//# sourceMappingURL=build.js.map