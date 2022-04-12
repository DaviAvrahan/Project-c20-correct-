var bg,tom1,tom2,tom3,mouse1,mouse2,mouse3;
var tom,mouse;

function preload() {
    //load the images here
    bg = loadImage("garden.png");
    tom1 = loadAnimation("cat1.png");
    tom2 = loadAnimation("cat2.png","cat3.png");
    tom3 = loadAnimation("cat4.png");
    mouse1 = loadAnimation("mouse1.png");
    mouse2 = loadAnimation("mouse2.png","mouse3.png");
    mouse3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600);
    tom.addAnimation("tomdormindo",tom1);
    tom.scale = 0.2;
    mouse = createSprite(200,600);
    mouse.addAnimation("jerrylevantando",mouse1);
    mouse.scale = 0.2;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - mouse.x < (tom.width -mouse.width)/2){
        tom.velocityX = 0 ;
        tom.addAnimation("ultimotom",tom3);
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation("ultimotom");
        mouse.addAnimation("ultimomouse",mouse3);
        mouse.scale= 0.15;
        mouse.changeAnimation("ultimomouse");
        
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyDown ("LEFT_ARROW")){
        tom.velocityX = -5;
        tom.addAnimation("tomcorrendo",tom2);
        tom.changeAnimation("tomcorrendo");
        mouse.addAnimation("mouseprovocando",mouse2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseprovocando");
    }


}
