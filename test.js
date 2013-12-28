function RepeatNtimes(c,n){
 var s='',r=s;
 if(c||c!=r){n=Number(n);r=n>0?isFinite(n)?Array(n+1).join(c):s:s};
 return r;
};

/*
function RepeatNtimes(c,n){
 var s='',r=s;
 if (c||c!=r){
	r=c,n=Number(n);
	if(n > 0){
	 r=(isFinite(n)?Array(n+1).join(c):s)
	}else{
	 r=s
	}
 };
 return r;
};
*/

//
//
var cases=[['',2],[' ',4],['x',''],['x',0],['x',false],['x',1],['x',true],['x',0x1],['x',3],['x','5'],['x',-1],['x',Infinity]];
//
function Test(m){m.forEach(function(x){console.log(x,RepeatNtimes(x[0],x[1]))});console.log("\n")};
//
Test(cases);

