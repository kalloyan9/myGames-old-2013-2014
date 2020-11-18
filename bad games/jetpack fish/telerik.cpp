#include<iostream>
using namespace std;
int main () {
	char vhod[11];
	cin>>vhod;
	long long gledano, sbor=0, indexZvezda=1;
	for(gledano=0;gledano<10;gledano++){
		if(vhod[gledano]=='*'){
			indexZvezda=gledano;
		}else{
			if(vhod[gledano]=='X'){
				sbor+=10;
			}else{
				sbor+=(vhod[gledano]-'0')*(10-gledano);
			}
		}
	}
	long long mnojitelZvezda=10-indexZvezda;
	long long vuzmojenOtgovor;
	for(vuzmojenOtgovor=0;vuzmojenOtgovor<=10;vuzmojenOtgovor++){
		if((sbor+vuzmojenOtgovor*mnojitelZvezda)%11==0){
			cout<<"lipsva6tata cifra e: " << vuzmojenOtgovor;
		}
	}
return 0;
}
