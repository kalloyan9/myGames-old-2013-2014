var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) { setTimeout (callback, 1000 / 30); };

var canvas = document.getElementById("canvas-id");
canvas.width = 1000;
canvas.height = 500;
var context = canvas.getContext("2d");
var myX, myY,mishkaX,mishkaY;
var dvijenie=false,di6ane=new Image(),red=0,col=0,col1=0,red1=0,desno=false,praf=new Image(),natisnato,ataka=false,prav=false,kra4ka=new Image();
praf.src="prav.png";
var za6tita=false,sk=new Image(),lo6di6ane=new Image(),rsound=new Audio(),za6titavalisemangala=false,zarejdali=false,superjump=false,ritamli=false,kick=new Image(),rotatekicking=false;
kick.src="mykick.png";
lo6di6ane.src="di6adrugiq.png";
rsound.src="river.mp3";
var myhealth=100,lhealth=100,drkick=new Image(),dvijilise=false,lx=canvas.width-360,ly=canvas.height-200,sa=new Image(),specialnaataka=false;
sa.src="specialattack.png";
drkick.src="rotattekick.png";
sk.src="superkick.png";
di6ane.src="di6ane.png";
var di6amli=true,myMana=100,svur6ili=true,toisedviji=new Image(),blok=new Image(),clx=lx,blokiramli=false,kpi=11,koprai6wemladej,lmana=100;
blok.src="drattack.png";
kra4ka.src="move.png";
toisedviji.src="negovodvij.png";
myY=canvas.height-200;
myX= 120;

window.addEventListener("keydown", function (args) {    //Vika se pri natiskane na kopche
    args.preventDefault();
    if(!natisnato){
    natisnato=args.keyCode;
    }
   
    myY=canvas.height-200;



}, false);

window.addEventListener("keyup", function (args) {  //vika se pri puskane na kopche natiskano do sega
    args.preventDefault();
    specialnaataka=0;
    natisnato=false;
    desno=false;
    ataka=false;
    rotatekicking=false;
    dvijenie=false;
    di6amli=true;
    prav=false;
    za6tita=false;
    superjump=false;
    col=0;
    myY=canvas.height-200;
    ritamli=false;
}, false);

window.addEventListener("mousemove", function (args) {

    mishkaX=args.clientX-canvas.offsetLeft;
    mishkaY=args.clientY-canvas.offsetTop;
    
}, false);




function kicking() {
    if(natisnato==69&&!dvijenie&&!superjump&&!za6tita&&!prav){
        ataka=true;
        di6amli=false;
        col+=0.2;
        if(col==5){
            col=0;
            ritamli=false;
            di6amli=true;
        }
    }
}

/*
function kodapraitozdebil(){
    if(ataka){
        koprai6wemladej=Math.floor(Math.random()*3);

    }

}
*/

function speciallatacking(){
    col++;
    if(col>4&&col<11&&myX+160<=canvas.width-365){
        myX+=5;
        if(myX+150>=lx&&lx<=canvas.width-365){
            lx+=5;
        }
    }
    if(col===11){
        myX-=22;
        col=0;
    }

}

function randtheother(){
    if(!dvijilise){
    col1+=0.1;
    if(col1 === 5){
        col1 = 0;
    }
    }
    if(dvijilise){
        col1+=0.2;
        if(col1>=3){
            col1=0;
        }
    }
    if(lhealth>42&&lx>=myX+124&&!desno){
        lx-=3;
    }    
    if(!desno&&lx<canvas.width-365&&lhealth<45&&lmana>=40){
        lx+=7;
    }
    if(!desno&&lx>myX+124||desno&&lx<=canvas.width-365||lhealth>70&&lx>=myX+124&&!desno){
        dvijilise=true;
    }else{
        dvijilise=false;
    }
     if(desno&&lx<canvas.width-365){
        lx+=5;
    }
    if(lmana<=22&&lx>=400&&!desno){
        lx-=3;
        if(lx-20<=myX+150){
            zarejdali=true;
            myX-=5;
        }else{
            zarejdali=false;
        }
    }
    if(lx<=600&&lmana<70){
        zarejdali=false;
        lmana++;
    }
    if(lx>=canvas.width-365&&lhealth<70&&lmana>=10){
        zarejdali=true;
        lmana-=Math.floor(Math.random()*4+1);
        lhealth+=(5+Math.random()*4+0.9);
    }
}

function di6am(){
    if(!ataka&&!rotatekicking){
    col+=0.1;
    if(col === 5){
        col = 0;
    }
    }
}
function pr(){
    if(prav&&!superjump&&!rotatekicking){
        red=0;
        col+=0.1;
        if(col==3){
            ataka=false;
            col=0;
        }
    }
} 

function za6titag(){
    if(!superjump&&!ritamli&&!rotatekicking){
        ataka=false;
        di6amli=false;
        dvijenie=false;
        red=0;
        col+=0.1;
        if(col==3){
            col=0;
        }
    }
}

function rokick(){
    ataka=true;
    col+=0.2;
    if(col==7){
        natisnato=false;
        rotatekicking=false;
        col=0;
    }
    
}

function superjumping(){
    if(!za6tita&&!prav&&!ritamli&&!rotatekicking&&myX+150<lx){
    if(kpi>0){
        dvijenie=false;
        ataka=true;
    if(myX+130<=lx){
        superjump=true;
        ataka=true;   
        col+=0.2;
        myX+=7;
        if(col<=6){
        myY-=7;
        }
        if(col>=10){
        natisnato=false;
        superjump=false;
        di6amli=true;
        col=0;
        ataka=false;
        kpi=-10;
        myY=canvas.height-200;
        col=0;
        }

        }
    }
    if(myX+100>=lx){
        ataka=false;
        natisnato=false;
        superjump=false;     
        di6amli=true;
        myY=canvas.height-200;
        col=0;
        }
    }
}

