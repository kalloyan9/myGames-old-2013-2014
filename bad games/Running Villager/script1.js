var requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) { setTimeout (callback, 1000 / 30); };

var canvas = document.getElementById("canvas-id");
canvas.width = 500;
canvas.height = 700;
var context = canvas.getContext("2d");
///NE BARAITE REDOVETE NAGORE!
var mishka={}, keybd={}, coin={};
keybd.natisnato=[], keybd.button38up=false;
var me={};
me.meters=0;
me.x=canvas.width/2-45, me.y=canvas.height-120, me.image=new Image(), me.imageJump=new Image(),me.red=4, me.col=0, me.colSpeed=0.2, me.left=false, me.right=false, me.jump=false, me.canimove=true;
me.image.src="Images//hero.png";
me.imageJump.src="Images//herojump.png";
me.cmeters=0;

var background={};
background.br=0, background.frame=0, background.speed=60, background.x=[], background.y=[];
background.image=new Image();
background.image.src="Images//bg.png";



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

coin.br=0, coin.frame=0, coin.speed=70, coin.daspawnvamli=false, coin.x=[], coin.y=[], coin.col=[], coin.red=[], coin.image=new Image();
coin.image.src="Images//coin.png";
coin.subrani=0;
coin.a;

window.addEventListener("keydown", function (args) {    //Vika se pri natiskane na kopche
    if(!me.jump){
    keybd.natisnato[args.keyCode]=true;
    }
}, false);

window.addEventListener("keyup", function (args) {	//vika se pri puskane na kopche natiskano do sega
    keybd.natisnato[args.keyCode]=false;
    if(args.keyCode==38&&!me.jump&&!keybd.button38up&&!keybd.natisnato[38]){
        keybd.button38up=true;
        me.col=0;
    }
}, false);

window.addEventListener("mousedown", function (args) {    //Vika se pri natiskane na kopche
   ///////
   ///////
   ///////
 
}, false);

window.addEventListener("mousemove", function (args) {
    mishka.x=args.clientX-canvas.offsetLeft;
    mishka.y=args.clientY-canvas.offsetTop;
}, false);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function colplusplus() {	//specialna funkcia vikashta se periodichno. V neq shte pishem vsqkuf kod za dvijenie
	me.col+=me.colSpeed;
    if(me.col>13){
        me.col=0;
    }
        if(keybd.natisnato[37]||keybd.natisnato[39]){
            if(me.left){
                me.red=5;
            }
            if(me.right){
                me.red=6;
            }
        }else{
            me.red=4;
        }
    if(me.jump&&me.col>=12&&keybd.button38up){
        keybd.button38up=false;
        me.jump=false;
    } 
    setTimeout(colplusplus, 10);	//kolko chesto da se dviji
}

function spawnbackground(){
    if(background.frame%background.speed==0){
        background.x[background.br]=0;
        background.y[background.br]=-300;
        background.br++;
    }
    background.frame++;
    for(var i=0;i<background.br;i++){
        background.y[i]+=4;
    }
    
    setTimeout(spawnbackground, 10);
}

function moveme(){
    if(!me.jump){
    if(keybd.natisnato[37]&&me.x>0){
        me.x-=3;
        me.left=true;
        }else{
            me.left=false;
        }
    if(keybd.natisnato[39]&&me.x+90<canvas.width){
        me.x+=3;
        me.right=true;
        }else{
            me.right=false;
        }
    }
    if(keybd.button38up){
        me.jump=true;
    }
    setTimeout(moveme, 10);
}

function metersplusplus(){
    me.meters++;
    me.cmeters++;
    setTimeout(metersplusplus, 170);
}


function colpp(){
    if(coin.frame%coin.speed==0){
        coin.x[coin.br]=Math.random()*1000;
        coin.y[coin.br]=-200;
        if(coin.x[coin.br]<15){
            coin.x[coin.brs]+=10;
        }
        if(coin.x[coin.br]>canvas.width-50){
            delete(coin.x[coin.br]);
            delete(coin.y[coin.br]);
            if(coin.br>1){
            delete(coin.col[coin.br]);
            delete(coin.red[coin.br]);
            }
        }
        coin.br++;
        coin.col[coin.br]=0;
        coin.red[coin.br]=0;
    }
    me.cmeters=0;
    coin.frame++;
    for(var i=0;i<coin.br;i++){
        coin.red[i]+=0.5;
        if(coin.red[i]==4){
            coin.col[i]++;
            coin.red[i]=0;
        }
        if(coin.col[i]>=4){
            coin.col[i]=0;
        }
    }

    for(var i=0;i<coin.br;i++){
        coin.y[i]+=4;
    }

    setTimeout(colpp,10);
}




function draw() {	//specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato ni se risuva
    context.clearRect(0, 0, canvas.width, canvas.height);	//NEBAR!
    context.globalAlpha = 1;    				//NEBAR!
    for(var i=0;i<background.br;i++){
        if(background.y[i]<canvas.height){
            context.drawImage(background.image,0,background.y[i],canvas.width,240);
        }else{
            delete(background.y[i]);
            delete(background.x[i]);
        }
    }

    for(var i=0;i<coin.br;i++){
        context.drawImage(coin.image,30*(Math.floor(coin.col[i])%16),0,30,30,coin.x[i],coin.y[i],30,30);
    }

	if(!me.jump){
        context.drawImage(me.image,128*(Math.floor(me.col)%13),128*me.red,128,128,me.x,me.y,90,100);
    }
    if(me.jump&&me.col<13){
        context.drawImage(me.imageJump,128*(Math.floor(me.col)%13),0,128,309,me.x,me.y-140,90,240);
    }
    context.fillStyle="gold";
    context.font="20px Arial";
    context.fillText("Meters:" + me.meters,10,30);
    context.fillStyle="red";
    context.fillText("Coins:"+coin.subrani,canvas.width-100,30);

    /*
    context.beginPath();
    context.arc(mishka.x,mishka.y,10,0,2*Math.PI);
    context.closePath();
    context.stroke();
	*/
    setTimeout(draw, 10);    //NEBAR!

}
colplusplus();	//purvo vikane. ne go zatrivai!
moveme();
spawnbackground();
metersplusplus();
colpp();

draw();	//purvo vikane. ne go zatrivai!