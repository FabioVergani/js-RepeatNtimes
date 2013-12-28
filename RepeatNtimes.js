function RepeatNtimes(c,n){
 var s='',r=s;
 if(c||c!=r){n=Number(n);r=n>0?isFinite(n)?Array(n+1).join(c):s:s};
 return r;
};
