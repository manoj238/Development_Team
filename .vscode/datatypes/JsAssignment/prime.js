function prime(num){
    num%2!=0 && num%3!=0 ? console.log("prime") : console.log("Not Prime");
}
prime(133)

var primeNum = function(num){
    num%2!=0 && num%3!=0 ? console.log("prime") : console.log("Not Prime");
}
primeNum(757 );

(function (num){
    if(num%2!=0 && num%3!=0){
        console.log("prime")
    }else{
        console.log("Not Prime")
    }
})(19)

var xNum = (num)=>{
    if(!(num%2!=0 && num%3!=0)){
        console.log("Not Prime")
    }else{
        console.log("prime")
    }
}
xNum(13)
