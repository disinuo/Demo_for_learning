/**
 * Created by disinuo on 17/1/10.
 */
var func=function (a,b,c) {
    console.log(a,b,c);
}

func.apply(null,[1,2,3]);   //1 2 3
func.call(null,[1,2,3]);    //[1,2,3],undefined,undefined
func.call(null,1,2,3);      //1,2,3

