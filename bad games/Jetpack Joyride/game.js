var requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) { setTimeout (callback, 1000 / 30); };

var rilizvamLi=false;
//var kartinka=new Image();
//kartinka.src="primernakartinka.png";
var canvas = document.getElementById("canvas-id");
canvas.width = 600;
canvas.height = 400;
var context = canvas.getContext("2d");
var over=new Image();
over.src="gameoverq.jpg";
var hero=new Image();
hero.src="hero.png";
var stena=new Image();
stena.src=("stena.png");
var field=new Image();
field.src=("field.png");
///NE BARAITE REDOVETE NAGORE! 
var losh;
var kur6um=new Image();
var kur6umX=[],kur6umY=[];
var px=[],py=[];
var zapo4vali=false;
var strelqmli=false;
var patroni=new Image();
patroni.src="patroni.jpg";
var win=new Image();
win.src=("youwin.jpg");
var o6te=false;
var umreliwe=false;
alert("Welcome to Jetpack Joyride v 1.0.1");
var myX, myY;//,mishkaX,mishkaY;  //Suzdadohme promenliva! Tipa i e kakufto i dadete :)
/*

var audio=new Audio();
audio.src="tsundere.mp3";
*/
var aa;
var na4=true;
var sprqhli=false;
var nagore=false;
myY=375;
myX= 10;  //Davame i na4alna stoinost. Qko.
//Redove kod napisani izvun koq da e funkcia (kakvito bqha tez) se izpulnqvat pri startiraneto.
var lX=[],lY = [],BRL=0;
function zele(){//koda napisan vuv va6a vunkcia puk se izpulnqva 4ak kato q izvikame otnqkude
	//console.log("zle.si"); //printva v console-a. natisnete 	F12 da q vidite
	
	//NIKAKVI log-ove, shtoto ne raboti v Internet Explorer
}
var brs=0;

window.addEventListener("keydown", function (args) {	//Vika se pri natiskane na kopche
  /*  if(!rilizvamLi){console.log(args.keyCode);}  		//pechatame koda na natisnatoto kopche
	//nikakvi logove
    audio.play();//FIREFOX FEYLZ!!!
*/
    if(args.keyCode=='38'){
        nagore=true;
    }
    if(args.keyCode=='32'){
            strelqmli=true;
            brs++;
       }
        if(args.keyCode=='8'){
            zapo4vali=true;
       }

}, false);

window.addEventListener("keyup", function (args) {	//vika se pri puskane na kopche natiskano do sega
    //tova e po- dobroto mqsto da sluchvate deistvia s natiskanoto kopche
	   if(args.keyCode=='38'){
            na4=false;
       }
        if(args.keyCode=='38'){  //ako e strelka nalevo
		  nagore=false;  //mestim nalevo
	   }
       if(args.keyCode=='32'){
            brs++;
       }
        if(args.keyCode=='8'){
            zapo4vali=false;
       }
      
    //audio.pause();
}, false);
/*
window.addEventListener("mousemove", function (args) {
	//console.log(args.clientX, args.clientY);	//kude e premestena mishkata
	//Nikakvi log-ove
    myY=args.clientY;
    mishkaX=args.clientX-canvas.offsetLeft;
    mishkaY=args.clientY-canvas.offsetTop;
    
    
    audio.currentTime=args.clientX;
}, false);
*/
var pobedi=false;
var mogali=false;
var score=0;
//lX = canvas.width + 100;
var frame=0;
var gorelisum=false;
var levelspeed=60;
function update() {	//specialna funkcia vikashta se periodichno. V neq shte pishem vsqkuf kod za dvijenie
//	myX=myX+5;//dvijim se postoqnno nadesno;
    if(myY<=0){
        o6te=true;
    }else{
        o6te=false;
    }
    if(frame%levelspeed==0){
        if(levelspeed<60){
            levelspeed=60;
        }
        levelspeed--;
        lX[BRL]=canvas.width;
        lY[BRL]=Math.random()*canvas.height;
        BRL++;
        if(BRL==1000){
            BRL=0;
        }
    }
    if(nagore&&o6te==false){
        myY-=3;
        sprqhli=false;
    }
    if(nagore==false&&sprqhli==false){
            myY+=6;
            if(myY>=370){
            sprqhli=true;
        }
    }
    if(strelqmli){
        for( aa=0;aa<brs;aa++){
            px[aa]=myX;
            py[aa]=myY;
        }
    }
    for(var i=0;i<BRL;i++){
         //if(myX>=lX[i]&&myX<=lX[i]+25&&myY+25>=lY[i]&&myY<=lY[i]+25){
      //      levelspeed-=1;
        if (myX+20>=lX[i]&&myX+20<=lX[i]+90&&myY+20>=lY[i]&&myY<=lY[i]+100) {
            score--;
            if(score==-40){
              umreliwe=true;
                return;
            }
        }
    }

    
    for(var i=0;i<BRL;i++){
        lX[i]-=3;
        if (lX[i]==0) {
        score++;
        if(score==10){
        //    levelspeed-=100;
        }
    }
    }
    frame++;
   setTimeout(update, 10);	//kolko chesto da se dviji
levelspeed--;
if(score==150){
    pobedi=true;
}
}
function draw() {	//specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato ni se risuva
  //  context.globalAlpha = 0.375;
     context.drawImage(field,0, 0, canvas.width, canvas.height);	//NEBAR!
    context.globalAlpha = 1;    				//NEBAR!
          context.fillStyle = "purple";//izbor na cvqt
    context.drawImage(hero,myX, myY, 25,30);	//risuvane na zapulnen kvadrat s izbrania cvqt
    context.fillStyle="green";
    context.font = '20pt Comic';
      context.fillText('SCORE:'+score, 33, 30);
    //context.fillText=();
    for(var a=0;a<BRL;a++){
       //  context.fillStyle="green";
        context.drawImage(stena,lX[a],lY[a],100,50);
    }
    if(pobedi){
        context.drawImage(win,0,0,600,400);
        return;
    }
    if(umreliwe==true){
        context.drawImage(over,0,0,600,400);
       context.fillStyle="green";
    context.fillText('SCORE: '+score, 0,0);
   
        return;
    }
    //purvi te 2 argumenta sa koordinati za goren lqv ugul, a sled tva- razmerite po x i y!
    //context.drawImage(kartinka,50,50,myX,myY);	//NEBAR!
    context.beginPath();
   // context.arc(mishkaX,mishkaY,10,0,2*Math.PI);
    context.closePath();
    context.stroke();
    requestAnimationFrame(draw);
}
update();	//purvo vikane. ne go zatrivai!
draw();	//purvo vikane. ne go zatrivai!