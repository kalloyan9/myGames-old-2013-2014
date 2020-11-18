var requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) { setTimeout (callback, 1000 / 30); };
var canvas = document.getElementById("canvas-id");
canvas.width = 400;
canvas.height = 600;
var context = canvas.getContext("2d");
///NE BARAITE REDOVETE NAGORE!

var myX, natisnato=[],umreliwe=false, myhealth=100,myY,ijump=new Image(),r=0,jumpimli=false,mishkaX,mishkaY,kolkojumpa=0,mdown=false,pe6o=new Image(),red=4,col=0,kudeX,kudeY;  //Suzdadohme promenliva! Tipa i e kakufto i dadete :)
pe6o.src="pe6o.png";
var  butonplay=new Image(),win=new Image(),butonpause=new Image(),lives=3,gorqli=false, coins=0,bezsmurten=false,ccoins=coins,cameraX=0,butonup=[],mmana=100,haveipaused=true,jumpingpe6o=new Image(),cameraY=0,pause=new Image(),otpusnato=0,umrq=new Image(),cursor=new Image(),pochnameli=false,was=0,meters=0,cmeters=0,stone1=new Image(),stone2=new Image();
stone1.src="stone1.png";
win.src="win.png";
butonpause.src="pause.png";
butonplay.src="play.png";
umrq.src="umrq.png";
azmana=100;
cursor.src="cursor.png"; var ska4amli=false;
stone2.src="stone2.png";
myY=canvas.height-120;
myX= canvas.width/2-45;  //Davame i na4alna stoinost. Qko.
kudeY=myY;
kudeX=myX;
var padnahvdupka=false;
ijump.src="jumpingpe6o.png";
var puddle=new Image(),lava1=new Image(),brlava=0,lavaspeed=120,lavax=[],lavay=[],log=new Image(),brstones=0,stonespeed=60,stonex=[],stoney=[],kufstone=[],icoin=new Image(),coinx=[],coiny=[],brcoins=0,cspeed=20,cframe=0,ccol=[],cred=[];
icoin.src="coin.png",lava1.src="lava.png";
var vlokvalisum=false;
var umrqhvdurvo=false, umrqhvlava=false;
puddle.src="puddle.png";
pause.src="gp.png";
log.src="log.png";
var iphone=new Image();
iphone.src='phone.png';
var icomputer=new Image(),was=0,pochnameli=false,hole=new Image(),hframe=0,hspeed=140,hx=[],hy=[],brh=0;
icomputer.src="computer.png";
hole.src="hole.png";
var ilava=new Image(),laavaframe=0,lavacol=[],mup=false,broilava=0,lavax=[],lavay=[],bground=new Image();
bground.src="bg.png";
jumpingpe6o.src="jumpingpe6o.png";

var durvox=[],durvoy=[],broidurveta=0,dframe=0,dspeed=200,mySpeed=5,how=0;
var lokvax=[],lokvay=[],broilokvi=0,lframe=0,lspeed=100,score=0,cscore=score,sframe=0;
var bgx=[],bgy=[],brbg=0,bgframe=0,bgspeed=40,skok=false,deltaj=0,komo=[];
window.addEventListener("keydown", function (args) {	//Vika se pri natiskane na kopche
 args.preventDefault();
    if(!skok){
    natisnato[args.keyCode]=true;
    }

}, false);

window.addEventListener("keyup", function (args) {	//vika se pri puskane na kopche natiskano do sega
    args.preventDefault();
    
    if(!umreliwe){
    natisnato[args.keyCode]=false;
    r=0;
    red=4;
    otpusnato=args.keyCode;
    }
    butonup[args.keyCode]=true;
 
    if(butonup[38] && azmana>=99){
            skok=true;
            azmana=0;
            col=0;
            butonup[38]=false;
            

    }else{
            
            butonup[38]=false;

    }


}, false);

window.addEventListener("mousedown",function (args){
args.preventDefault();
  mdown=true;
  

},false);

window.oncontextmenu = function(event)//spira menuto koeto se opravq kogato se natisne desniq buton
{
    event.preventDefault();
    event.stopPropagation();
    return false;
};

