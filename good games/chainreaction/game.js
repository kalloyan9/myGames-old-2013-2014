//var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
  //      window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
var canvas = document.getElementById("canvas-id");

canvas.width = 500;
canvas.height = 600;
var context = canvas.getContext("2d");
///NE BARAITE REDOVETE NAGORE!
var camera={};
camera.x=0, camera.y=0;
var mishka={};
var me={};var bg=new Image();
bg.src='bg.png';
var score=25;
me.x=100,me.y=300;
var a,b,c;
var flag=new Object();

var a=[], b=[],c=[];
var bomb={};
bomb.br=100, bomb.x=[], bomb.y=[], bomb.must=32/4, bomb.died=0, bomb.speedX=[], bomb.speedY=[];
bomb.score=[];
bomb.cvet=[];
var dinamiti={};
dinamiti.br=0, dinamiti.x=[], dinamiti.y=[], dinamiti.jivot=[];
dinamiti.max=4;
var sec=0;
dinamiti.score=[];
dinamiti.slojeni=0;
bomb.grumnali=0;


for(var i=0;i<bomb.br-bomb.grumnali;i++){
	bomb.x[i]=Math.floor(Math.random()*canvas.width-40-100);
	bomb.y[i]=Math.floor(Math.random()*canvas.height-40);
	if(bomb.x[i]<=40){
		bomb.x[i]=50+Math.random()*canvas.width-70-100;
	}
	if(bomb.y[i]<=40){
		bomb.y[i]=50+Math.random()*canvas.height-70;
	}

	bomb.cvet[i]=Math.floor(Math.random()*6);
	switch(bomb.cvet[i]){
		case 0:
			bomb.cvet[i]='yellow';
			bomb.score[i]=20;
		break;
		case 1:
			bomb.cvet[i]='red';
			bomb.score[i]=10;

		break;
		case 2:
			bomb.cvet[i]='gray';
			bomb.score[i]=0;

		break;
		case 3:
			bomb.cvet[i]='purple';
			bomb.score[i]=10;

		break;
		case 4:
			bomb.cvet[i]='green';
			bomb.score[i]=20;

		break;
		case 4:
			bomb.cvet[i]='orange';
			bomb.score[i]=30;

		break;
		case 5:
			bomb.cvet[i]='aqua';
			bomb.score[i]=40;

		break;
	}


	bomb.speedX[i]=Math.floor(Math.random()*2);
	if(bomb.speedX[i]){
		bomb.speedX[i]=2;
	}else{
		bomb.speedX[i]=-2;
	}
	bomb.speedY[i]=Math.floor(Math.random()*2);
	if(bomb.speedY[i]){
		bomb.speedY[i]=-2;
	}else{
		bomb.speedY[i]=2;
	}
}

window.addEventListener("keydown", function (args) {	//Vika se pri natiskane na kopche
    

}, false);

window.addEventListener("mousemove", function (args) {
    mishka.x=Math.floor(args.clientX);
    mishka.y=Math.floor(args.clientY);
	
	if(mishka.x>=canvas.width-20-100){
		camera.x+=7;
	}
	if(mishka.y>=canvas.height-20){
		camera.y+=7;
	}
	if(mishka.x<=20){
		camera.x-=7;
	}
	if(mishka.y<=20){
		camera.y-=7;
	}
	
}, false);


window.addEventListener("mousedown", function (args) {    //Vika se pri natiskane na kopche
   
	
	if(!dinamiti.slojeni){
		dinamiti.x[dinamiti.br]=mishka.x;
		dinamiti.y[dinamiti.br]=mishka.y;
		dinamiti.jivot[dinamiti.br]=0;
		dinamiti.br++;
	dinamiti.slojeni++;

	}
	if(dinamiti.slojeni){	
		dinamiti.x[dinamiti.br]=mishka.x;
		dinamiti.y[dinamiti.br]=mishka.y;
		dinamiti.jivot[dinamiti.br]=0;
		dinamiti.br++;
		dinamiti.slojeni++;
			score/=5;
	}
   

}, false);

window.addEventListener("keyup", function (args) {	//vika se pri puskane na kopche natiskano do sega
   

}, false);


