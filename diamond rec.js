// printing diamond using recursion 

const diamond=function(character,st){
	if(st===0){

		return"";
	}
	return character+diamond(character,st-1)
};

const connect=function(ch, spCount,stCount,n){
    if(n===0){
	   return "";
    }
  console.log(diamond(' ',spCount)+diamond(ch,stCount));
  connect(ch,spCount-1, stCount+2, n-1);
    };
  const triangleStars=function(ch, n){
  connect(ch, n-1,1,n);
}


const trianglereStars=function(ch,character){
   const looper = function(n){
	if (n===0)
			return;
   console.log(diamond(' ', c-n+1)+diamond(ch, 2*n-1));
   looper(n-1);
	}
	return looper(character);
};

   const printDiamond=function(ch,height){
	triangleStars(ch, Math.round(height/2));
	trianglereStars(ch, Math.round(height/2)-1);
}

//printDiamond('$', 12);