window.addEventListener("mouseup",function (args){
    args.preventDefault();
    if(!haveipaused){
    mdown=false;
    mup=true;
    kudeX=myX;
    kudeY=myY;
    red=4;
    
    if(mishkaX>=canvas.width-120&&mishkaX<=canvas.width&&mishkaY>canvas.height-40&&mishkaY<canvas.height){
        was=2;
        pochnameli=true;
    }

    }

},false);


window.addEventListener("mousemove", function (args) {
    mishkaX=args.clientX-canvas.offsetLeft;
    mishkaY=args.clientY-canvas.offsetTop;

        if(mishkaX<=canvas.width-45&&mishkaX>=35){
        kudeX=mishkaX-45;
        }
    
    
}, false);

function restart(){
myX, natisnato=[],umreliwe=false, myhealth=100,myY,ijump=new Image(),r=0,jumpimli=false,mishkaX,mishkaY,kolkojumpa=0,mdown=false,pe6o=new Image(),red=4,col=0,kudeX,kudeY;  //Suzdadohme promenliva! Tipa i e kakufto i dadete :)
pe6o.src="pe6o.png";
  cameraX=0,cameraY=0,umrq=new Image(),cursor=new Image(),pochnameli=false,was=0,meters=0,cmeters=0,stone1=new Image(),stone2=new Image();
stone1.src="stone1.png";
haveipaused=false;
umrq.src="umrq.png";
cursor.src="cursor.png";
mup=false;
stone2.src="stone2.png";
myY=canvas.height-120;
skok=false;
myX= canvas.width/2-45;  //Davame i na4alna stoinost. Qko.
kudeY=myY;
kudeX=myX,how=0;
pause.src="gp.png",bezsmurten=false;
butonup=[];
lavacol=[],brlava=0,lavax=[],lavay=[],laavaframe=0,lavaspeed=120;
ijump.src="jumpingpe6o.png";
mmana=100
  puddle=new Image(),log=new Image(),brstones=0,stonespeed=60,stonex=[],stoney=[],kufstone=[];
puddle.src="puddle.png";
log.src="log.png";
coins=0;
padnahvdupka=false;
iphone=new Image();
iphone.src='phone.png';
  icomputer=new Image(),was=0,pochnameli=false;
icomputer.src="computer.png"
komo=[], gorqli=false, vlokvalisum=false;
  ilava=new Image(),laavaframe=0,broilava=0,lavax=[],lavay=[],bground=new Image();
bground.src="bg.png";
jumpingpe6o.src="jumpingpe6o.png";
coinx=[],coiny=[],brcoins=0,cspeed=20,cframe=0,ccol=[],cred=[],ccoins=0;
otpusnato=0;
durvox=[],durvoy=[],broidurveta=0,dframe=0,dspeed=200,mySpeed=5;
lokvax=[],lokvay=[],broilokvi=0,lframe=0,lspeed=100,score=0,cscore=score,sframe=0;
bgx=[],bgy=[],brbg=0,bgframe=0,bgspeed=40;
mup=false;
mishkaX=30;
mishkaY=100;
deltaj=0;
umrqhvdurvo=false, umrqhvlava=false;
hole.src="hole.png",hx=[],hy=[],hframe=0,hspeed=140,brh=0;
}

function azmanapp(){
    if(!skok && azmana<=100) azmana++;
 setTimeout(azmanapp, 1);
}

function colplusplus(){
    col+=0.3;
    if(col>13){
        
        
        col=0;
    }  
}

function move(){
    if(myX<kudeX && vlokvalisum==false){
        myX+=3;
        red=6;
    }
    if(myX>kudeX && vlokvalisum==false){
        myX-=3;
        red=5;
    }
}

function cameramove(){
    cameraY-=mySpeed;
    myY-=mySpeed;
    meters+=mySpeed/50;
    cmeters+=mySpeed/50;
}

function spawntree(){
    if(dframe%dspeed==0){
        broidurveta++;
        durvox[broidurveta]=Math.random()*canvas.width-200+100;
        durvoy[broidurveta]=cameraY-canvas.height-120;
    }
    dframe++;
}
 
