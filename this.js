// /**
//  * Created by disinuo on 16/12/24.
//  */
var func=function(x,y){
    console.log(this,x,y);
}
var r={id:'r'},g={id:'g'},b={id:'b'};
r.method=func;
// -------下面是调用啦-----------------
func(g,b);     // <global>,g,b
r.method(g,b); // r,g,b
func.call(r,g,b); // r,g,b
setTimeout(func,10); // <global>,undefined,undefined
setTimeout(r.method,10); // <global>,undefined,undefined
setTimeout(r.method(g,b),10); // <global>,g,b
setTimeout(function(){r.method()},10);// r,undefined,undefined
setTimeout(function(){r.method(g,b)},10);// r,g,b
console.log(this);//<global>
new r.method(g,b);//<object>,g,b