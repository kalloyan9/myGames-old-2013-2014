var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) { setTimeout (callback, 1000 / 30); };
var canvas = document.getElementById("canvas-id");
canvas.width = 1000;
canvas.height = 800;
var context = canvas.getContext("2d");
var mishkaY,mishkaX;
var me=new Image();
me.src="ship.png";
var red=0, col=1,f=[];
var chicken=new Image();
var b=[];
var egg=new Image();
chicken.src="chicken.png";
///NE BARAITE REDOVETE NAGORE!
var umrelikoko6ka=[];
var x=canvas.width/2-20,y=canvas.height-90,natisnato,q=false;
var px=[], py=[], brp=0;
var kx=[], ky=[], brk=0,kframe=0,kspeed=10,gameover=new Image(),dasnasqmli=[];
gameover.src="gameover.jpg";
var umreliwe=false,restartvamli=false;
var a=[],healthkoko6ka=[],score=0;
var ex=[],ey=[],bre=0;
egg.src="egg.png";
window.addEventListener("keydown", function (args) {    //Vika se pri natiskane na kopche
    natisnato=args.keyCode;
    
}, false);

window.addEventListener("keyup", function (args) {  //vika se pri puskane na kopche natiskano do sega
    natisnato=false;
    col=1;

}, false);

window.addEventListener("mousemove", function (args) {

    mishkaX=args.clientX-canvas.offsetLeft;
    mishkaY=args.clientY-canvas.offsetTop;
    
    
}, false);

function restart(){
red=0, col=1;
x=canvas.width/2-20,y=canvas.height-90,natisnato;
px=[], py=[], brp=0;
ex=[],ey=[];
chicken.src="chicken.png";
umrelikoko6ka=[],f=[];
q=0;
kx=[], ky=[], brk=0,kframe=0,kspeed=10,gameover=new Image();
gameover.src="gameover.jpg";
healthkoko6ka=[];
score=0;
bre=0;
me.src="ship.png";
egg.src="egg.png";
dasnasqmli=[];
b=[];
umreliwe=false,restartvamli=false;
a=[];
restartvamli=false;
}

function mymoving(){
    if(natisnato==37&&x>=15){
        col=0;
        x-=15;
    }
    if(natisnato==39&&x<=canvas.width-60){
        col=2;
        x+=15;
    }   
    if(natisnato==38&&y>=50){
        col=1;
        y-=15;
    }
    if(natisnato==40&&y<=canvas.height-90){
        col=1;
        y+=15;
    }
}
function fire(){
    if(natisnato==32){
        px[brp]=x+8;
        py[brp]=y+50;
        brp++;

    }
    for(var i=0;i<brp;i++){
        py[i]-=50;
        if(py[i]+10<=0){
            delete(py[i]);
            delete(px[i]);
        }
    }
}

function spawnchicken(){
    if(kframe%kspeed==0&&brk<=100){
        kx[brk]=3;
        ky[brk]=canvas.height;
        healthkoko6ka[brk]=100;
        brk++;
    }
    if(brk>100&&score>90){
       // level++;
        alert("a");
    }if(brk>100&&score<90){
        umreliwe=true;
        q=true;
    }
}

function movechicken(){
    for(var i=0;i<brk;i++){
        if(!umrelikoko6ka[i]){
        if(kx[i]==3&&ky[i]>=70){
        ky[i]-=30;
        }
        if(kx[i]<canvas.width-60&&ky[i]<70){
            kx[i]+=30;
        }
        if(kx[i]>=canvas.width-60&&ky[i]<130){
            ky[i]+=10;
        }
        if(kx[i]>=70&&ky[i]>=130){
            kx[i]-=30;
            a[i]=true;
            b[i]=0;
        }
        if(a[i]&&ky[i]>=10&&kx[i]<=70){
            ky[i]+=25;
            b[i]=1;
        }        

     }  
     if(ky[i]>canvas.width&&!umrelikoko6ka[i]){
        if(score>0){
        score--;
        }
     }
    }
}
function sblusukskoko6ka(){
    for(var i=0;i<brk;i++){
        if(x<=kx[i]+40&&x+50>=kx[i]&&y+70>=ky[i]&&y<ky[i]+60){
            umreliwe=true;
            healthkoko6ka[i]-=50;
        }
    }
}
function pucamli(){
    for(var i=0;i<brk;i++){
        for(var j=0;j<brp;j++){
            if(px[j]<=kx[i]+40&&px[j]+4>=kx[i]&&py[j]<=ky[i]){
                px[i]=53678567382976473829;
                py[i]=65748346372846783392;
                healthkoko6ka[i]-=15;
                ky[i]-=15;
                if(healthkoko6ka[i]<=0){
                    score++;
                    umrelikoko6ka[i]=true;
                }

            }
        }
    }
}
function update() { //specialna funkcia vikashta se periodichno. V neq shte pishem vsqkuf kod za dvijenie
    if(!umreliwe){
    sblusukskoko6ka();
    mymoving();
    fire();
    spawnchicken();
    movechicken();
    pucamli();
    kframe++;
    }
    if(umreliwe&&natisnato==82||q&&natisnato==82){
        restartvamli=true;
    }
    if(restartvamli){
        restart();
    }
    for(var i=0;i<brk;i++){
        if(umrelikoko6ka[i]){
            delete(kx[i]);
            delete(ky[i]);
        }
    }
    for(var i=0;i<brk;i++){
        f[i]=Math.floor(Math.random()*15);
        if(ky[i]>=45&&f[i]==11){
            bre++;
            ex[i]=kx[i]+20;
            ey[i]=ky[i]+50;
        }
        ey[i]+=5;
    }


    setTimeout(update, 10); //kolko chesto da se dviji
}

function draw() {   //specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato ni se risuva
    context.clearRect(0, 0, canvas.width, canvas.height);   //NEBAR!
    context.globalAlpha = 1;                    //NEBAR!
    if(!umreliwe&&!q){
    context.drawImage(me,col*41,red,40,45,x,y,50,70);
   for(var i=0;i<brp;i++){
        context.fillStyle="red";
        context.fillRect(px[i],py[i],4,10);
        }
        for(var i=0;i<bre;i++){
            context.drawImage(egg,ex[i],ey[i],10,15);
        }

        for(var i=0;i<brk;i++){
        context.drawImage(chicken,kx[i],ky[i],40,50);
         }
     
     }
     if(umreliwe&&!q){
        context.drawImage(gameover,0,0,canvas.width,canvas.height);
        context.fillStyle="white";
        context.font="20px Arial";
        context.fillText("Press 'r' to restart!",420,600);
     }
     if(q){ 
        context.fillStyle="blue";
        context.font="30px Arial";
        context.fillText("Your score must be more than: 90!\nPress 'r' to restart!",220,600);
     }
    /*
    context.beginPath();
    context.arc(mishkaX,mishkaY,10,0,2*Math.PI);
    context.closePath();
    context.stroke();
    */

        requestAnimationFrame(draw);    //NEBAR!

}
update();   //purvo vikane. ne go zatrivai!
draw(); //purvo vikane. ne go zatrivai!