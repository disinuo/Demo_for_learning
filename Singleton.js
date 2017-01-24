/**
 * Created by disinuo on 17/1/24.
 */
var Singleton=function (name) {
    this.name=name;
};
Singleton.prototype.getName=function () {
    return this.name;
}
Singleton.getInstance=(function () {
    var instance=null;
    return function (name) {
        if(!instance){
            instance=new Singleton(name);
        }
        return instance;
    }
})();
var x=Singleton.getInstance('Dogge');
var y=Singleton.getInstance('Kitty');
console.log(x.getName());//Dogge
console.log(y.getName());//Dogge
console.log(x===y);      //true
//x and y are the same

//------------ Better singleton method--------------------
var getInstance=function (func) {
    var instance=null;
    return function () {
        if(!instance){
            instance=func.apply(this,arguments);
        }
        return instance;
    }
};

var createDiv=function (text) {
    var div=document.createElement('div');
    div.innerHTML=text;
    // div.style.display='none';
    document.body.appendChild(div);
    return div;
};
var createSingleDiv=getInstance(createDiv);
var div=createSingleDiv('hello~');
var div1=createSingleDiv('world');