function mkey(){
    if(natisnato[37]&&myX>-5){
        myX-=3;
        red=5;
    }
    if(natisnato[39]&&myX+90<canvas.width+1){
        myX+=3;
        red=6;
    }
}

function spawntree(){
    if(dframe%dspeed==0){
        durvox[broidurveta]=Math.random()*canvas.width-200+100;
        durvoy[broidurveta]=cameraY-400;
        broidurveta++;
    }
    dframe++;
}

function spawncoins(){
    if(cframe%cspeed==0){
        
        coinx[brcoins]=Math.random()*canvas.width+200;
        coiny[brcoins]=cameraY-200;
        if(coinx[brcoins]<15){
            coinx[brstones]+=10;
        }
        if(coinx[brcoins]>canvas.width-50){
            delete(coinx[brcoins]);
            delete(coiny[brcoins]);
            if(brcoins>1){
            delete(ccol[brcoins]);
            delete(cred[brcoins]);
            }
        }
        brcoins++;
        ccol[brcoins]=0;
        cred[brcoins]=0;
    }
    cframe++;
    for(var i=0;i<brcoins;i++){
        cred[i]+=0.5;
        if(cred[i]==4){
            ccol[i]++;
            cred[i]=0;
        }
        if(ccol[i]>=4){
            ccol[i]=0;
        }
    }

}

function spawnlokva(){
    if(lframe%lspeed==0){
        lokvax[broilokvi]=Math.random()*canvas.width-50+100;
        lokvay[broilokvi]=cameraY-450;
        broilokvi++;
    }
    lframe++;

}

function spawnlava(){
    if(laavaframe%lavaspeed==0){
        lavax[brlava]=Math.random()*canvas.width-120;
        lavay[brlava]=cameraY-450;
        lavacol[brlava]=0;
        brlava++;
    }
    laavaframe++;
    for(var i=0;i<brlava;i++){
        lavacol[i]+=0.1;
        if(lavacol[i]>=4){
            lavacol[i]=0;
        }
    }
}

function colusion(){
    for(var i=0;i<broidurveta;i++){
        if(myX+25<=durvox[i]+170&&myX+80>=durvox[i]&&myY+90>=durvoy[i]&&myY+90<durvoy[i]+30&&!skok){
        myhealth=0;
		umrqhvdurvo=true;
    }
    }
    for(var i=0;i<broilokvi;i++){
        if(myX+25<=lokvax[i]+75&&myX+60>=lokvax[i]&&myY+100>=lokvay[i]&&myY+80<lokvay[i]+50&&!skok){
            q6u=true;
			
			myhealth-=0.4;
            
            
            komo[i]=Math.floor(Math.random()*2);
            if(!komo[i]&&myX>5){
                myX-=5;
				vlokvalisum=true;
            }
            if(komo[i]&&myX+90<canvas.width-5){
                myX+=5;
				vlokvalisum=true;
            }
        }
    }
    for(var i=0;i<brlava;i++){
        if(myX+25<=lavax[i]+50&&myX+60>lavax[i]&&myY+100>=lavay[i]&&myY+80<lavay[i]+90&&!skok){{
            myhealth=0;
			umrqhvlava=true;
        }
    }
    }

    for(var i=0;i<brstones;i++){
        if(myX+25<=stonex[i]+80&&myX+55>=stonex[i]&&myY-cameraY<=stoney[i]-cameraY&&myY+100>=stoney[i]+100){
        myhealth=0;
    }
    }
        for(var i=0;i<brh;i++){
        if(myX+25<=hx[i]+75&&myX+60>=hx[i]&&myY+100>=hy[i]&&myY+80<hy[i]+50&&!skok){
            myY=hy[i]-120;
            for(var i=0;i<50;i++){
                myY+=5;
            }
            myhealth=0;
			padnahvdupka=true;
        }
    }

    for(var i=0;i<brcoins;i++){
        if(!skok&&myX-cameraX+25<=coinx[i]-cameraX+25&&myX-cameraX+55>=coinx[i]-cameraX&&myY-cameraY+100>=coiny[i]-cameraY&&myY-cameraY+30<coiny[i]-cameraY+25&&!skok){
        coins++;
        ccoins++;
        score+=10;
        delete(coinx[i]);
        delete(coiny[i]);
        if(i>1){
            delete(ccol[i]);
            delete(cred[i]);
       
        }
    }
    }

}


