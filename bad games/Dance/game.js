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
var myX, myY,mishkaX,mishkaY;  //Suzdadohme promenliva! Tipa i e kakufto i dadete :)
myY=100; tframe=0,tspeed=70,tx=[],ty=[],where=0,cbrt=0,skolkodasenamalqva=5,cannon=new Image();
var brt=0,up=new Image(),down=new Image(),left=new Image(),right=new Image();  
cannon.src="cannon.png";
up.src="up.png";
down.src="down.png";
right.src="right.png";
left.src="left.png";
var cx=[],cy=[],brc=4,cannon2=new Image(),ct=t;
cannon2.src="cannon2.png";
myX= 10;
var t=0;
var natisnato=false;
window.addEventListener("keydown", function (args) {	//Vika se pri natiskane na kopche
if(natisnato==0){
        natiskano=args.keyCode;
        }
}, false);

window.addEventListener("keyup", function (args) {	//vika se pri puskane na kopche natiskano do sega 
        if(natisnato!=0){
            natisnato=true;
        }

}, false);

window.addEventListener("mousemove", function (args) {
    mishkaX=args.clientX-canvas.offsetLeft;
    mishkaY=args.clientY-canvas.offsetTop;
}, false);

function update() {	
   if(tframe%tspeed==0){
    where=Math.floor(Math.random()*5);
    if(where==0){
        tx[brt]=30;
    }
    if(where==1){
        tx[brt]=120;
    }
    if(where==2){
        tx[brt]=210;
    }
    if(where==3){
        tx[brt]=300;
    }
    for(var i=0;i<brt;i++){
    if(natisnato==37&&tx[i]==30){
        t++;
        ct++;
        
    }
    if(natisnato==38&&tx[i]==120){
        t++;
        ct++;
    }
    if(natisnato==40&&tx[i]==210){
        t++;
        ct++;
    }
    if(natisnato==39&&tx[i]==300){
        t++;
        ct++;   
    }
    }
    ty[brt]=canvas.height-30;
   }
   if(ct>10){
    skolkodasenamalqva+=5;
    ct=0;
   }
   for(var i=0;i<brt;i++){
    ty[i]-=skolkodasenamalqva;
    if(ty[i]<=20){
        delete(ty[i]);
    }
   }
    if(cbrt>=20){
        cbrt=0;
    }
    cbrt++;
    brt++;
    tframe++;
	setTimeout(update, 10);
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.globalAlpha = 1;
    for(var i=0;i<brt;i++){
    context.fillStyle="#7CFC00";
    context.beginPath();
    context.arc(tx[i],ty[i],20,0,2*Math.PI);
    context.closePath();
    context.fill();
    }
    context.drawImage(left,0,200,60,40);
    context.drawImage(up,100,200,40,60);
    context.drawImage(down,190,200,40,60);
    context.drawImage(right,280,200,60,40);
    context.drawImage(cannon,0,canvas.height-40,60,40);
    context.drawImage(cannon,90,canvas.height-40,60,40);
    context.drawImage(cannon,180,canvas.height-40,60,40);
    context.drawImage(cannon,270,canvas.height-40,60,40);
    context.drawImage(cannon2,0,0,60,40)
    context.drawImage(cannon2,90,0,60,40);
    context.drawImage(cannon2,180,0,60,40);
    context.drawImage(cannon2,270,0,60,40);
    context.fillStyle="blue";
    context.fillRect(500-150,0,1000,canvas.height);
    var gradient=context.createLinearGradient(200, 200, 900, 10);
        gradient.addColorStop(0.37, 'Aqua');
        gradient.addColorStop(0.40, 'red');
        gradient.addColorStop(0.50, 'gold');
        gradient.addColorStop(0.60, 'white');
        gradient.addColorStop(0.70, '#c64488');
        context.fillStyle=gradient;
        context.font="30pt Verdana sans-serif";
        context.fillText("SCORE: "+t, 370, 50);
        context.font="30pt Verdana sans-serif";

    requestAnimationFrame(draw);
}
update();
draw();