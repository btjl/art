function setup() {
    console.log("🚀 - Setup initialized - P5 is running");
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER).noFill().frameRate(30);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    translate(width / 2, height / 2);
    rect(0, 0, 200, 200);
}
//# sourceMappingURL=build.js.map