function drawing(){
    if(!haveipaused){
        if(bgframe%bgspeed==0){
        bgx[brbg]=0;
        bgy[brbg]=cameraY-450;
        brbg++;
    }
    bgframe++;
    }
    for(var i=0;i<brbg;i++){
        if(bgy[i]-cameraY>myY-cameraY+100){
            delete(bgy[i]);
            delete(bgx[i]);
        }
    }

setTimeout(drawing,10);
    
}
function spawnhole(){
    if(hframe%hspeed==0){
        hx[brh]=Math.random()*canvas.width-120;
        hy[brh]=cameraY-120;
        if(hx[brh]<5){
            hx[brh]+=15;
        }
        brh++;
    }
    hframe++;
}


function scoreplusplus(){
    for(var i=0;i<broidurveta;i++){
        if(durvoy[i]>=myY+200){
            delete(durvox[i]);
            delete(durvoy[i]);
            score++;
            cscore++;
        }
    }
    for(var i=0;i<broilokvi;i++){
        if(lokvay[i]>=myY+200){
            delete(lokvax[i]);
            delete(lokvay[i]);
            score++;
            cscore++;
        }
    }
    for(var i=0;i<brh;i++){
        if(hy[i]>=myY+200){
            delete(hx[i]);
            delete(hy[i]);
            score++;
            cscore++;
        }
    }

    for(var i=0;i<brstones;i++){
        if(stoney[i]>=myY+200){
            delete(stonex[i]);
            delete(stoney[i]);
            score++;
            cscore++;
        }
    }
    for(var i=0;i<brlava;i++){
        if(lavay[i]>=myY+200){
            delete(lavax[i]);
            delete(lavay[i]);
            score++;
            cscore++;
            delete(lavacol[i]);
        }
    }
    if(cscore>=20){
        cscore=0;
        dspeed-=3;
    }
    if(cscore>=10){
        cscore=0;
        lspeed-=3;
    }
    if(lspeed<=0){
        lspeed=30;
    }
    if(dspeed<=0){
        dspeed=20;
    }

}



function spawnstones(){

    if(sframe%stonespeed==0){
        kufstone[brstones]=Math.floor(Math.random()*2);
        stonex[brstones]=Math.random()*canvas.width-100;
        stoney[brstones]=cameraY-100;
        brstones++;
    }
sframe++;


}

function nocolusionbetweenitems(){
    for(var a=0;a<broidurveta;a++){
        for(var b=0;b<broilokvi;b++){
            for(var c=0;c<brstones;c++){
                for(var d=0;d<brlava;d++){
                    for(var e=0;e<brh;e++){
                        if(durvox[a]<=lokvax[b]+95&&durvox[a]+200>=lokvax[b]&&durvoy[a]+200>=lokvay[b]&&durvoy[a]<lokvay[b]+50){
                           lokvay[b]-=100;
                        }  
                        if(durvox[a]<=lavax[d]+100&&durvox[a]+200>=lavax[d]&&durvoy[a]+50>=lavay[d]&&durvoy[a]<lavay[d]+100){
                            lavay[d]-=100;
                        }    
                        if(lokvax[b]<=lavax[d]+100&&lokvax[a]+95>=lavax[d]&&lokvay[b]+50>=lavay[d]&&lokvay[b]<lavay[d]+100){
                            lavay[d]-=200;
                        } 
                        if(durvox[a]<=stonex[c]+80&&durvox[a]+200>=stonex[c]&&durvoy[a]+200>=stoney[c]&&durvoy[a]<stoney[c]+100){
                           durvoy[a]-=100;
                        }  
                        if(hx[e]<=lokvax[b]+95&&hx[e]+140>=lokvax[b]&&hy[e]+80>=lokvay[b]&&hy[e]<lokvay[b]+50){
                           lokvay[b]-=100;
                        }  
                        if(hx[e]<=lavax[d]+100&&hx[e]+140>=lavax[d]&&hy[e]+80>=lavay[d]&&hy[e]<lavay[d]+100){
                           lokvay[b]-=100;
                        }                                   
                    }
                }
            }
        }
    }
}

