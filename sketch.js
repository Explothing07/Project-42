function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  
  translate(width/2,height/2);
  rotate(-90);

  let h = hour();
  let m = minute();
  let s = second();

  var myHour = map(h%12,0,12,0,360);
  var myMinute = map(m,0,60,0,360);
  var mySecond = map(s,0,60,0,360);

  push();
  rotate(myHour);
  stroke("green");
  strokeWeight(10);
  line(0,0,100,0);
  pop();

  push();
  rotate(myMinute);
  stroke("blue");
  strokeWeight(6);
  line(0,0,150,0);
  pop();

  push();
  rotate(mySecond);
  stroke("red");
  strokeWeight(2);
  line(0,0,250,0);
  pop();
  
  fill("black");
  ellipse(0,0,10,10);

  drawSprites();
}