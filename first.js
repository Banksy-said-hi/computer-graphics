function setup() {
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  // Setting the background color
  background(50);
  
  // Rotating the object 60 degress around X axis
  rotateX(60);
  
  noFill()
  stroke(255)
  
  // For loops for creating 50 circles
  for (var i=1; i < 50; i++) {
    
    // Coloring the circles which I commented out 
    // because I think black and white is cooler
//     var r = map(sin(frameCount/2), -1, 1, 100, 200)
//     var g = map(i, 0, 50, 100, 200)
//     var b = map(cos(frameCount), -1, 1, 200, 100)
//     stroke(r, g, b)
    
    // Rotating the object based on 
    // the division of a built in variable 
    // This could modify pace of rotation
    rotate(frameCount/5)

    beginShape()
    
    // for loop in which we determine
    // how many corners our shape must have
    for (var j=0; j < 360; j+=30) {
      // Setting radius of the object
      var rad = i * 6
      
      var x = rad * cos(j)
      var y = rad * sin(j)
      
      // Setting height of the object
      var z = sin(frameCount * 2 + i * 5) * 80
      vertex(x,y,z)
    }
    endShape(CLOSE)
  }
}
