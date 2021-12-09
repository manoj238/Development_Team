// //Shallow copy
// var user = {
//     firstName:"Raj" ,
//     place :"bangalore" ,
//     age : 25,
//     address:{
//         doorNo:18,
//     }
// }

// var {firstName,place,age,address} = user
// console.log(firstName)
// console.log(age);
// console.log(place)
// console.log(address.doorNo)

// var user1 = user;
// user1.firstName = "kiran"
// console.log(user);
// console.log(user1);

// //deep copy user

// var emp = {
//     firstName:"Raj" ,
//     place :"bangalore" ,
//     age : 25
// }

// var em1 = JSON.stringify(emp)
// console.log(em1)

// var em2 = JSON.parse(em1)
// em2.firstName="Manoj"
// console.log(em2)

// var users = ['yash','manoj','sameer','virat']

// var [a,b,c,d]=users
// console.log(d)

// var names = ['yash','manoj','sameer','virat','midhun']

// var message = 'technoelevate'

// function func(msg,...nam)//rest operator
// {
//     console.log(msg)
//     for (let i in nam) {
//         console.log(nam[i])
//     }
// }

// func(message,...names); //spread operator

var king = {
    firstNames:'Ragnar',
    lastNames:'Lathbrok',
    date : new Date(),
    kiop: function(){
        console.log(this.firstNames+" "+this.lastNames); 
    }
   
}
king.kiop()
console.log(king)

var queen = JSON.stringify(king)
console.log(queen)

var son = JSON.parse(queen)
console.log(son)

function get(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            const err = true;
            if(!err){
                console.log("Promise resolved successfully")
                resolve();
            }else{
                console.log("Promise not resolved successfully")
                reject()
            }
        },10000)
    })
}

get().then(function(){
    console.log("Promise resolved")
}).catch(function(){
    console.log("Promise failed")
})
