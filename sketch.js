var i;
var countDistanceX = 0;
function preload()
{}

function setup() {
  createCanvas(9000, 668);

for(var i=0;i<6;i++){
    platform1=new Platform(countDistanceX);
    gap=random([0,0,0,100])
    countDistanceX=countDistanceX+platform1.rw+gap;
  }

}





function draw() {
  background('skyblue'); 
 drawSprites();
}

