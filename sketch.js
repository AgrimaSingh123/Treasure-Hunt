var bg,bg2,form,code,security,correct,win;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2=loadImage("treasure.jpg");

  correct=loadSound("sounds/correct.wav");
  win=loadSound("sounds/win.wav");
}

function setup() {
  createCanvas(1000,500);
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  // Add code to display score in the middle of the screen
  textSize(20);
  fill("white");
  text("Correct Attempts : "+score,width/2,50);

  // Add code to display the end screen
  if(score===3){
    background(bg2);
    textSize(30);
    fill("white");
    text("TREASURE UNLOCKED!",width/2-200,height/2);
    win.play();
  }

  drawSprites()
}