//Named Function
function add(a,b){
    return a+b
}
var sum = add(4,6)
console.log(sum)
//Anonymous Function 
var minus = function (a,b){
    console.log(a-b)
}
minus(56,23);
//IIFE function
(function (a,b){
    console.log(a*b)
})(5,5)
//Arrow Function
var x = (a,b) =>{
    return a+b
}
console.log(x(3,5))

function outer(){
    sum = 10;

    function inner(){
        return sum+=5
    }
    inner();
    return sum;
}

var num = outer();
console.log("Total"+" "+num)

var a = 'Kajal'
var b = 'Agarwal'

var result = `${a} ${b}`
console.log(result)