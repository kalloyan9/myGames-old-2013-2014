var requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) { setTimeout (callback, 1000 / 30); };

var canvas = document.getElementById("canvas-id");
canvas.width = 900;
canvas.height = 600;
var context = canvas.getContext("2d");


var mishka={};  //Suzdadohme promenliva! Tipa i e kakufto i dadete :)
mishka.down=false;
mishka.up=true;

var me={};
me.x=300, me.y=150, me.sizeX=300, me.sizeY=300;
me.kolkox=30; me.kolkoy=30;

window.addEventListener("keydown", function (args) {	//Vika se pri natiskane na kopche

   
}, false);

window.addEventListener("keyup", function (args) {	//vika se pri puskane na kopche natiskano do sega


}, false);





window.addEventListener("mousemove", function (args) {

    mishka.x=args.clientX-canvas.offsetLeft;
    mishka.y=args.clientY-canvas.offsetTop;
    
    
}, false);

window.addEventListener("mousedown", function (args) {	
 mishka.down=true;
}, false);

window.addEventListener("mouseup", function (args) {	
mishka.down=false;
}, false);



function GetSmalled() {	//specialna funkcia vikashta se periodichno. V neq shte pishem vsqkuf kod za dvijenie
	if(mishka.down){
		if(mishka.x>=me.x&&mishka.x<=me.x+me.sizeX&&mishka.y>=me.y&&mishka.y<=me.y+me.sizeY){
			me.sizeX-=10;
			me.sizeY-=10;
			me.x+=5;
			me.y+=5;
			mishka.down=false;
		}
	}
	
	setTimeout(GetSmalled, 10);	//kolko chesto da se dviji
}

function moving() {	//specialna funkcia vikashta se periodichno. V neq shte pishem vsqkuf kod za dvijenie
	me.x+=me.kolkox;
	me.y+=me.kolkoy;
	
	if(me.x+me.sizeX>=canvas.width||me.x<=0){
		me.kolkox=-me.kolkox;
	}
	if(me.y+me.sizeY>=canvas.height||me.y<=0){
		me.kolkoy=-me.kolkoy;
	}



	


	setTimeout(moving, 10);	//kolko chesto da se dviji
}




function draw() {	//specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato ni se risuva
    context.clearRect(0, 0, canvas.width, canvas.height);	//NEBAR!
    context.globalAlpha = 1;    				//NEBAR!

		/*
    context.beginPath();
    context.arc(mishkaX,mishkaY,10,0,2*Math.PI);
    context.closePath();
    context.stroke();
		*/
	

	
	context.fillStyle="red";
	context.fillRect(me.x,me.y,me.sizeX,me.sizeY);
		
	context.fillStyle="LawnGreen";
    context.font="40px Comic Sans MS";
    context.fillText("Click me!",me.x,me.y-20 );	
    if(me.sizeX<=0) {
    	context.fillStyle="Blue";
  	    context.font="40px Comic Sans MS";
  	    context.fillText("YOU WIN!",160,100);
    }
		
	requestAnimationFrame(draw);    //NEBAR!
    }
GetSmalled();	//purvo vikane. ne go zatrivai!
moving();
draw();	//purvo vikane. ne go zatrivai!