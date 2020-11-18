var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) { setTimeout (callback, 1000 / 30); };
 
var rilizvamLi=false;
var kartinka=new Image();
var character = new Image(),step = 0;
character.src = 'hulk.png'; 
var qq=[];
//kartinka.src="primernakartinka.png";
var canvas = document.getElementById("canvas-id");
canvas.width = 600;
canvas.height = 400;
var context = canvas.getContext("2d");
///NE BARAITE REDOVETE NAGORE!
var broilo6i=0;
var gframe=0, glevelspeed=80;
var frame=0;    
var plo4ka2=new Image();
plo4ka2.src="dr.png";
var snow = new Image();
snow.src="snow.png";
var dr=new Image();
dr.src="dr.png";
var lo6ax=[], lo6ay=[];
var aa=10;
var snowx=[],snowy=[],broisnejinki=0;
var darisuamli=true;
// add a image element
var hero=new Image();
hero.src="hero.png";
var cframe=0;
var haveipaused=false;
var score=0;
var myX, myY,mishkaX,mishkaY;  //Suzdadohme promenliva! Tipa i e kakufto i dadete :)
var levo=false,desno=false,mogalinalevo=true,mogalinadesno=true;
var field=new Image();
field.src="field.png";
var plo4ka=new Image();
plo4ka.src="stulba2.png";
var proba, dir = 0;
var broplo4ki=0;
var mogalinadolu=true;
var BRL=0;
var cscore=score;
var snowspeed=30;
var levelspeed=30;
var lX=[],lY=[];
var px=[],py=[],brp=0;
var snow = new Image();
var sx=[],sy=[],brs;
var krai=new Image(),step = 0;
krai.src="gameover.jpg";
var umreliwe=false;
/*var audio=new Audio();
audio.src="tsundere.mp3";
*/myY=25;
myX=300;  //Davame i na4alna stoinost. Qko.
//Redove kod napisani izvun koq da e funkcia (kakvito bqha tez) se izpulnqvat pri startiraneto.
 
function zele(){//koda napisan vuv va6a vunkcia puk se izpulnqva 4ak kato q izvikame otnqkude
    //console.log("zle.si"); //printva v console-a. natisnete   F12 da q vidite
frame=0;
plo4ka2.src="dr.png";
snowspeed=50;
character.src = 'hulk.png'; 
px=[],py=[],brp=0;
dir = 0
hero.src="hero.png";
score=0;
snowx=[],snowy=[],broisnejinki=0;
sx=[],sy=[],brs;
haveipaused=false;
myX, myY,mishkaX,mishkaY;  //Suzdadohme promenliva! Tipa i e kakufto i dadete :)
levo=false,desno=false,mogalinalevo=true,mogalinadesno=true;
field.src="field.png";
plo4ka.src="stulba2.png";
    qq=[];
proba;
broplo4ki=0;
darisuamli=true;
    aa=10;
mogalinadolu=true;
BRL=0;
    gframe=0, glevelspeed=80;
snow.src="snow.png";
cscore=score;
levelspeed=30;
lX=[],lY=[];
krai=new Image();
krai.src="gameover.jpg";
umreliwe=false;
    broilo6i=0;
cframe=frame;
/*var audio=new Audio();
audio.src="tsundere.mp3";
*/
myY=25;
myX= 300;  //Davame i na4alna stoinost. Qko.
//Redove kod napisani izvun koq da e funkcia (kakvito bqha tez) se izpulnqvat pri startiraneto.
 
    //NIKAKVI log-ove, shtoto ne raboti v Internet Explorer
}
zele();
 
window.addEventListener("keydown", function (args) {    //Vika se pri natiskane na kopche
   args.preventDefault();
    if(args.keyCode==37&&!umreliwe){
        levo=true;
    }
    if(args.keyCode==39&&!umreliwe){
        desno=true;  
    }
    if(umreliwe&&args.keyCode==82){
       return zele();
    }
 
  }, false);
 
window.addEventListener("keyup", function (args) {  //vika se pri puskane na kopche natiskano do sega
    if(args.keyCode==37&&!umreliwe&&!haveipaused){
        levo=false;
        dir=0;
    }    
    if(args.keyCode==39&&!umreliwe&&!haveipaused){
        desno=false;
        dir=0;
    }    
    
    if(args.keyCode==82&&!umreliwe){
        haveipaused=false;
        darisuamli=true;
    }
 
 
}, false);
 
