/**
 * Created by disinuo on 17/1/10.
 */
var i=0;
do{
    i+=2;
}while (i<0);
console.log(i);
//-----------------
var j=0;
while (j<0){
    j+=2;
}
console.log(j);

for(var propName in Window){
    document.write(propName.toLowerCase()+'<br>');
}

function add(a,b,c) {
  return (a+b+c);
}

// function add() {
//    return (arguments[0]+arguments[1]);
// }


var x=add(1,2,3);
console.log(x);