function deletingg(){
    if(brlava>1500){
        brlava0;
    }
    if(brstones>1000){
        brstones=0;
    }
    if(broilokvi>2000){
        broilokvi=0;
    }
    if(broidurveta>2000){
        broidurveta=0;
    }
    if(brh>1500){
        brh=0;
    }
}



function update() {	//specialna funkcia vikashta se periodichno. V neq shte pishem vsqkuf kod za dvijenie
//         msound.currentTime=0;
       if(meters<3000){
        
       // msound.currentTime=0;
        if(!umreliwe&&!haveipaused&&pochnameli){
            if(!skok){
                 if(mmana<100){
                    mmana+=2;
                 }
            if(!natisnato[37]&&!natisnato[39]){
                red=4;
            }
            }
            if(ccoins>=50&&myhealth<=50){
                ccoins-=50;
                coins-=50;
                myhealth+=50;
            }
               if(cmeters>=300){
                if(dspeed<20){
                dspeed-=10;
                }
                if(lspeed<10){
                lspeed-=15;
                }
                cmeters=0;
                }
        }
        if(!umreliwe){
        if(haveipaused&&mdown&&mishkaX>0&&mishkaX<20&&mishkaY>canvas.height-40&&mishkaY<canvas.height){
            haveipaused=false;
            mdown=false;  
            mishkaX=300;
            mishkaY=20;  
        }
        if(!haveipaused&&mdown&&pochnameli&&mdown&&mishkaX>0&&mishkaX<20&&mishkaY>canvas.height-40&&mishkaY<canvas.height){
            haveipaused=1;   
            mishkaX=300;
            mishkaY=20;   
            mdown=false; 
        }
        }
        if(!haveipaused){
        if(umreliwe&&mdown){
            if(mishkaY>=canvas.height-50&&mishkaY<canvas.height&&mishkaX>=canvas.width-100&&mishkaX<canvas.width){
                restart();
            }
        }

        if(pochnameli&&!umreliwe){
            if(!skok){
            colplusplus();
        }
        if(meters<3000){
        spawntree();
        spawnlokva();
        if(meters>10){
        spawncoins();
        }
        }
        nocolusionbetweenitems();
        if(meters>15&&meters<3000){
            spawnlava();
        }
        if(skok){
            //&&!bezsmurten
            colplusplus();
        }
        if(meters>90&&meters<3000){
            spawnhole();
        }
    colusion();
    cameramove();
    }

   
    
    if(was==3&&pochnameli){
        if(mdown&&mishkaX>25&&mishkaX<canvas.width-30){
        move();
        }
    }
    if(!umreliwe){
    if(was==2&&pochnameli&&!skok){
        mkey();
    }

    if(myhealth<=1){
        myhealth=0;
        umreliwe=true;    
    }
    scoreplusplus();

    /*if(meters>=300&&meters<=3000){
        spawnstones();
    }*/
    
    }

    }
  
     deletingg();
    
    }
    if(skok && col>=12){ skok=false;
        ska4amli=false;
    }
	setTimeout(update, 12);	//kolko chesto da se dviji
}

