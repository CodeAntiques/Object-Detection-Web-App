img=""




function preload(){
  img=loadImage("dog_cat.jpg");
}

function draw(){
   image(img,0,0,640,460);
   fill(red,green,blue);
   text("Dog",120,80)
   noFill();
   stroke(red,green,blue);
   rect(110,60,200,390)

   fill(red,green,blue);
   text("Cat",339,80)
   noFill();
   stroke(red,green,blue);
   rect(320,60,200,360)
}

function setup(){
    canvas=createCanvas(640,460);
    canvas.center();

    red=Math.floor(Math.random()*256);
    green=Math.floor(Math.random()*256);
    blue=Math.floor(Math.random()*256);
}