function zemidamage(){
    if(ritamli&&!za6titavalisemangala&&col>=4){
        lhealth-=0.15;
      
    }
    if(rotatekicking&&!za6titavalisemangala&&col>=6){
        lhealth-=0.09;
        

    }
    if(prav&&!za6titavalisemangala&&col>=3){
        lhealth-=0.05;
    }

}


function update() { 

    //rsound.play();

    randtheother();
    
    if(lhealth<=0){ 
        alert("You win!!!");
        return;
    }
    if(myhealth<=0){
        alert("You died!!!");
        return;
    }
    if(myX+150>=lx){
        zemidamage();
    }
    if(natisnato==67&&!dvijenie&&!superjump&&!za6tita&&!prav&&!ritamli){
        rotatekicking=true;
    }
    if(rotatekicking){
        rokick();
    }    
    if(natisnato==69&&!dvijenie&&!superjump&&!za6tita&&!prav&&!rotatekicking){
        ritamli=true;
        ataka=true;
    }
    if(natisnato==68&&!dvijenie&&svur6ili&&!rotatekicking){
        ataka=true;
        prav=true;
        pr();
    }
    if(!superjump){
        if(kpi<10){
            kpi+=0.5;
        }
    }
    if(ritamli){
        kicking();
    }
        if(natisnato==65&&!dvijenie&&!rotatekicking){
            za6tita=true;
            za6titag();
    }
    if(natisnato==38){
        if(kpi>0){
        superjumping();
        kpi-=0.2;
        }
    }
    if(!ataka&&natisnato==37&&myX>=5&&!superjump){
        di6amli=false;
        dvijenie=true;
        myX-=5;
        col+=0.2;
        if(col>=3){
            col=0;
        }
    }
    if(!ataka&&natisnato==39&&myX+100<lx&&!superjump){
        if(myX+130>=lx){
        desno=true;
        }else{
            desno=0;
        }
        di6amli=false;
        dvijenie=true;
        myX+=5;
        col+=0.2;
        if(col>=3){
            col=0;
        }
    }
    if(!natisnato){
        ataka=false;
        prav=false;
    }
    if(!natisnato){
    di6am();
    }
    setTimeout(update, 10); //kolko chesto da se dviji
}

function draw() {   //specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato ni se risuva
    context.clearRect(0, 0, canvas.width, canvas.height);   //NEBAR!
    context.globalAlpha = 1;    
    context.fillStyle="red";
    context.fillRect(380,0,myhealth,10);
    context.fillRect(520,0,lhealth,10);
    context.font="25px Chiller";
    context.fillText(Math.floor(myhealth)+" / 100",385,30);
    context.fillText(Math.floor(lhealth)+" / 100",525,30);
    context.fillStyle="aqua";
    context.fillRect(520,40,lmana,10);
    context.fillRect(380,40,myMana,10);
    context.font="25px Chiller";
    context.fillText(lmana+" /100",525,70);
    context.fillText(myMana+" /100",385,70);
    if(di6amli&&!ataka&&!dvijenie&&!superjump&&!ritamli&&!rotatekicking&&!specialnaataka){
    context.drawImage(di6ane,72*(Math.floor(col) % 6),95*red,72,95,myX,myY,105,150);    //risuvane na zapulnen kvadrat s izbrania cvqt
    }
    if(prav&&svur6ili&&!za6tita&&!ritamli&&!rotatekicking&&!specialnaataka){
        context.drawImage(praf,110*(Math.floor(col) % 3),109*red,110,109,myX,myY,150,150);
    }
    if(dvijenie&&!prav&&!ataka&&!za6tita&&!ritamli&&!rotatekicking&&!specialnaataka){
        context.drawImage(kra4ka,72*(Math.floor(col) % 3),109*red,72,109,myX,myY,90,150);
    }
    if(za6tita&&!ritamli&&!rotatekicking&&!specialnaataka){
        context.drawImage(blok,108*(Math.floor(col)%3),109*red,109,109,myX,myY-7,150,155);
    }
    if(superjump&&!za6tita&&!prav&&!ritamli&&!rotatekicking&&!specialnaataka){
        context.drawImage(sk,92*(Math.floor(col)%11),109*red,92,109,myX,myY,140,155);
    }
    if(ritamli&&!rotatekicking&&!specialnaataka){
        context.drawImage(kick,102*(Math.floor(col)%5),97*red,102,97,myX,myY,140,155);
    }
    if(rotatekicking&&!dvijenie&&!superjump&&!za6tita&&!prav&&!ritamli&&!specialnaataka){
        context.drawImage(drkick,98*(Math.floor(col)%7),83*red,96,83,myX,myY,140,145);
    }
    if(specialnaataka){
        context.drawImage(sa,106*(Math.floor(col)%11),91*red,106,91,myX,myY,150,145);
    }

    if(!dvijilise){
    context.drawImage(lo6di6ane,72*(Math.floor(col1) % 6),95*red1,70,95,lx-20,ly,105,150);
    }
    if(dvijilise){
    context.drawImage(toisedviji,72*(Math.floor(col1) % 3),109*red1,72,109,lx-20,ly,90,150);
    }

    requestAnimationFrame(draw);    //NEBAR!
    /* 
    context.beginPath();
    context.arc(mishkaX,mishkaY,10,0,2*Math.PI);
    context.closePath();
    context.stroke();
    */
}
update();   //purvo vikane. ne go zatrivai!
draw(); //purvo vikane. ne go zatrivai!