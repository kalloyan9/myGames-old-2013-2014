var requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) { setTimeout (callback, 1000 / 30); };

var canvas = document.getElementById("canvas-id");
canvas.width = 1000;
canvas.height = 500;
var context = canvas.getContext("2d");
///NE BARAITE REDOVETE NAGORE!
var mishka={};
mishka.down=false;

var menu={};
menu.barImage=new Image();
menu.barImage.src="Images//border.png";

var camera={};
camera.x=0, camera.y=0, camera.move=false;

var me={}, enemy={};
me.level=1, me.xp=0, me.kolkotrqbvadaspawna=0, me.gold=100, me.mana=100, me.canImove=[];
me.br=0, me.x=[], me.y=[], me.health=[], me.rasa=[], me.attack=[], me.power=[];
me.rasa=[];



enemy.canImove=[], enemy.rasa=[];
enemy.attack=[], enemy.power=[];
enemy.br=0, enemy.x=[], enemy.y=[], enemy.frame=0, enemy.levelspeed=700/me.level, enemy.health=[];

window.addEventListener("keydown", function (args) {	//Vika se pri natiskane na kopche
    

}, false);


window.addEventListener("keyup", function (args) {	//vika se pri puskane na kopche natiskano do sega
   

}, false);
window.addEventListener("mousemove", function (args) {
    mishka.x=args.clientX-canvas.offsetLeft;
    mishka.y=args.clientY-canvas.offsetTop;
    camera.move=true;
}, false);


window.addEventListener("mousedown", function (args) {    //Vika se pri natiskane na kopche
    mishka.down=true;
    console.log(me.rasa[me.kolkotrqbvadaspawna]);
}, false);


window.addEventListener("mouseup", function (args) {    //Vika se pri natiskane na kopche
    mishka.down=false;
 
}, false);

function moveCamera(){
    if(mishka.x>=canvas.width-50 && camera.x+canvas.width<2010){
        camera.x+=10;
    }
    if(mishka.x<=50 && camera.x>-5){
        camera.x-=10;
    }

    setTimeout(moveCamera,10);
}

function update() {	//specialna funkcia vikashta se periodichno. V neq shte pishem vsqkuf kod za dvijenie
    if(mishka.down && me.mana>=100 && mishka.x>=50 && mishka.x<= 70 + 50 && mishka.y>= 205 && mishka.y<= 205+50){
        me.rasa[me.kolkotrqbvadaspawna]=1;
        me.kolkotrqbvadaspawna++; 
        me.mana=0;
        mishka.down=false;
    }	
    if(mishka.down && me.mana>=100 && mishka.x>=50 && mishka.x<= 70 + 50 && mishka.y>= 205+50+15 && mishka.y<= 205+50+15+50){
        me.rasa[me.kolkotrqbvadaspawna]=1;
        me.kolkotrqbvadaspawna++; 
        me.mana=0;
        mishka.down=false;
    }   


    if(me.mana<100) me.mana++;
    
    


    setTimeout(update, 10);	//kolko chesto da se dviji
}

function spawnme(){
    if(me.kolkotrqbvadaspawna){
        if(me.rasa[me.br]==1){
            me.br++;
            me.x[me.br]=10;
            me.y[me.br]=canvas.height-300;
            me.health[me.br]=100;
            me.power[me.br]=0.3;
            me.canImove[me.br]=true;
            me.kolkotrqbvadaspawna=1;
        }
        if(me.rasa[me.br]==2){
            me.br++;
            me.x[me.br]=10;
            me.y[me.br]=canvas.height-200;
            me.health[me.br]=200;
            me.power[me.br]=0.9;
            me.canImove[me.br]=true;
            me.kolkotrqbvadaspawna=2;
        }

        
        

    }


    setTimeout(spawnme, 10);
}

function moveme(){
    for(var i=0;i<me.br;i++){
        if(me.canImove[i]){
            me.x[i]+=3;
        }else{
            me.x[i]=me.x[i];
        }
    }

    


    setTimeout(moveme, 10);
}

