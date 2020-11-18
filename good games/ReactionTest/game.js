var requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) { setTimeout (callback, 1000 / 30); };

var canvas = document.getElementById("canvas-id");
canvas.width = 800;
canvas.height = 600;
var context = canvas.getContext("2d");
///NE BARAITE REDOVETE NAGORE!
var mishka={};
var enemy={};
mishka.down=false;var hasan4o=false;
enemy.x=[],enemy.y=[],enemy.br=0, enemy.frame=[],enemy.daspawnvamli=false,enemy.killed=[],enemy.a=0,enemy.image=[];
var sec=0;var q6u=false;var score=0;mishka.secnatisnato=0;
var guz=1000;
var pederast=[];
enemy.secpoqvqvane=[];
var vkoqsekundaenatisnato,sredno=0;
enemy.korzateb=false;
for(var i=0;i<10;i++)
{
  var p;
  enemy.image[i]=new Image();
  p=Math.floor(Math.random()*2);
  enemy.image[i].src='p'+p+".png";
  pederast[i]=-10;
}
pederast[10]=-10;
pederast[11]=-10;
pederast[0]='Click anywhere when you see a pig';
window.addEventListener("keydown", function (args) {	//Vika se pri natiskane na kopche
    

}, false);

window.addEventListener("mousedown", function (args) {    //Vika se pri natiskane na kopche
   if(!q6u){
   mishka.down=true;
   mishka.secnatisnato=sec;
 }
}, false);
var havesomethingkillable=false;
window.addEventListener("mouseup", function (args) {	//vika se pri puskane na kopche natiskano do sega
  mishka.down=false;
}, false);

window.addEventListener("mousemove", function (args) {
    mishka.x=args.clientX-canvas.offsetLeft;
    mishka.y=args.clientY-canvas.offsetTop;
}, false);

function update() {	//specialna funkcia vikashta se periodichno. V neq shte pishem vsqkuf kod za dvijenie
  if(!hasan4o)
  {
if(!q6u)
{
	if(sec%5==0)
  {
    enemy.daspawnvamli=Math.floor(Math.random()*3);
    if(enemy.daspawnvamli==2) enemy.daspawnvamli=0;
  }
  if(enemy.daspawnvamli && enemy.a>=100 && sec>5 && enemy.br<11)
  {
    enemy.x[enemy.br]=Math.random()*canvas.width-100;
    enemy.frame[enemy.br]=1;
    enemy.y[enemy.br]=Math.random()*canvas.height-100;
   if(enemy.x[enemy.br]<=110)
   {
    enemy.x[enemy.br]=120+Math.random()*90;
   }
   if(enemy.x[enemy.br]>=canvas.width-150)
   {
    enemy.x[enemy.br]=canvas.width-160-Math.random()*50;
   }
  if(enemy.y[enemy.br]<90)
  {
    enemy.y[enemy.br]=100+Math.random()*80;
  }   
  if(enemy.y[enemy.br]>canvas.height-90)
  {
    enemy.y[enemy.br]=canvas.height-90-Math.random()*80+1;
  }
     


    enemy.secpoqvqvane[enemy.br]=sec;
    ++enemy.br;
    enemy.a=0;
    enemy.daspawnvamli=false;
  }
  if(mishka.down && !havesomethingkillable) q6u=true;
  for(var i=0;i<enemy.br;i++)
  {
    enemy.frame[i]+=10;
    if(enemy.frame[i]!=-1)
      if(!enemy.killed[i] && enemy.frame[i]>1 && enemy.frame[i]<guz)
      {
        havesomethingkillable=true;
        if(mishka.down)
        {
          pederast[enemy.br]=sec-enemy.secpoqvqvane[i];
          if(pederast[enemy.br]>0)
            pederast[enemy.br]-=2;
          if(enemy.br<2)
          {
            sredno=pederast[enemy.br];
          }
          else
          {
            sredno+=pederast[enemy.br];
            sredno/=2;
          }
          enemy.killed[i]=true;
          score+=10;
          mishka.down=false;
          havesomethingkillable=false;
        }
      }
      if(enemy.frame[i]>guz || enemy.killed[i])
      { 
        deleteenemy(i);
      }
  }
  if(mishka.down && sec>mishka.secnatisnato) mishka.down=false;
  enemy.a+=Math.random()*0.3+0.3;
  if(enemy.a>=100) enemy.a=100;
  if(mishka.down ) if(!havesomethingkillable) q6u=true

    if(enemy.br>=11 ) enemy.korzateb=true;

}

else 
{
  q6u=true;
}
}
    setTimeout(update, 10);	//kolko chesto da se dviji
}

function deleteenemy(i)
{
  delete(enemy.x[i]);
  delete(enemy.y[i]);
  havesomethingkillable=false;
  enemy.frame[i]=-1;
}

function spawn()
{
  if(!hasan4o)
  if(!q6u)
	sec++;
	setTimeout(spawn,10);
}
var s=0;
function spp()
{
  if(!hasan4o)
  if(!q6u)
  s++;
  setTimeout(spp,1000);
}


function draw() {	//specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato ni se risuva
    context.clearRect(0, 0, canvas.width, canvas.height);	//NEBAR!
    context.globalAlpha = 1;    				//NEBAR!
	

/*    context.beginPath();
    context.arc(mishkaX,mishkaY,10,0,2*Math.PI);
    context.closePath();
    context.stroke();*/

  if(!q6u)
  {
    for(var i=0;i<enemy.br;i++)
    {
      if(enemy.br<11)
      if(enemy.frame[i]!=-1)
      {
        context.drawImage(enemy.image[i],enemy.x[i],enemy.y[i],150,100);
      }
    }

    context.fillStyle='red';
    context.font='20px Arial';

    if(pederast[enemy.br]!=-10)
      context.fillText("Reaction time: "+pederast[enemy.br]*10+" ms ",10,30);
    else
      context.fillText("Reaction time: "+pederast[enemy.br-1]*10+" ms",10,30);
   } 
  
   if(enemy.br>=11)
   {
      context.fillStyle='red';
      context.font='20px Comic Sans MS';
      context.fillText("AVG time: "+sredno*10,140,160);
      context.fillText("F5 to play again!",140,190);
      hasan4o=true;
   }

    if(q6u)
    {
      context.fillStyle="red";
      context.font="40px Chiller";
      context.fillText("Game over!  F5 to play again!", 80, 120);
      context.fillText("AVG time: "+sredno*10,140,160);
    }




  requestAnimationFrame(draw);    //NEBAR!

}
update();	//purvo vikane. ne go zatrivai!
draw();	//purvo vikane. ne go zatrivai!
spawn();
spp();