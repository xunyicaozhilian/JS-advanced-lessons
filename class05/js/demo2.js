//算数运算符
console.log("1"+2);//"12"
console.log("1"+"2");//"12"
console.log(1+{});//"1[object Object]"
console.log(true+true); //2
console.log(false+false);//0
console.log("5"-2); //3


var x="1";
console.log(++x);//2
var x="1";
console.log(x+1);//"11"


var x="1";
console.log(x+=1);//"11"
var x=1;
console.log(x+1);//2

var i=1;
var y= ++i + ++i + ++i;
console.log(y);//9  即2+3+4