window.addEventListener("mousemove", function (args) {
    //console.log(args.clientX, args.clientY);  //kude e premestena mishkata
    //Nikakvi log-ove
    mishkaX=args.clientX-canvas.offsetLeft;
    mishkaY=args.clientY-canvas.offsetTop;
 
 
}, false);
function update() { //specialna funkcia vikashta se periodichno. V neq shte pishem vsqkuf kod za dvijenie
    console.log(broilo6i);
    if(!umreliwe){
        for(var i=1;i<broilo6i;i++){
            gframe++;
         if(myX<=lo6ax[i]+100&&myX+10>=lo6ax[i]&&myY+10>=lo6ay[i]&&myY+10<lo6ay[i]+10){
               umreliwe=true; 
            }
        }
    score+=0.05;
    cscore+=0.05;
    }
    if(haveipaused==false){
        if(mogalinadolu){
        myY+=3;
        }
    if(!umreliwe){
    score++;
    cscore++;
    for (var i = 0; i < BRL+BRL; i++) {
    if(myX<=lX[i]+100&&myX+10>=lX[i]&&myY+10>=lY[i]&&myY+10<lY[i]+10){
    
        mogalinadolu=false;
        if(!qq[i]){
        myY-=6;
        score--;
        }
        if(qq[i]) umreliwe=true;
 
}else{mogalinadolu=1;}
}
}
            
    frame++;
    if(myY<=0){
        umreliwe=true;
    }
    if(myY>=canvas.height){
        mogalinadolu=false;
        umreliwe=true;
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
        dir = 1;
        step ++;
    }else{
      if(desno&&mogalinadesno){
        myX+=6;
        dir = 2;
        step ++;
      }else{
        step = 0;
      }
    }
         
  
    if(frame%levelspeed==0){
        

        lX[BRL]=Math.floor(Math.random()*canvas.width-90);
        lY[BRL]=400;
        if(BRL==0){
            if(lX[BRL]!=myX) lX[BRL]=myX;
        }
        BRL++;

        if(Math.random()*2>1.57){
            qq[BRL]=true;
        }else{
            qq[BRL]=false;
        }
        if(BRL==1000){
            BRL=0;
        }
        if(BRL==10){
            levelspeed++;
        }
        
        
    }
    if(cscore==500){
        levelspeed+=7;
        cscore=0;
 
    }
    }
    
    //100x10, hero=15x15
    /*if(myY+15>=lY+100){
Da napravq sblusuk
    }
    */
    if(cframe%snowspeed==0){
        if(broisnejinki>=1000){
            broisnejinki=0;
        }
        broisnejinki++;
        snowx[broisnejinki]=Math.floor(Math.random()*canvas.width);
        snowy[broisnejinki]=0;
    }
     broisnejinki+=2;
     cframe++;
     if(BRL>=10){
        brp=1;
        px[brp]=Math.floor(Math.random()*canvas.width);
        py[brp]=400;
     }  
    
    setTimeout(update, aa);
}
 
function draw() {   //specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato ni se risuva
    context.globalAlpha=0.175;
    context.drawImage(field,0,0,canvas.width,canvas.height);   
    context.globalAlpha = 1;
 
   // context.fillStyle = "red";//izbor na cvqt
   // context.fillRect(myX, myY, 10,10);
    context.fillStyle="green";
    context.font = '15pt Comic';
    context.fillText('SCORE:'+Math.floor(score), 10, 20);
        if(umreliwe){
        myY=700;
        context.drawImage(krai,0,0,canvas.width,canvas.height);
        context.fillStyle="purple";
        context.font = '25pt Comic';
        context.fillText('SCORE:'+Math.floor(score), 110, 50);
        context.fillStyle="yellow";
        context.font = '25pt Comic';
        context.fillText('Press "r" to restart!',355, 395);
    }
    for(var i=0;i<broisnejinki;i++){
        context.drawImage(snow,snowx[i],snowy[i],10,10);
        snowy[i]+=2;
    }
    //risuvane na zapulnen kvadrat s izbrania cvqt
    //purvite 2 argumenta sa koordinati za goren lqv ugul, a sled tva- razmerite po x i y!    
    if(!umreliwe){
        lo6ay-=3;   
    }
    for(var i=0;i<BRL;i++){
        if(!umreliwe&&!haveipaused){
        lY[i]-=3;
    }
        if(!umreliwe){
            if(!qq[i]){
    context.drawImage(plo4ka,lX[i],lY[i],100,10);
            }
            if(qq[i]){
             context.drawImage( dr,lX[i],lY[i],100,10 );
            }
}
    }
    if(!umreliwe){
        for(var i=0;i<broilo6i;i++){
            context.drawImage(dr,lo6ax[i],lo6ay[i],100,10);
        }
    }
    for(var i=0;i<brp;i++){
        if(!umreliwe&&!haveipaused){
            py[i]-=3;
        }
        if(!umreliwe){
            context.drawImage(plo4ka2,px[i],py[i],100,10);
        }
        brp=0;
    }
    context.fillStyle = "red";//izbor na cvqt
    context.beginPath();
    context.arc(myX,myY,10,0,2*Math.PI);
    context.closePath();
    context.fill();
    //context.drawImage(character,40 * (step % 4),56*dir,40,56,myX,myY,30,30);
    requestAnimationFrame(draw);    //NEBAR!
 
}
update();   //purvo vikane. ne go zatrivai!
draw(); //purvo vikane. ne go zatriva