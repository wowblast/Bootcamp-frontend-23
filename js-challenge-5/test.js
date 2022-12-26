setTimeout(function a() {delayBySeconds(0.5,"setimeout")},0);

Promise.resolve().then(function b() {delayBySeconds(0.8,"promise")});
console.log("Before delay");
  
function delayBySeconds(sec, ste) {
   const start = now = Date.now();
   
   while(now-start < (sec*1000)) {
     now = Date.now();
     if(now-start >= (sec*1000))
     console.log(ste)
   }
}
  
delayBySeconds(1,"norma fun");
  
console.log("After delay");