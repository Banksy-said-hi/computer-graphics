function setup() {
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  // Setting the background color
  background(40);
  
  // Rotating the object 60 degress around X axis
  rotateX(70);
  
  noFill()
  stroke(255)
  
  for (var i=1; i < 50; i++) {
    var r = map(sin(frameCount/2), -1, 1, 100, 200)
    var g = map(i, 0, 50, 100, 200)
    var b = map(cos(frameCount), -1, 1, 200, 100)
    
    stroke(r, g, b)
    rotate(frameCount/9)

    beginShape()
    for (var j=0; j < 360; j+=40) {
      var rad = i * 4
      var x = rad * cos(j)
      var y = rad * sin(j)
      var z = sin(frameCount * 2 + i * 5) * 50
      vertex(x,y,z)
    }
    endShape(CLOSE)
  }
}