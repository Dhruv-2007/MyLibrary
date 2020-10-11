function setup() {
  createCanvas(800,400);

  fixedrec = createSprite(200,200,20,20);
  movingrec = createSprite(100,100,20,20);
  fixedrec2 = createSprite(100,200,20,20);

  bounce1 = createSprite(100,150,20,20);
  bounce2 = createSprite(400,150,20,20);

  bounce1.velocityX = 3;
  bounce2.velocityX = -3;
}

function draw() {
  background(255,255,255);  

  movingrec.x = World.mouseX;
  movingrec.y = World.mouseY;

  bounce1.shapeColor = ("pink");
  bounce2.shapeColor = ("blue");
  fixedrec2.shapeColor = ("black");

  if(IsTouching(movingrec,fixedrec2)){
    fixedrec2.shapeColor = ("green");
    movingrec.shapeColor = ("green");
  } else {
    fixedrec2.shapeColor = ("pink")
    movingrec.shapeColor = ("blue");
  }

  Bounceoff(bounce1,bounce2);

  drawSprites();
}


