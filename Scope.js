/**
 * Created by disinuo on 17/1/17.
 */
function setName(obj) {
    obj.name="Lalala";
    obj=new Object();
    obj.name="hhh";
}

var obj=new Object();
setName(obj);
console.log(obj.name);  //Lalala

//Conclusion:
// 传输传递的值传递，
// 但是函数内对参数的访问是引用访问