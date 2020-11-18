coin.sound0=new Audio();
coin.sound1=new Audio();
coin.sound1.src="Sounds//coin_sound.mp3";
coin.sound0.src="Sounds//coin_sound.mp3";

function colusionbetweenmeandcoin(){

    for(var i=0;i<coin.br;i++){
        if(!me.jump&&me.x+25<=coin.x[i]+25&&me.x+55>=coin.x[i]&&me.y+100>=coin.y[i]&&me.y+30<coin.y[i]+25){
            delete(coin.x[i]);
            delete(coin.y[i]);
            delete(coin.red[i]);
            delete(coin.col[i]);
            coin.subrani++;
            if(coin.subrani%2==0){
                coin.sound0.play();
            }else coin.sound1.play();
        }
    }

    setTimeout(colusionbetweenmeandcoin, 10);
}

function clearlag(){
    for(var i=0;i<coin.br;i++){
        if(coin.y[i]>canvas.height){
            delete(coin.x[i]);
            delete(coin.y[i]);
            delete(coin.red[i]);
            delete(coin.col[i]);
        }

    }

    setTimeout(clearlag, 1);
}
clearlag();
colusionbetweenmeandcoin();