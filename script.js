var pos=[];
var posHead;
var rez=10;
var len=0;
var isMove;
var dirt = '';
var apple;

function setup() { 
	
 createCanvas(windowWidth, windowHeight);
   var x=random(500, 890)/10;
   var y=random(200, 590)/10;
   pos[0]= new Pos(500,200);
   apple=createVector(floor(x)*rez,floor(y)*rez);
   frameRate(10);
}

function Pos(x,y){
  this.x=x;
  this.y=y;
}
function draw() {
  background(0);
	stroke(255);
	noFill();
	  rect(500,200,400,400);
  // show
  show();
  update();
  move();
  out();
  //draw apple
  rect(apple.x,apple.y,rez,rez);
 
  //update
}

function move() {
	if (key=='a'){
		dirt='left';
    
  } else if (key=='d'){
  	 dirt='right';
    
  } else if (key=='s'){
  	 dirt='down';
  } else if (key=='w'){
  	dirt='up'; 
   } 
	if(dirt=='left'){
		pos[0].x+=-rez;
    	pos[0].y+=0;
	} else if (dirt=='right'){
		pos[0].x+=rez;
    	pos[0].y+=0;
	} else if (dirt=='up'){
		pos[0].x+=0;
    	pos[0].y+=-rez;
	} else if (dirt=='down') {
		 pos[0].x+=0;
   		 pos[0].y+=rez;
	}
}
function show() {
	//showHead
	for(var i of pos){
		if (i) {
			noStroke();
			fill(0,255,0);
			rect(i.x,i.y,rez,rez);	
		}
   	}
}
function update() {
	for(var i=0;i<pos.length-1;i++){
    	pos[i]=pos[i-1];
	}
}

function isMoveing(){
	if (key==' '){
		isMove=true;
	}
}
function out(){
	if (pos[0].x>890){
		pos[0].x=500;
	} else if (pos[0].x<500){
		pos[0].x=890;
	}
	if(pos[0].y>590){
		pos[0].y=200;
	} else if (pos[0].y<200){
		pos[0].y=590;
	}
}
