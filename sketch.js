var bullet,wall,thickness,speed,weight



function setup() {
  createCanvas(1600,800);
  thickness = random(32,83)
  weight = random(30,53)
  speed = random(223,331)
  wall = createSprite(1200,400,30,500)
  bullet = createSprite(50,200,50,30)
  bullet.velocityX = speed;
    bullet.shapeColor=color(0);

}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness);
    
    if(damage>10)
    {
 wall.shapeColor=color(255,0,0);

    }



    if(damage<10)
    {
      wall.shapeColor = color(0,255,0)

    }
  }
}
function hasCollided(lbullet, lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true 
  }
  return false;
}