function update() {	//specialna funkcia vikashta se periodichno. V neq shte pishem vsqkuf kod za dvijenie
  /*  if( !=undefined&&  !=undefined){
        a=Math.floor( -me.x);
        b=Math.floor(  -me.y);
        c=Math.floor(Math.sqrt((a*a)+(b*b)));
            if(!c){
                delete(flag.x);
                delete(flag.y);
                delete(flag.red);
                c=1;
            }else{
				    fpp();

			}
        me.x+=2*(a/c);
        me.y+=2*(b/c);
		
    }

*/
var aaaaa=false;
if(score>=0 && sec<60){
	
	for(var i=0;i<bomb.br-bomb.grumnali;i++){
	
		if(bomb.x[i]>=canvas.width-10-100){
			bomb.speedX[i]=-bomb.speedX[i];
		}
		if(bomb.y[i]>=canvas.height-10){
			bomb.speedY[i]=-bomb.speedY[i];		
		}
		if(bomb.x[i]<=10){
			bomb.speedX[i]=-bomb.speedX[i];		
		}
		if(bomb.y[i]<=10){
			bomb.speedY[i]=-bomb.speedY[i];		
		}
		
		bomb.x[i]+=bomb.speedX[i];
		bomb.y[i]+=bomb.speedY[i];
	}
	for(var i=0;i<dinamiti.br;i++){
var qqqqqqqqq=30;
		if(dinamiti.jivot[i]<=qqqqqqqqq){
			dinamiti.jivot[i]+=0.5;		

		}	
	}	
	for(var i=0;i<dinamiti.br;i++){
		if(dinamiti.jivot[i]>=qqqqqqqqq){
			dinamiti.jivot[i]=0;
			delete(dinamiti.x[i]);
			delete(dinamiti.y[i]);
			delete(dinamiti.score[i]);
			delete(dinamiti.jivot[i]);
		}
	}
	var q=0;
	for(var i=0;i<bomb.br-bomb.grumnali;i++){
		for(var j=0;j<dinamiti.br;j++){
			if(dinamiti.jivot[j]){
				a[q]=Math.abs(dinamiti.x[j]-bomb.x[i]);
				b[q]=Math.abs(dinamiti.y[j]-bomb.y[i]);
				c[q]=Math.sqrt((a[q]*a[q])+(b[q]*b[q]));
				if(c[q]<30){
					dinamiti.x[dinamiti.br]=bomb.x[i];
					dinamiti.y[dinamiti.br]=bomb.y[i];
					dinamiti.jivot[dinamiti.br]=0;		
					dinamiti.score[dinamiti.br]=bomb.score[i];
					dinamiti.br++;
					delete(bomb.x[i]);
					delete(bomb.y[i]);
					bomb.grumnali++;

					score+=bomb.score[i];
				}

				
			}
		}
	}
	

	if(score<=0){
		score=-100;
	}


}else{
	score=0;
	alert("Game Over!");
	aaaaa=true;
}

	
	//Math.ceil
	if(!aaaaa){
    	setTimeout(update, 10);	//kolko chesto da se dviji
	}
}

function seconds(){

	sec++;
	setTimeout(seconds,1000);
}



function draw() {	//specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato ni se risuva
    context.clearRect(0, 0, canvas.width, canvas.height);	//NEBAR!
    context.globalAlpha = 1;    				//NEBAR!

    context.drawImage(bg,400,0,100,canvas.height);
 //   context.drawImage(flag.image,0,130*(Math.floor(flag.red)%9),149,130,flag.x-camera.x,flag.y-camera.y,30,40);
    
	/*context.beginPath();
	context.arc(me.x-camera.x, me.y-camera.y,10,0,2*Math.PI);
	context.closePath();
	context.fill();
	*/
	
	for(var i=0;i<bomb.br-bomb.grumnali;i++){
		context.fillStyle=bomb.cvet[i];
		context.beginPath();
		context.arc(bomb.x[i],bomb.y[i],8,0,2*Math.PI);
		context.closePath();
		context.fill();
	}


	for(var i=0;i<dinamiti.br;i++){
		context.fillStyle='#FFFFFF';
		context.beginPath();
		context.arc(dinamiti.x[i],dinamiti.y[i],dinamiti.jivot[i],0,2*Math.PI);
		context.closePath();
		context.fill();
		if(dinamiti.jivot[i]){
			context.fillStyle='black';
			context.font='10pt Arial';
			if(dinamiti.score[i]==null) dinamiti.score[i]=0;
			context.fillText("+"+dinamiti.score[i],dinamiti.x[i]-10,dinamiti.y[i]+5);

		}
		
	}



	score=Math.floor(score);
	context.fillStyle="white";
    context.font = '20pt Comic';
    context.fillText('Score:'+score, 10, 25);
    context.fillText('seconds: '+sec, 10,50);
/*
    context.fillStyle='white';
	context.beginPath();
    context.arc(mishka.x,mishka.y,10,0,2*Math.PI);
    context.closePath();
    context.fill();
*/
    setTimeout(draw,10);    //NEBAR!

}
update();	//purvo vikane. ne go zatrivai!
seconds();
draw();	//purvo vikane. ne go zatrivai!
