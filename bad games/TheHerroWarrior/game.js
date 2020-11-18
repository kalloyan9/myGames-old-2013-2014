    var requestAnimationFrame = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) { setTimeout (callback, 1000 / 30); };
    var kakvaRasaSi=0;
    var rilizvamLi=false;
    var kartinka=new Image();
    kartinka.src="primernakartinka.png";
    var canvas = document.getElementById("canvas-id");
    canvas.width = 1000;
    canvas.height =600;
    var context = canvas.getContext("2d");
    ///NE BARAITE REDOVETE NAGORE!
    var kursur=new Image();
    kursur.src="cursor.png";
    var health=100,mana=100;
    var nakoilevelsme=1;
    var daspawnvamli=true,xp=0,vuvedeni=[],tornadosound=new Audio;
    tornadosound.src="tornados.mp3";
    var dvijilisegeroq=false;
    var myX, myY,mishkaX,mishkaY;
    var ekranX=0,ekrany=0;
    var background1=new Image();
    background1.src="background1.jpg",skolkogolddauveli4=3,hoho=new Audio(),hahaha=new Audio(),youdied=new Image();
    youdied.src="youdied.jpg";
    hahaha.src="hahaha.mp3";
    hoho.src=="hoho.mp3";
    var myX=500, myY=100;
    var speed, boenrejim=false,natisnati=[],shopx=100,shopy=200,vshopalisum=false,izvedahli=false,ubiti=0;
    var menu=new Image();
    menu.src="menu.png";
    var natisnatolie=false;
    var level=1, nujnoxpzasllevel=3000;
    var XkadeOtiva=10,YkadeOtiva=100,dvijalise=false,kop4e,
        XOtkadeIdva, otivamNqkyde = false, YOtkadeIdva,umreliwe = false,pause=new Image(),haveipaused=false;
        pause.src="pause.png";
    var cameraX = 0, a=0, cameraY = 0,leveldamage=0,broienemy=0,healthenemy1=[],frame=0,levelspeed=70,ML=true,SHOP=new Image(),salivleznah=false, biqlise=false,swordsound=new Audio();
    var gold=0,tornadok=new Image(),tx,ty,mogalidasedvija=true,enemy1t=[],daizvedali=false,armorlevel=0,imaliarmor=false,red=0,col=[],hero=new Image();
    tornadok.src="tornado.png";
    swordsound.src="swordsound.mp3";
    SHOP.src="shop.png";
    hero.src="hero.png";
    var asteroid=new Image();
    asteroid.src="asteroid.png";
    var t=myX, nakude=new Image(),aktiviranliemeteoritnqdujd=false,broiasteroidi=100,ax=[],ay=[],yd=false;
    nakude.src="nakude.png";
    var killed=0;
    var themdamage=0.2;
    var damage=0,imaliboi=false,damage=2,asa=false,mainsound=new Audio(),restart=false;
    mainsound.src="mainsound.mp3";
    var enemy1y=[],enemy1x=[];
    XOtkadeIdva=13412356782914632157812935;
    YkadeOtiva=542678567895678,stignahli=true,zatvorihlishopa=false,tornado=false,asteroidsattack=false;
    var umrelienemy1=[];
    window.addEventListener("keydown", function (args) { //Vika se pri natiskane na kopche
      if(!haveipaused){
       if(args.keyCode==32){
        natisnatolie=true;
       }
       if(mana>=80&&args.keyCode==49){
        tornado=true;
       }
        }
      }, false);

    window.addEventListener("keyup", function (args) { //vika se pri puskane na kopche natiskano do sega
       a=0;
        if(!umreliwe&&haveipaused&&args.keyCode==82){
            haveipaused=false;
        }
       if(!haveipaused){
        if(args.keyCode==80){
            haveipaused=true;
        }
       
        if(umreliwe&&args.keyCode==82){
            restart=true;
        }
       if(args.keyCode==32){
        natisnatolie=false;
       }
       if(args.keyCode==50){
        asteroidsattack=true;
       }
       if(tornado&&args.keyCode==49){
        tornado=false;
       }else{
        asa=false;
       }
       if(args.keyCode==70){
        boenrejim=true;
       }
       if(boenrejim&&args.keyCode==83){
        boenrejim=false;
       }
       kopche=args.keyCode;
       if(gold>=100&&kopche==68&&vshopalisum){
        damage++;
        gold-=60;
        alert("Congratulations, you upgrade your damagelevel!");
       }
        if(gold>=80&&kopche==65&&vshopalisum){
            gold-=80;
            armorlevel++;
            themdamage-=(armorlevel*0.001);
            imaliarmor= true;
            alert("Congratulations, your armor is NOW upgrade!");
        }
        if(vshopalisum&&args.keyCode==81){
            zatvorihlishopa=true;
            myX+=shopx+3;
            myY=shopy;
        }
        if(vshopalisum&&args.keyCode==75&&gold>=30){
            gold-=30;
            mana=100;
            health=100;
            alert("Congratulations, you have healthed yourself!");
        }
        }
    }, false);

    window.addEventListener("mousemove", function (args) {
        mishkaX=args.clientX-canvas.offsetLeft;
        mishkaY=args.clientY-canvas.offsetTop;
    }, false);
    window.addEventListener("mousedown", function (args) {
        if(!haveipaused){
        if(!vshopalisum){
        XkadeOtiva=mishkaX+cameraX;
        YkadeOtiva=mishkaY+cameraY;
        XOtkadeIdva = myX;
        YOtkadeIdva = myY;
        t = myX;
        otivamNqkyde = true;
    }
    }
    }, false);
    function restartf(){
    kursur.src="cursor.png";
    health=100,mana=100;
    nakoilevelsme=1;
    daspawnvamli=true,xp=0,vuvedeni=[];
    tornadosound.src="tornados.mp3";
    dvijilisegeroq=false;
    myX, myY,mishkaX,mishkaY;
    ekranX=0,ekrany=0;
    background1.src="background1.jpg",skolkogolddauveli4=3;
    youdied.src="youdied.jpg";
    hahaha.src="hahaha.mp3";
    hoho.src=="hoho.mp3";
    myX=500, myY=100;
    speed, boenrejim=false,natisnati=[],shopx=100,shopy=200,vshopalisum=false,izvedahli=false,ubiti=0;
    menu.src="menu.png";
    natisnatolie=false;
    level=1, nujnoxpzasllevel=3000;
    XkadeOtiva=10,YkadeOtiva=100,dvijalise=false,kop4e,
        XOtkadeIdva, otivamNqkyde = false, YOtkadeIdva,umreliwe = false,haveipaused=false;
        pause.src="pause.png";
    cameraX = 0, a=0, cameraY = 0,leveldamage=0,broienemy=0,healthenemy1=[],frame=0,levelspeed=70,ML=true,SHOP=new Image(),salivleznah=false, biqlise=false,swordsound=new Audio();
    gold=0,tornadok=new Image(),tx,ty,mogalidasedvija=true,enemy1t=[],daizvedali=false,armorlevel=0,imaliarmor=false,red=0,col=[],hero=new Image();
    tornadok.src="tornado.png";
    swordsound.src="swordsound.mp3";
    SHOP.src="shop.png";
    hero.src="hero.png";
    asteroid.src="asteroid.png";
    t=myX,aktiviranliemeteoritnqdujd=false,broiasteroidi=100,ax=[],ay=[],yd=false;
    nakude.src="nakude.png";
    killed=0;
    themdamage=0.2;
    damage=0,imaliboi=false,damage=2,asa=false,mainsound=new Audio(),restart=false;
    mainsound.src="mainsound.mp3";
    enemy1y=[],enemy1x=[];
    XOtkadeIdva=13412356782914632157812935;
    YkadeOtiva=542678567895678,stignahli=true,zatvorihlishopa=false,tornado=false,asteroidsattack=false;
    umrelienemy1=[];
    }
    function update() { //specialna funkcia vikashta se periodichno. V neq shte pishem vsqkuf kod za dvijenie
        //if(!dvijilisegeroq){
            if(umreliwe&&restart){
                restartf();
            }
            if(!haveipaused){
            if(!umreliwe){
             mainsound.play();
            }else{
                mainsound.pause();
                hoho.play();
                yd=true;
            }
            if(!vshopalisum){
            if (mishkaX<=50) {
                cameraX-=8;
            }
            if(mishkaX>=900){
                cameraX+=8;
            }
            if (mishkaY<=40) {
                cameraY-=8;
            }
            if(mishkaY>=500){
                cameraY+=8;
            }
            }
        //}
        if(otivamNqkyde && Math.abs(t - XkadeOtiva) > 1&&mogalidasedvija&&ML){
            speed = 2;
            dvijalise=true;
            if(health<=19){
                speed=0.5;
            }
            if(XkadeOtiva-XOtkadeIdva>0){
                t+=speed;
            }else{
                t-=speed;
            }
            dvijilisegeroq=true;
            dvijalise=true;
            myY=(((YkadeOtiva-YOtkadeIdva)/(XkadeOtiva-XOtkadeIdva))*(t-XkadeOtiva)+YkadeOtiva);
            myX = t;
            if(myY<=YkadeOtiva+15&&myX<=XkadeOtiva+15&&myY+30>=YkadeOtiva+15&&myX+30>=XkadeOtiva+15){
                dvijilisegeroq=false;
                dvijalise=false;
            }
            }
        if(daspawnvamli){
            if(frame%levelspeed==0&&!vshopalisum){
                enemy1x[broienemy]=Math.floor(Math.random()*1000);
                enemy1y[broienemy]=Math.floor(Math.random()*800);
                healthenemy1[broienemy]=100;
                umrelienemy1[broienemy]=false;
            }
        }
        broienemy++;
        //spawn
        frame++;
        if(boenrejim){
            speed=0.1;
        }
        if(imaliboi){
            hoho.play();
        }
        for(var i=0;i<broienemy;i++){
            if(!vshopalisum&&enemy1x[i]-50<=myX&&enemy1x[i]+50>=myX&&enemy1y[i]-50<=myY&&enemy1y[i]+50>=myY&&!umrelienemy1[i]){
                health-=themdamage;
                
                swordsound.play();
                imaliboi=true;
                if(boenrejim){
                healthenemy1[i]-=damage;
                biqlise=true;
            }else{
                imaliboi=false;
            }
                if(healthenemy1[i]<=0){
                    gold+=skolkogolddauveli4;
                    xp+=100;
                }
                    if(!imaliboi){
                     swordsound.pause();
                    }
            if(healthenemy1[i]<=0){
                umrelienemy1[i]=true;
                        }else{
                umrelienemy1[i]=false;
            }
        }    
        }
        if(mana<=0){
            mana=0;
            speed=0;
        }                                                              
        for(var i=0;i<broienemy;i++){
            enemy1t[i]=enemy1x[i];
        if(Math.abs(enemy1t[i] - myX) > 5){
            if(myX-enemy1x[i]>0){
                enemy1t[i]+=0.52;
            }else{
                enemy1t[i]-=0.52;
            }
            if(!vshopalisum){
            enemy1y[i]=(((myY-enemy1y[i])/(myX-enemy1x[i]))*(enemy1t[i]-myX)+myY);
            enemy1x[i] = enemy1t[i];
        }
        }
        }
        if(health<=50&&natisnatolie&&mana>=80){
            mana-=70; 
            health+=40;
        }
        if(health<=0){
            umreliwe=true;
        }else{
            if(mana<100&&!umreliwe&&!boenrejim){
                mana+=0.09;
            }
        }
        if(boenrejim){
            mana-=0.05;
        }
        if(dvijilisegeroq=false){
            dvijalise=false;
        }
        if(xp==nujnoxpzasllevel){
            level++;
            xp=0;
            nujnoxpzasllevel+=10000;
            themdamage+=0.5;
            damage=2;
            xp=0;
            armorlevel=0;
            speed=speed;
            skolkogolddauveli4+=2;
            alert("You are now level " + level);
        }
        if(XkadeOtiva<=0 || YkadeOtiva<=0 || XkadeOtiva>=2000 || YkadeOtiva>=1000){
            ML=false;
        }else{
            ML=true;
        }
        if(XkadeOtiva>myX){
            red=3;
        }
        if(XkadeOtiva<myX){
            red=2;
        }
        if(YkadeOtiva>myY){
            red=1;
        }
        if(YkadeOtiva<myY){
            red=4;
        }
        if(myX>=shopx&&myY>=shopy&&myX+30<=shopx+70&&myY+30<=shopy+70){
            vshopalisum=true;
            salivleznah=true;
            zatvorihlishopa=false;
            if(izvedahli){
                salivleznah=false;
            }
            salivleznah=false;
        }else{
            vshopalisum=false;
        }
        if(vshopalisum){
            boenrejim=false;
        }
        if(!vshopalisum&&tornado){
            mana-=7;
            tx=myX-250;
            ty=myY-250;
            if(mana<=30){
                tornado=false;
                xp+=300;
                gold+=skolkogolddauveli4;
            }
        }
        for(var i=0;i<broienemy;i++){
        if(tornado){
        if(enemy1x[i]>=tx&&enemy1x[i]+30<=tx+520&&enemy1y[i]>=ty&&enemy1y[i]+30<=ty+520){
            healthenemy1[i]-100;
            umrelienemy1[i]=true;
         }
        }
        }
        }
     setTimeout(update, 10); //kolko chesto da se dviji
    }

    function draw() { //specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato ni se risuva
        context.clearRect(0, 0, canvas.width, canvas.height); //NEBAR!
        context.globalAlpha = 1;        //NEBAR!
        context.drawImage(background1,ekranX - cameraX,ekrany - cameraY,2000,1000);  
        context.fillStyle="red";
        context.fillRect(myX-cameraX,myY-cameraY-35,health,10);
        context.fillStyle="blue";
        context.fillRect(myX-cameraX,myY-cameraY-15,mana,10); 
        context.fillStyle="yellow";
        context.fillRect(myX -cameraX,myY - cameraY,30,30);
        //purvite 2 argumenta sa koordinati za goren lqv ugul, a sled tva- razmerite po x i y!
            for(var i=0;i<broienemy;i++){
                if(!umrelienemy1[i]){
                context.fillStyle="green";
                context.fillRect(enemy1x[i]-cameraX,enemy1y[i]-cameraY,30,30);
                context.fillStyle="red";
                context.fillRect(enemy1x[i]-cameraX,enemy1y[i]-cameraY-20,healthenemy1[i],10);
            }
            }
            if(salivleznah){
                context.drawImage(hero,0,0,canvas.width,canvas.height);
                izvedahli=true;
            }
            context.fillStyle="purple";
        context.fillRect(shopx-cameraX,shopy-cameraY,70,70);
        if(tornado){
            //context.fillStyle="gray";
            tornadosound.play();
            context.drawImage(tornadok,tx-cameraX,ty-cameraY,500,500);
        }else{
            tornadosound.pause();
        }
        if(dvijalise){
        context.drawImage(nakude,XkadeOtiva-15-cameraX,YkadeOtiva-15-cameraY,30,30);
        }
        if(haveipaused){
            context.drawImage(pause,60,0,canvas.width-90,canvas.height);
        }
        if(yd){
            hoho.play();
            context.drawImage(youdied,0,0,canvas.width,canvas.height);

        }
        context.drawImage(menu,0,0,canvas.width,canvas.height);
         context.fillStyle="#20B2AA";
        context.font="15px Arial";
        context.fillText(nujnoxpzasllevel-xp+" XP left for next level",800,canvas.height-6);
        context.fillStyle="gold";
        context.font="35px Arial";
        context.fillText("Gold:" + gold,100,canvas.height-6);
        context.fillStyle="aqua";
        context.font="35px Arial";
        context.fillText("XP:" + xp,300,canvas.height-6);
        context.fillStyle="white";
        context.font="35px Arial";
        context.fillStyle="Lime";
        context.font="20px Arial";
        context.fillText("Armorlevel: "+ armorlevel,800,canvas.height-27);
        context.fillText("Level:" + level,600,canvas.height-6);
        context.font="20px Arial";
        context.fillText("Fight: "+ boenrejim,40,20);
        if(vshopalisum&&!zatvorihlishopa){
            context.drawImage(SHOP,0,0,canvas.width,canvas.height);
            context.fillStyle="White";
            context.font="30px Arial";
            context.fillText("To close press 'q'.",500,400);
        }if(vshopalisum){
        context.fillStyle="#20B2AA";
        context.font="15px Arial";
        context.fillText(nujnoxpzasllevel-xp+" XP left for next level",800,canvas.height-66);
        context.fillStyle="gold";
        context.font="35px Arial";
        context.fillText("Gold:" + gold,100,canvas.height-46);
        context.fillStyle="aqua";
        context.font="35px Arial";
        context.fillText("XP:" + xp,300,canvas.height-46);
        context.fillStyle="white";
        context.font="35px Arial";
        context.fillStyle="Lime";
        context.font="20px Arial";
        context.fillText("Armorlevel: "+ armorlevel,800,canvas.height-47);
        context.fillText("Level:" + level,600,canvas.height-46);
                context.fillText("Fight: "+ boenrejim,40,20);

        }
        if(umreliwe){
            hahaha.play();
            return;
        }
        context.drawImage(kursur,mishkaX,mishkaY,15,25);
        requestAnimationFrame(draw);    //NEBAR!
        context.beginPath();
       // context.arc(mishkaX,mishkaY,10,0,2*Math.PI);
        context.closePath();
        context.stroke();
    }
    update(); //purvo vikane. ne go zatrivai!
    draw(); //purvo vikane. ne go zatrivai!