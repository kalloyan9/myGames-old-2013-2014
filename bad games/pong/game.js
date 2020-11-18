var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) { setTimeout (callback, 1000 / 30); };

var rilizvamLi=false;
var kartinka=new Image();
kartinka.src="kartinka.png";
var canvas = document.getElementById("canvas-id");
canvas.width = 600;
canvas.height = 400;
var context = canvas.getContext("2d");
///NE BARAITE REDOVETE NAGORE!

var dx = 2, dy = 2;
var myX, myY;  //Suzdadohme promenliva! Tipa i e kakufto i dadete :)
var top4e=new Image();
top4e.src="top4e.png";
var hero;
//var audio=new Audio();
//audio.src="tsundere.mp3";
var heroY=canvas.height/2-50;
myY=200;

myX=150;  //Davame i na4alna stoinost. Qko.

var heroX=1;
var hero2, hero2Y=heroY;
window.addEventListener("keydown", function (args) {    //Vika se pri natiskane na kopche
    args.preventDefault()
    if (args.keyCode==40&&hero2Y+100<canvas.height-5) {
        hero2Y+=5;
    };
    if (args.keyCode==38&&hero2Y>5) {
        hero2Y-=5;
    };
    if(args.keyCode==87&&heroY>5){
        heroY-=5;
    }
    if (args.keyCode==83&&heroY+100<canvas.height-5) {
        heroY+=5;
    };
}, false);

var purvi=0, vtori=0;
function update() { //specialna funkcia vikashta se periodichno. V neq shte pishem vsqkuf kod za dvijenie
    if(purvi<10&&vtori<10){
    if(myX>=canvas.width){
        dx=-(dx);
        purvi++;
      }
    if(myX<=0){
        dx=-(dx);
        vtori++;
        }
    if(myY>=canvas.height){
        dy=-(dy);
    }
    if(myY<=0){
        dy=-(dy);
    }
    if(myX<=30+9&&myX+2>=30&&myY+15>=heroY&&myY+15<heroY+100||myX<=560&&myX+17>=560&&myY+15>=hero2Y&&myY+15<hero2Y+100){
    dx=-(dx);
    }
    myX += dx;
    myY += dy;
    }
//dvijim se postoqnno nadesno

    setTimeout(update, 10); //kolko chesto da se dviji
}
function draw() {   //specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato ni se risuva
    context.clearRect(top4e,0, 0, canvas.width, canvas.height);   //NEBAR!
    context.globalAlpha = 1;                    //NEBAR!
    context.fillStyle="blue";
    context.font="20px Arial";
    context.drawImage(kartinka,0,0,canvas.width, canvas.height);
    context.fillText("Game made by: Kaloqn M.",187,canvas.height-20);
       context.fillStyle="red";
       context.font="50px Arial";
    context.fillText(purvi,canvas.width/2-60,50);
    context.fillText(vtori,canvas.width/2+30,50);
    context.fillStyle = "#F0FF00";//izbor na cvqt

    context.fillRect(myX, myY, 15, 15); //risuvane na zapulnen kvadrat s izbrania cvqt
    //purvite 2 argumenta sa koordinati za goren lqv ugul, a sled tva- razmerite po x i y!
    context.fillStyle="#000000";
     context.fillRect(30,heroY,9,100);
     context.fillStyle="#F00FF0";
     context.fillRect(560,hero2Y,9,100);
     context.fillStyle="red";
     context.font="50px Arial";
     if(purvi==10&&vtori<10){
     context.fillStyle="red";
     context.font="50px Arial";
     context.fillText("YOU WIN!!!",20,200);
     }
     if(vtori==10&&purvi<10){
     context.fillStyle="red";
     context.font="50px Arial";
     context.fillText("YOU WIN!!!",canvas.width-280,200);
     }
  

    //context.drawImage(kartinka,50,50,myX,myY);
   
    context.beginPath();
 //   context.arc(mishkaX,mishkaY,10,0,2*Math.PI);
    context.closePath();
    context.stroke();
 requestAnimationFrame(draw);    //NEBAR!
}
update();   //purvo vikane. ne go zatrivai!
draw(); //purvo vikane. ne go zatrivai!