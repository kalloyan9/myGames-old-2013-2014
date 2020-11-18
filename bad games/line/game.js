var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
var canvas = document.getElementById("canvas-id");
canvas.width = 600;
canvas.height = 400;
var context = canvas.getContext("2d");
var ballX=[],ballY=[],how=0,cvqt=[],time=0,posokaX=[],posokaY=[],mode=prompt("0-draw\n1-random",0),pouse=false,color=prompt("0-solid color\n1-incompact color",0);
if (mode==0) alert("Clic to paste\n\"space\" to pause");
else alert("\"space\" to pause");
function make2(){
    ballX[how]=Math.random()*canvas.width;
    ballY[how]=Math.random()*canvas.height;
    cvqt[how]=Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10);
    how++;
}
function make(a,b){
    ballX[how]=a;
    ballY[how]=b;
    cvqt[how]=Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10);
    how++;
}
function getNext(a){
    return (a+1)%how;
}
window.addEventListener("keydown", function (args) {
    if (args.keyCode==32){
        pouse=!pouse;
    }
}, false);

window.addEventListener("keyup", function (args) {  
}, false);

window.addEventListener("mousedown", function (args) {
    if (mode==0) make(args.clientX-8,args.clientY-8);
}, false);


//for (var i=0;i<3i++) make();
function update() {
    if (!pouse){
        if (mode==1 && time%10==0)    make2();
        var x,y,obshto;
        for (var i=0;i<how;i++){
            //if (i!=0 && i<how-1) ballX[i]+=posokaX[i];
            //if (i!=0 && i<how-1) ballY[i]+=posokaY[i];
            if (i>0){
                x=ballX[i]-ballX[getNext(i)];
                y=ballY[i]-ballY[getNext(i)];
                obshto=Math.sqrt(x*x+y*y);
                if (i>0 && i<how-1) 
                    ballX[i]-=x/obshto;
                if (i>0 && i<how-1) 
                    ballY[i]-=y/obshto;
                if (getNext(i)>0 && getNext(i)<how-1) 
                    ballX[getNext(i)]+=x/obshto;
                if (getNext(i)>0 && getNext(i)<how-1) 
                    ballY[getNext(i)]+=y/obshto;
                
            }
        }
        time++;
    }
    setTimeout(update, 10); 
}

function draw() {   
    //context.clearRect(0, 0, canvas.width, canvas.height); 
    if (color==1) context.globalAlpha = 0.05;
    else context.globalAlpha = 1;
    context.strokeStyle="black";
    context.strokeRect(0, 0, canvas.width, canvas.height);  
    for (var i=0;i<how;i++){
        context.beginPath();
        context.fillStyle=cvqt[i];
        //context.arc(ballX[i],ballY[i],i==how-1?10:0,0,Math.PI*2);
        context.closePath();
        context.fill();
        context.beginPath();
        context.lineWidth=5;
        context.strokeStyle=cvqt[i];
        context.moveTo(ballX[i],ballY[i]);
        context.lineTo(ballX[getNext(i)],ballY[getNext(i)]);
        context.closePath();
        context.stroke();
    }
    requestAnimationFrame(draw);    
}
update();   
draw(); 