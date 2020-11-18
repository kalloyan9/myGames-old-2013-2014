(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
                                function (callback) {
                                    //console.log("fallbacking");
                                    setTimeout(callback, 1000 / 60);
                                };
    window.requestAnimationFrame = requestAnimationFrame;
})();
var canvas = document.getElementById("game-canvas");
var context = canvas.getContext("2d");
///NE BARAITE REDOVETE NAGORE!

var myX=150,myY=120,natisnato=[];


window.addEventListener("keydown", function (args) {    //Vika se pri natiskane na kopche

   natisnato[args.keyCode]=true;

}, false);

window.addEventListener("keyup", function (args) {    //Vika se pri natiskane na kopche
//args.preventDefault();
   natisnato[args.keyCode]=false;
}, false);

function move(){
    if(natisnato[37]&&myX>5){
        myX-=3;
    }
    if(natisnato[39]&&myX<canvas.width-35){
        myX+=3;
    }
}

function update() {




    setTimeout(update, 10);
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);	//NEBAR!
    context.globalAlpha = 1;    				//NEBAR!
    
    context.fillStyle="green";
    context.fillRect(myX,myY,30,30);



    requestAnimationFrame(draw); //NEBAR
}

onReady = function () {
    var zapochnahmeLiDaChertaem = true;
 /*   
    window.addEventListener("mousedown", function () {
        zapochnahmeLiDaChertaem = true; //CHERTAI
    }, false);

    window.addEventListener("mousemove", function (args) {
        if (zapochnahmeLiDaChertaem) {
            var x = args.x || args.clientX; //kude e premestena mishkata po x
            var y = args.y || args.clientY; //kude e premestena mishkata po y

            //dobavqme nova topka i kazvame, che e napulno neprozrachna
            ballsX[ballsCount] = x;
            ballsY[ballsCount] = y;
            ballsAlpha[ballsCount] = 1;
            ballsCount++;
*/
                
            move();

            sendToRoom({ x: x, y: y }); //prashtame do drugite, che sme postavili topka
            //REVIEW: Ask Qshu for this shit.
        }
    }, false);
/*
    window.addEventListener("mouseup", function () {
        zapochnahmeLiDaChertaem = false; //mi, sprqhme
    }, false);
*/
};

userLeft = function (id) {
    //console.log(id + " otide da qde popara");
    //tova se vika, kogato nqkoi izleze ot igrata
}

receiveFromRoom = function (id, data) {
    //kato poluchim suobshtenie ot nqkogo-a, che
    //e postavil topka nqkude, q risuvame tam

    var x = data.x;
    var y = data.y;


}

update();	//purvo vikane. ne go zatrivai!
draw();	//purvo vikane. ne go zatrivai!