function spawnenemy(){
    if(enemy.frame%enemy.levelspeed==0){
        enemy.x[enemy.br]=1940;
        enemy.y[enemy.br]=canvas.height-300;
        enemy.rasa[enemy.br]=1;
        enemy.health[enemy.br]=100;
        enemy.power[enemy.br]=0.3;
        enemy.canImove[enemy.br]=true;
        enemy.br++;
    }
    if(enemy.frame%enemy.levelspeed==500){
        enemy.x[enemy.br]=1940;
        enemy.y[enemy.br]=canvas.height-200;
        enemy.rasa[enemy.br]=2;
        enemy.health[enemy.br]=200;
        enemy.power[enemy.br]=0.9
        enemy.canImove[enemy.br]=true;
        enemy.br++;

    }
    enemy.frame++;


    if(enemy.frame>=10000) enemy.frame=0;

    for(var i=0;i<enemy.br;i++){
        if(enemy.canImove[i])  enemy.x[i]-=3;
    }



    setTimeout(spawnenemy, 10);
}


function attack () {

    for(var i=0;i<me.br;i++){
        
            for(var j=0;j<enemy.br;j++){
         
                    if(  me.x[i]+70 >= enemy.x[j] && me.rasa[i]==enemy.rasa[j]){
                        me.canImove[i]=false;
                        enemy.canImove[j]=false;
                        me.health[i]-=enemy.power[j];
                        enemy.health[j]-=me.power[i];
                    }
                   
                    if(me.health[i]<=-5){
                        delete(me.x[i]);
                        delete(me.y[i]);
                        delete(me.rasa[i]);
                        delete(me.power[i]);
                        delete(me.canImove[i]);
                        delete(me.health[i]);
                        enemy.canImove[j]=true;


                    }
                   
                    if(enemy.health[j]<=-5){
                        delete(enemy.x[j]);
                        delete(enemy.y[j]);
                        delete(enemy.rasa[j]);
                        delete(enemy.power[j]);
                        delete(enemy.canImove[j]);
                        delete(enemy.health[j]);
                        me.canImove[i]=true;
                    }
            }
    }



    setTimeout(attack, 10);
}




function draw() {	//specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato ni se risuva
    context.clearRect(0, 0, canvas.width, canvas.height);	//NEBAR!
    context.globalAlpha = 1;    				//NEBAR!
	
    context.fillStyle="purple";
    context.fillRect(0-camera.x,0-camera.y,2000,canvas.height);
	

    for(var i=0;i<me.br;i++){
        context.fillStyle="Yellow";

        context.fillRect(me.x[i]-camera.x, me.y[i], 50, 120);
        context.fillStyle="red";
        context.fillRect(me.x[i]-camera.x, me.y[i]-15, me.health[i], 10);
    }



    for(var i=0;i<enemy.br;i++){
        context.fillStyle="Green";

        context.fillRect(enemy.x[i]-camera.x, enemy.y[i], 50, 120);
        context.fillStyle="red";
        context.fillRect(enemy.x[i]-camera.x, enemy.y[i]-15, enemy.health[i], 10);
    }



    context.fillStyle="blue";
    context.fillRect(canvas.width/2-50,canvas.height-30,me.mana,10);





    context.fillStyle='gold';
    context.font='30px Chiller';
    context.fillText('Gold: '+me.gold, canvas.width-100, 30);






    context.drawImage(menu.barImage, 50 ,200, 70, canvas.height-205);


    context.fillStyle="Green";
    context.fillRect(50,205,70,50);
    context.fillRect(50,205+50+5,70,50);

    context.fillStyle="Yellow";
    context.font="30px Arial";
    context.fillText("1",70,240);
    context.fillText("2",70,240+50);
    context.fillText("br:" + me.br + " " + me.rasa[2] , 100 ,100);








    context.fillStyle="white";
    context.beginPath();
    context.arc(mishka.x,mishka.y,10,0,2*Math.PI);
    context.closePath();
    context.fill();



    requestAnimationFrame(draw);    //NEBAR!

}
update();	//purvo vikane. ne go zatrivai!
moveCamera();
spawnme();
moveme();
spawnenemy();
attack();
draw();	//purvo vikane. ne go zatrivai!