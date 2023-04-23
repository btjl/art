function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  translate(width / 2, height / 2);
  circle(30, 30, 30);
}

// Add this to remove typescript reporting errors
// https://github.com/microsoft/TypeScript/issues/24925
export {};
