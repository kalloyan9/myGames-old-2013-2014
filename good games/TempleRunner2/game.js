var requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(a){setTimeout(a,1E3/30)},b=document.getElementById("canvas-id");b.width=400;b.height=600;var c=b.getContext("2d"),d,e=[],f=!1,g=100,h,aa=new Image,k,m,p=!1,ba=new Image,q=4,r=0,s,da;ba.src="pe6o.png";
var ea=new Image,fa=new Image,ga=new Image,t=0,ha=t,u=0,ia=[],ja=100,v=!0,ka=new Image,w=0,la=new Image,ma=new Image,na=new Image,x=!1,y=0,z=0,oa=0,pa=new Image,qa=new Image;pa.src="stone1.png";fa.src="win.png";ga.src="pause.png";ea.src="play.png";ma.src="umrq.png";azmana=100;na.src="cursor.png";qa.src="stone2.png";h=b.height-120;d=b.width/2-45;da=h;s=d;var ra=!1;aa.src="jumpingpe6o.png";
var sa=new Image,ta=new Image,A=0,ua=120,B=[],C=[],va=new Image,D=0,E=[],F=[],wa=[],xa=new Image,G=[],H=[],I=0,ya=20,za=0,J=[],K=[];xa.src="coin.png";ta.src="lava.png";var Aa=!1,Ba=!1,Ca=!1;sa.src="puddle.png";la.src="gp.png";va.src="log.png";var Da=new Image;Da.src="phone.png";var Ea=new Image,y=0,x=!1,Fa=new Image,Ga=0,Ha=140,L=[],M=[],N=0;Ea.src="computer.png";Fa.src="hole.png";new Image;var Ia=0,P=[],B=[],C=[],Ja=new Image;Ja.src="bg.png";ka.src="jumpingpe6o.png";
var Q=[],R=[],S=0,Ka=0,T=200,La=5,U=[],V=[],W=0,Ma=0,X=100,Y=0,Z=Y,Na=[],Oa=[],Pa=0,Qa=0,Ra=40,$=!1,Sa=[];window.addEventListener("keydown",function(a){$||(e[a.keyCode]=!0)},!1);window.addEventListener("keyup",function(a){f||(e[a.keyCode]=!1,q=4);ia[a.keyCode]=!0;ia[87]&&99<=azmana&&($=!0,r=azmana=0);ia[87]=!1},!1);window.addEventListener("mousedown",function(){p=!0},!1);
window.addEventListener("mouseup",function(){v||(p=!1,s=d,da=h,q=4,k>=b.width-120&&k<=b.width&&m>b.height-40&&m<b.height&&(y=2,x=!0))},!1);window.addEventListener("mousemove",function(a){k=a.clientX-b.offsetLeft;m=a.clientY-b.offsetTop;k<=b.width-45&&35<=k&&(s=k-45)},!1);function Ta(){!$&&100>=azmana&&azmana++;setTimeout(Ta,1)}function Ua(){0==Ka%T&&(S++,Q[S]=Math.random()*b.width-200+100,R[S]=w-b.height-120);Ka++}function Ua(){0==Ka%T&&(Q[S]=Math.random()*b.width-200+100,R[S]=w-400,S++);Ka++}
function Va(){v||(0==Qa%Ra&&(Na[Pa]=0,Oa[Pa]=w-450,Pa++),Qa++);for(var a=0;a<Pa;a++)Oa[a]-w>h-w+100&&(delete Oa[a],delete Na[a]);setTimeout(Va,10)}
function Wa(){if(3E3>z){f||v||!x||($||(100>ja&&(ja+=2),e[65]||e[68]||(q=4)),50<=ha&&50>=g&&(ha-=50,t-=50,g+=50),300<=oa&&(20>T&&(T-=10),10>X&&(X-=15),oa=0));f||(v&&p&&0<k&&20>k&&m>b.height-40&&m<b.height&&(p=v=!1,k=300,m=20),!v&&p&&x&&p&&0<k&&20>k&&m>b.height-40&&m<b.height&&(v=1,k=300,m=20,p=!1));if(!v){f&&p&&m>=b.height-50&&m<b.height&&k>=b.width-100&&k<b.width&&(d,e=[],f=!1,g=100,h,aa=new Image,k,m,p=!1,ba=new Image,q=4,r=0,s,da,ba.src="pe6o.png",w=u=0,ma=new Image,na=new Image,x=!1,oa=z=y=0,pa=
new Image,qa=new Image,pa.src="stone1.png",v=!1,ma.src="umrq.png",na.src="cursor.png",qa.src="stone2.png",h=b.height-120,$=!1,d=b.width/2-45,da=h,s=d,la.src="gp.png",ia=[],P=[],A=0,B=[],C=[],Ia=0,ua=120,aa.src="jumpingpe6o.png",ja=100,sa=new Image,va=new Image,D=0,E=[],F=[],wa=[],sa.src="puddle.png",va.src="log.png",t=0,ra=!1,Da=new Image,Da.src="phone.png",Ea=new Image,y=0,x=!1,Ea.src="computer.png",Sa=[],Aa=!1,new Image,Ia=0,B=[],C=[],Ja=new Image,Ja.src="bg.png",ka.src="jumpingpe6o.png",G=[],H=
[],I=0,ya=20,za=0,J=[],K=[],ha=0,Q=[],R=[],Ka=S=0,T=200,La=5,U=[],V=[],Ma=W=0,X=100,Z=Y=0,Na=[],Oa=[],Qa=Pa=0,Ra=40,k=30,m=100,Ca=Ba=!1,Fa.src="hole.png",L=[],M=[],Ga=0,Ha=140,N=0);if(x&&!f){$||(r+=.3,13<r&&(r=0));if(3E3>z&&(Ua(),0==Ma%X&&(U[W]=Math.random()*b.width-50+100,V[W]=w-450,W++),Ma++,10<z)){0==za%ya&&(G[I]=Math.random()*b.width+200,H[I]=w-200,15>G[I]&&(G[D]+=10),G[I]>b.width-50&&(delete G[I],delete H[I],1<I&&(delete J[I],delete K[I])),I++,J[I]=0,K[I]=0);za++;for(var a=0;a<I;a++)K[a]+=.5,
4==K[a]&&(J[a]++,K[a]=0),4<=J[a]&&(J[a]=0)}for(a=0;a<S;a++)for(var l=0;l<W;l++)for(var ca=0;ca<D;ca++)for(var n=0;n<A;n++)for(var O=0;O<N;O++)Q[a]<=U[l]+95&&Q[a]+200>=U[l]&&R[a]+200>=V[l]&&R[a]<V[l]+50&&(V[l]-=100),Q[a]<=B[n]+100&&Q[a]+200>=B[n]&&R[a]+50>=C[n]&&R[a]<C[n]+100&&(C[n]-=100),U[l]<=B[n]+100&&U[a]+95>=B[n]&&V[l]+50>=C[n]&&V[l]<C[n]+100&&(C[n]-=200),Q[a]<=E[ca]+80&&Q[a]+200>=E[ca]&&R[a]+200>=F[ca]&&R[a]<F[ca]+100&&(R[a]-=100),L[O]<=U[l]+95&&L[O]+140>=U[l]&&M[O]+80>=V[l]&&M[O]<V[l]+50&&(V[l]-=
100),L[O]<=B[n]+100&&L[O]+140>=B[n]&&M[O]+80>=C[n]&&M[O]<C[n]+100&&(V[l]-=100);if(15<z&&3E3>z)for(0==Ia%ua&&(B[A]=Math.random()*b.width-120,C[A]=w-450,P[A]=0,A++),Ia++,a=0;a<A;a++)P[a]+=.1,4<=P[a]&&(P[a]=0);$&&(r+=.3,13<r&&(r=0));90<z&&3E3>z&&(0==Ga%Ha&&(L[N]=Math.random()*b.width-120,M[N]=w-120,5>L[N]&&(L[N]+=15),N++),Ga++);for(a=0;a<S;a++)d+25<=Q[a]+170&&d+80>=Q[a]&&h+90>=R[a]&&h+90<R[a]+30&&!$&&(g=0,Ba=!0);for(a=0;a<W;a++)d+25<=U[a]+75&&d+60>=U[a]&&h+100>=V[a]&&h+80<V[a]+50&&!$&&(q6u=!0,g-=.4,
Sa[a]=Math.floor(2*Math.random()),!Sa[a]&&5<d&&(d-=5,Aa=!0),Sa[a]&&d+90<b.width-5&&(d+=5,Aa=!0));for(a=0;a<A;a++)d+25<=B[a]+50&&d+60>B[a]&&h+100>=C[a]&&h+80<C[a]+90&&!$&&(g=0,Ca=!0);for(a=0;a<D;a++)d+25<=E[a]+80&&d+55>=E[a]&&h-w<=F[a]-w&&h+100>=F[a]+100&&(g=0);for(a=0;a<N;a++)if(d+25<=L[a]+75&&d+60>=L[a]&&h+100>=M[a]&&h+80<M[a]+50&&!$){h=M[a]-120;for(a=0;50>a;a++)h+=5;g=0;ra=!0}for(a=0;a<I;a++)!$&&d-u+25<=G[a]-u+25&&d-u+55>=G[a]-u&&h-w+100>=H[a]-w&&h-w+30<H[a]-w+25&&!$&&(t++,ha++,Y+=10,delete G[a],
delete H[a],1<a&&(delete J[a],delete K[a]));w-=La;h-=La;z+=La/50;oa+=La/50}3==y&&x&&p&&25<k&&k<b.width-30&&(d<s&&!1==Aa&&(d+=3,q=6),d>s&&!1==Aa&&(d-=3,q=5));if(!f){2==y&&x&&!$&&(e[65]&&-5<d&&(d-=3,q=5),e[68]&&d+90<b.width+1&&(d+=3,q=6));1>=g&&(g=0,f=!0);for(a=0;a<S;a++)R[a]>=h+200&&(delete Q[a],delete R[a],Y++,Z++);for(a=0;a<W;a++)V[a]>=h+200&&(delete U[a],delete V[a],Y++,Z++);for(a=0;a<N;a++)M[a]>=h+200&&(delete L[a],delete M[a],Y++,Z++);for(a=0;a<D;a++)F[a]>=h+200&&(delete E[a],delete F[a],Y++,
Z++);for(a=0;a<A;a++)C[a]>=h+200&&(delete B[a],delete C[a],Y++,Z++,delete P[a]);20<=Z&&(Z=0,T-=3);10<=Z&&(Z=0,X-=3);0>=X&&(X=30);0>=T&&(T=20)}}1500<A&&brlava0;1E3<D&&(D=0);2E3<W&&(W=0);2E3<S&&(S=0);1500<N&&(N=0)}$&&12<=r&&($=!1);setTimeout(Wa,12)}
function Xa(){c.clearRect(0,0,b.width,b.height);c.globalAlpha=1;if(3E3>z){for(var a=0;a<Pa;a++)600>Oa[a]-w&&c.drawImage(Ja,Na[a]-u,Oa[a]-w,b.width,210);y||v||c.drawImage(Ea,b.width-120,b.height-40,120,35);for(a=0;a<N;a++)c.drawImage(Fa,L[a]-10-u,M[a]-w,140,80);for(a=0;a<A;a++)c.drawImage(ta,Math.floor(P[a])%4*95,0,95,95,B[a]-35-u,C[a]-5-w,105,105);for(a=0;a<W;a++)c.drawImage(sa,U[a]-20-u,V[a]-w,95,50);for(a=0;a<I;a++)c.drawImage(xa,Math.floor(J[a])%16*30,0,30,30,G[a]-u,H[a]-w,30,30);for(a=0;a<S;a++)c.drawImage(va,
Q[a]-20-u,R[a]-w-20,200,50);for(a=0;a<D;a++)wa[a]||c.drawImage(qa,E[a]-u,F[a]-w,80,100),wa[a]&&c.drawImage(pa,E[a]-u,F[a]-w,80,100);$||c.drawImage(ba,Math.floor(r)%13*128,128*q,128,128,d-u,h-w,90,100);$&&(q=0,c.drawImage(ka,Math.floor(r)%13*128,0,128,309,d-u,h-w-140,90,240));f&&c.drawImage(ma,0,0,b.width,b.height);v||c.drawImage(ga,5,b.height-30,20,25);v&&(c.drawImage(la,0,0,b.width,b.height),c.drawImage(ea,5,b.height-30,20,25));x&&y&&2!=y||c.drawImage(na,k,m,20,25);x&&!v&&15>z&&(c.fillStyle="LawnGreen",
c.font="50px Chiller",c.fillText("Genereting terrain...",30,220),c.fillText("Please, wait!!!",30,290));x&&10<=z&&25>=z&&(c.fillStyle="LawnGreen",c.font="30px Comic Sans MS",c.fillText("Play!",d+10,h-w-10))}c.fillStyle="red";c.fillRect(b.width/2-50,5,g,10);c.font="20px Chiller";0>g&&(g=0);c.fillText("Health: "+Math.floor(g)+" / 100",b.width/2-50,40,100,10);c.fillStyle="white";c.font="20px Comic Sans MS";c.fillStyle="khaki";c.fillText("Score: "+Math.floor(Y),b.width-120,40);c.fillText("Meters: "+Math.floor(z),
10,40);c.fillStyle="gold";x&&!f?c.drawImage(xa,Math.floor(J[1])%16*30,0,30,30,10,50,30,30):c.drawImage(xa,0,0,30,30,10,50,30,30);c.fillText(t,40,70);3E3<=z&&c.drawImage(fa,0,0,b.width,b.height);Ca&&(c.fillStyle="LawnGreen",c.font="35px Comic Sans MS",c.fillText("Killed by LAVA!",50,400));Ba&&(c.fillStyle="LawnGreen",c.font="35px Comic Sans MS",c.fillText("Killed by LOG!",65,400));ra&&(c.fillStyle="LawnGreen",c.font="35px Comic Sans MS",c.fillText("You have fallen in hole!",10,400));requestAnimationFrame(Xa)}
Wa();Ta();Va();Xa();