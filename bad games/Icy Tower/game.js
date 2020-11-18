var requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) { setTimeout (callback, 1000 / 30); };
 
var rilizvamLi=false;
var kartinka=new Image();
//kartinka.src="primernakartinka.png";
var canvas = document.getElementById("canvas-id");
canvas.width = 600;
canvas.height = 400;
var context = canvas.getContext("2d");
///NE BARAITE REDOVETE NAGORE!
var frame=0;
var darisuamli=true;
// add a image element
var hero=new Image();
hero.src="hero.png";
var haveipaused=false;
var score=0;
var myX, myY,mishkaX,mishkaY;  //Suzdadohme promenliva! Tipa i e kakufto i dadete :)
var levo=false,desno=false,mogalinalevo=true,mogalinadesno=true;
var field=new Image();
field.src="field.jpg";
var plo4ka=new Image();
plo4ka.src="stulba.png";
var proba;
var nagore=false;
var broplo4ki=0;
var mogalinadolu=true;
var BRL=0;
var cscore=score;
var levelspeed=50;
var lX=[],lY=[];
var stupilsum=true;
var krai=new Image();
krai.src="gameover.jpg";
var umreliwe=false;
/*var audio=new Audio();
audio.src="tsundere.mp3";
*/myY=canvas.height-10;
myX=300;  //Davame i na4alna stoinost. Qko.
//Redove kod napisani izvun koq da e funkcia (kakvito bqha tez) se izpulnqvat pri startiraneto.
 
function zele(){//koda napisan vuv va6a vunkcia puk se izpulnqva 4ak kato q izvikame otnqkude
	//console.log("zle.si"); //printva v console-a. natisnete 	F12 da q vidite
frame=0;
stupilsum=true;
hero.src="hero.png";
score=0;
haveipaused=false;
myX, myY,mishkaX,mishkaY;  //Suzdadohme promenliva! Tipa i e kakufto i dadete :)
levo=false,desno=false,mogalinalevo=true,mogalinadesno=true;
field.src="field.jpg";
plo4ka.src="stulba.png";
proba;
nagore=false;
broplo4ki=0;
darisuamli=true;
mogalinadolu=true;
BRL=0;
cscore=score;
levelspeed=50;
lX=[],lY=[];
krai=new Image();
krai.src="gameover.jpg";
umreliwe=false;
/*var audio=new Audio();
audio.src="tsundere.mp3";
*/
alert("Welcome to Icy Tower!\nPress 'OK' to start!");
myY=canvas.height-10;
myX= 300;  //Davame i na4alna stoinost. Qko.
//Redove kod napisani izvun koq da e funkcia (kakvito bqha tez) se izpulnqvat pri startiraneto.
 
	//NIKAKVI log-ove, shtoto ne raboti v Internet Explorer
}
zele();
 
window.addEventListener("keydown", function (args) {	//Vika se pri natiskane na kopche
    if(args.keyCode==37&&!umreliwe&&stupilsum){
        levo=true;
    }
    if(args.keyCode==39&&!umreliwe&&stupilsum){
        desno=true;  
    }
    if(umreliwe&&args.keyCode==82){
       return zele();
    }
    if(!umreliwe){
    if(args.keyCode==32&&stupilsum){
        nagore=true;
        score++;
        cscore++;
    }
}
 
  }, false);
 
window.addEventListener("keyup", function (args) {	//vika se pri puskane na kopche natiskano do sega
    if(args.keyCode==37&&!umreliwe){
        levo=false;
    }    
    if(args.keyCode==39&&!umreliwe){
        desno=false;
    }    
    if(args.keyCode==80&&!umreliwe){
        haveipaused=true;
        darisuamli=false;
    }
    if(args.keyCode==82&&!umreliwe){
        haveipaused=false;
        darisuamli=true;
    }
    if(args.keyCode==32&&stupilsum&&!haveipaused&&!umreliwe){
        nagore=false;
        stupilsum=false;

    }
 
 
}, false);
 