function draw() {	//specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato ni se risuva
     context.clearRect(0, 0, canvas.width, canvas.height);	//NEBAR!
    context.globalAlpha = 1;   
    if(meters<3000){ 	
    for(var i=0;i<brbg;i++){
        if(bgy[i]-cameraY<600){ 
        context.drawImage(bground,bgx[i]-cameraX,bgy[i]-cameraY,canvas.width,210);
        }
    }	

    
    if(!was&&!haveipaused){
    context.drawImage(icomputer,canvas.width-120,canvas.height-40,120,35);
    }

   

    
/*
    for(var i=0;i<broilava;i++){
        context.drawImage(ilava,lavax[i]-cameraX,lavay[i]-cameraY,190,1400);
    }   
    */
    for(var i=0;i<brh;i++){
        context.drawImage(hole,hx[i]-10-cameraX,hy[i]-cameraY,140,80);
    }
    for(var i=0;i<brlava;i++){
        context.drawImage(lava1,95*(Math.floor(lavacol[i])%4),0,95,95,lavax[i]-35-cameraX,lavay[i]-5-cameraY,105,105);
    }
    for(var i=0;i<broilokvi;i++){
     context.drawImage(puddle,lokvax[i]-20-cameraX,lokvay[i]-cameraY,95,50);
    }
    for(var i=0;i<brcoins;i++){
        context.drawImage(icoin,30*(Math.floor(ccol[i])%16),0,30,30,coinx[i]-cameraX,coiny[i]-cameraY,30,30);
    }
    for(var i=0;i<broidurveta;i++){
    context.drawImage(log,durvox[i]-20-cameraX,durvoy[i]-cameraY-20,200,50);
    }
    for(var i=0;i<brstones;i++){
        if(!kufstone[i]){
            context.drawImage(stone2,stonex[i]-cameraX,stoney[i]-cameraY,80,100);
        }
        if(kufstone[i]){
            context.drawImage(stone1,stonex[i]-cameraX,stoney[i]-cameraY,80,100);

        }
    }
    if(!skok){
    context.drawImage(pe6o,128*(Math.floor(col)%13),128*red,128,128,myX-cameraX,myY-cameraY,90,100);
    }
    if(skok){
        red=0;
        context.drawImage(jumpingpe6o,128*(Math.floor(col)%13),0,128,309,myX-cameraX,myY-cameraY-140,90,240);
    }
    
    if(umreliwe){
        context.drawImage(umrq,0,0,canvas.width,canvas.height);
    }
    if(!haveipaused){
        context.drawImage(butonpause,5,canvas.height-30,20,25);
    }
    if(haveipaused){
        context.drawImage(pause,0,0,canvas.width,canvas.height);
        context.drawImage(butonplay,5,canvas.height-30,20,25);
    }

    if(!pochnameli||!was||was==2){
    context.drawImage(cursor,mishkaX,mishkaY,20,25);
    }
    if(pochnameli&&!haveipaused&&meters<15){
        context.fillStyle="LawnGreen";
        context.font="50px Chiller";
        context.fillText("Genereting terrain...",30,220);
        context.fillText("Please, wait!!!",30,290);
    }
    if(pochnameli&&meters>=10&&meters<=25){
        context.fillStyle="LawnGreen";
        context.font="30px Comic Sans MS";
        context.fillText("Play!",myX+10,myY-cameraY-10);
    }
    }
     context.fillStyle="red";
    context.fillRect(canvas.width/2-50,5,myhealth,10);
    context.font="20px Chiller";
    if(myhealth<0){
        myhealth=0;
    }
    context.fillText("Health: "+Math.floor(myhealth)+" / 100",canvas.width/2-50,40,100,10);
    context.fillStyle="white";
    context.font="20px Comic Sans MS";
    context.fillStyle="khaki";
    context.fillText("Score: "+Math.floor(score),canvas.width-120,40);
    context.fillText("Meters: "+Math.floor(meters),10,40);
    context.fillStyle="gold";
	
    if(pochnameli&&!umreliwe){
    context.drawImage(icoin,30*(Math.floor(ccol[1])%16),0,30,30,10,50,30,30);
    }else{
        context.drawImage(icoin,30*0,0,30,30,10,50,30,30);
    }
    context.fillText(coins,40,70);

    if(meters>=3000){
        context.drawImage(win,0,0,canvas.width,canvas.height);
    }

	if(umrqhvlava){
		context.fillStyle="LawnGreen";
		context.font="35px Comic Sans MS";
		context.fillText("Killed by LAVA!",50,400);
	}
	if(umrqhvdurvo){
		context.fillStyle="LawnGreen";
		context.font="35px Comic Sans MS";
		context.fillText("Killed by LOG!",65,400);
	}
	if(padnahvdupka){
		context.fillStyle="LawnGreen";
		context.font="35px Comic Sans MS";
		context.fillText("You have fallen in hole!",10,400);
	}
	
	
    requestAnimationFrame(draw);
}
update();	//purvo vikane. ne go zatrivai!
azmanapp();
drawing();
draw();	//purvo vikane. ne go zatrivai!
