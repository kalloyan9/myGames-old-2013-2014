var requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) { setTimeout (callback, 1000 / 30); };
var canvas = document.getElementById("canvas-id");
canvas.width = 600;
canvas.height = 400;
var context = canvas.getContext("2d");
///NE BARAITE REDOVETE NAGORE!

var myX, myY,mishkaX,mishkaY, skolkoDaSePromenqY=5, natisnatoKop4e=0, skolkoDaPada=5;
var guzX=[], guzY=[], broiGuzove=0, guzSkorostNaSpawn=60, guzFrame=0, i, j;
var score=0, umrehli=false;
var myImage=new Image(), myCol=0, myRed=1;
var a=new Image();
a.src="me1.png";
myImage.src="me.png";
myY=100;
myX= 50;  //Davame i na4alna stoinost. Qko.

window.addEventListener("keydown", function (args) {	//Vika se pri natiskane na kopche
	if(args.keyCode==32){
		natisnatoKop4e=32;
	}else{
		natisnatoKop4e=0;
	}

}, false);

window.addEventListener("keyup", function (args) {	//vika se pri puskane na kopche natiskano do sega
	if(args.keyCode==32){
			natisnatoKop4e=0;
	}
}, false);

window.addEventListener("mousemove", function (args) {
	mishkaX=args.clientX-canvas.offsetLeft;
    mishkaY=args.clientY-canvas.offsetTop;
}, false);


function update() {	//specialna funkcia vikashta se periodichno. V neq shte pishem vsqkuf kod za dvijenie
	if(myY+50<400 && natisnatoKop4e==0 || umrehli){
		myY=myY+skolkoDaPada;
		if(skolkoDaPada<8){
			skolkoDaPada = skolkoDaPada + 0.2;
		}
	}
	if(natisnatoKop4e==32 && myY>1){
		myY=myY-skolkoDaSePromenqY;
		skolkoDaPada=0;
	}
	if(guzFrame % guzSkorostNaSpawn == 0){
		guzY [broiGuzove] = Math.random()*400;
		guzX [broiGuzove] = 600;
		broiGuzove=broiGuzove+1;
	}
	guzFrame=guzFrame+1;

	for (i=0;i<broiGuzove; i++){
		guzX [i] = guzX [i] - 7;
	}
	if(umrehli==false){
		score=score+0.1;
		myCol+=0.2;
		if(myCol>=5){
			myCol=0;
		}
	}
	for(var q=0;q<broiGuzove;q++){
		if(myX<=guzX[q] +170 && myX+60>=guzX[q] && myY<=guzY[q] +90 && myY+50>=guzY[q]){
			umrehli=true;
			alert("Game Over");
			return;
		}
	}
	


	setTimeout(update, 10);	//kolko chesto da se dviji

}

function draw() {	//specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato ni se risuva
    context.globalAlpha=1;
    context.clearRect(0, 0, canvas.width, canvas.height);	//NEBAR!

	for ( j=0; j<broiGuzove; j++ ){
		context.fillStyle="red";
		context.fillRect(guzX [j] , guzY[j], 170, 90);	//risuvane na zapulnen kvadrat s izbrania cvqt
	}

    context.fillStyle = "blue";//izbor na cvqt
    context.drawImage(myImage,104*(Math.floor(myCol)%5),myRed*myImage.height/2,104,myImage.height/2,myX,myY,80,70);	//risuvane na zapulnen kvadrat s izbrania cvqt

	context.fillStyle="white";
	context.font="20px Arial";
	context.fillText("Score: "+ Math.floor(score), 10, 40);


    requestAnimationFrame(draw);	//NEBAR!
/*
    context.beginPath();
    context.arc(mishkaX,mishkaY,10,0,2*Math.PI);
    context.closePath();
    context.stroke();
*/
}
update();	//purvo vikane. ne go zatrivai!
draw();	//purvo vikane. ne go zatrivai!