window.addEventListener("mousemove", function (args) {
	//console.log(args.clientX, args.clientY);	//kude e premestena mishkata
	//Nikakvi log-ove
    mishkaX=args.clientX-canvas.offsetLeft;
    mishkaY=args.clientY-canvas.offsetTop;
 
 
}, false);
function update() {	//specialna funkcia vikashta se periodichno. V neq shte pishem vsqkuf kod za dvijenie
    if(!haveipaused&&!umreliwe){
        if(!stupilsum){
            myY+=6;
            if(myY>=canvas.height){
                umreliwe=true;
            }
        }
    if(!umreliwe){
        if(!stupilsum&&nagore){
            score++;
            cscore++;
        }
    for (var i = 0; i < BRL+BRL; i++) {
    var vleznahli=false;
    if(myX<=lX[i]+100&&myX+10>=lX[i]&&myY+10>=lY[i]&&myY+10<lY[i]+10){
        mogalinadolu=false;
        stupilsum=true;
        velznahli=true;
        myY+=3;
}
    if(vleznahli){
        stupilsum=false;
    }
}
}
    if(myY>=canvas.height){
        umreliwe=true;
    }
    if(nagore){
        myY-=3;
    }
    frame++;
    if(myY<=0){
        umreliwe=true;
    }
    if(myY>=canvas.height){
        mogalinadolu=false;
    }
    if(myX<=10){
        mogalinalevo=false;
    }else{
        mogalinalevo=true;
    }
    if(myY>canvas.height){
 
    }
    if(myX>=585){
        mogalinadesno=false;
    }else{
        mogalinadesno=true;
    }
    if(levo&&mogalinalevo){
        myX-=6;
    }
    if(desno&&mogalinadesno){
        myX+=6;
    }
   // console.log
    if(frame%levelspeed==0&&!umreliwe){
        lX[BRL]=Math.floor(Math.random()*canvas.width);
        lY[BRL]=0;
        BRL++;
        if(BRL==1000){
            BRL=0;
        }
        if(BRL==10){
            levelspeed--;
        }
    }
    if(cscore==500){
        cscore=0;
        levelspeed-=3;
 
    }
    //100x10, hero=15x15
    /*if(myY+15>=lY+100){
Da napravq sblusuk
    }
    */
    }
	setTimeout(update, 10);
}
 
function draw() {	//specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato ni se risuva
    context.globalAlpha=0.175;
    context.drawImage(field,0,0,canvas.width,canvas.height);   
    context.globalAlpha = 1;
 
   // context.fillStyle = "red";//izbor na cvqt
   // context.fillRect(myX, myY, 10,10);
    context.fillStyle="Gold ";
    context.font = '15pt Comic';
    context.fillText('SCORE:'+score, 10, 20)
        if(umreliwe){
        myY=700;
        context.drawImage(krai,0,0,canvas.width,canvas.height);
        context.fillStyle="LawnGreen";
        context.font = '25pt Comic';
        context.fillText('SCORE:'+score, 110, 50);
        context.fillStyle="yellow";
        context.font = '25pt Comic';
        context.fillText('Press "r" to restart!',355, 395);
    }
	//risuvane na zapulnen kvadrat s izbrania cvqt
    //purvite 2 argumenta sa koordinati za goren lqv ugul, a sled tva- razmerite po x i y!    
    for(var i=0;i<BRL;i++){
        if(!umreliwe&&!haveipaused){
        lY[i]+=3;
    }
        if(!umreliwe){
    context.drawImage(plo4ka,lX[i],lY[i],100,10);
}
    }
    context.fillStyle="red";
    context.beginPath();
    context.arc(myX,myY,10,0,2*Math.PI);
    context.closePath();
    context.fill();
    requestAnimationFrame(draw);    //NEBAR!
}
update();	//purvo vikane. ne go zatrivai!
draw();	//purvo vikane. ne go zatriva