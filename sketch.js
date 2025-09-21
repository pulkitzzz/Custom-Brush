function setup () {
  createCanvas (900,900)
  strokeWeight (5)
colorMode(HSB)
  
}

function mouseDragged () {
 rect (pmouseX,pmouseY,mouseX,mouseY)
}