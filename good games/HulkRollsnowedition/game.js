var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) { setTimeout (callback, 1000 / 30); };
 
var rilizvamLi=false;
var kartinka=new Image();
var character = new Image(),step = 0;
character.src = 'hulk.png'; 
//kartinka.src="primernakartinka.png";
var canvas = document.getElementById("canvas-id");
canvas.width = 600;
canvas.height = 400;
var context = canvas.getContext("2d");
///NE BARAITE REDOVETE NAGORE!
var frame=0;    
var plo4ka2=new Image();
plo4ka2.src="dr.png";
var snow = new Image();
snow.src="snow.png";
var snowx=[],snowy=[],broisnejinki=0,vifalisum=false;
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
var snowspeed=50;
var levelspeed=50;
var lX=[],lY=[];
var px=[],py=[],brp=0;
var snow = new Image();
var sx=[],sy=[],brs;
var krai=new Image(),step = 0,scoreda=0;
krai.src="gameover.jpg";
var umreliwe=false,mmy=[];
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
snowx=[],snowy=[],broisnejinki=0,vifalisum=false;
sx=[],sy=[],brs;
haveipaused=false;
myX, myY,mishkaX,mishkaY;  //Suzdadohme promenliva! Tipa i e kakufto i dadete :)
levo=false,desno=false,mogalinalevo=true,mogalinadesno=true;
field.src="field.png";
plo4ka.src="stulba2.png";
proba;
broplo4ki=0;
darisuamli=true;
mogalinadolu=true;
BRL=0;
snow.src="snow.png";
cscore=score;
levelspeed=50;
lX=[],lY=[];
krai=new Image();
scoreda=0;
krai.src="gameover.jpg";
umreliwe=false;
cframe=frame;
mmy=[];
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
    if(args.keyCode==80&&!umreliwe){
        haveipaused=true;
        darisuamli=false;
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
    if(!haveipaused){
    myY+=3;
    if(!umreliwe){
    if(mogalinadolu){
    score++;
    scoreda=score;
    cscore++;
    }
    for (var i = 0; i < BRL+BRL; i++) {
    if(myX<=lX[i]+100&&myX+30>=lX[i]&&myY+30>=lY[i]&&myY+30<lY[i]+10){
        myY-=6;
        mmy[i]=myY;
        //vifalisum=true;

    }
}
    for(var i=0;i<BRL;i++){
        if(myY>mmy[i]+1){
            mogalinadolu=true;
        }
        if(myY<mmy[i]+1){
            mogalinadolu=false;
        }
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
   // console.log
    if(frame%levelspeed==0){
        lX[BRL]=Math.floor(Math.random()*canvas.width);
        lY[BRL]=400;
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
    setTimeout(update, 10);
}
 
function draw() {   //specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato ni se risuva
    context.globalAlpha=1;
    context.drawImage(field,0,0,canvas.width,canvas.height);   
  
 
   // context.fillStyle = "red";//izbor na cvqt
   // context.fillRect(myX, myY, 10,10);
    context.fillStyle="green";
    context.font = '15pt Comic';
    context.fillText('SCORE:'+score, 10, 20)
        if(umreliwe){
        myY=700;
        context.drawImage(krai,0,0,canvas.width,canvas.height);
        context.fillStyle="purple";
        context.font = '25pt Comic';
        context.fillText('SCORE:'+score, 110, 50);
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
    for(var i=0;i<BRL;i++){
        if(!umreliwe&&!haveipaused){
        lY[i]-=3;
    }
        if(!umreliwe){
    context.drawImage(plo4ka,lX[i],lY[i],100,10);
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
    context.drawImage(character,40 * (step % 4),56*dir,40,56,myX,myY,30,30);
    requestAnimationFrame(draw);    //NEBAR!

}
update();   //purvo vikane. ne go zatrivai!
draw(); //purvo vikane. ne go zatriva