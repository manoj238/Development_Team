var num = [1,2,3,4,5,6]

var result = num.map(function(a){
    return a*=a;
})

console.log(result)

var result = num.filter(function(a){
    return a>4
})
console.log(result)

var result = num.join("->")
console.log(result)

console.log(num.indexOf(6))

let str = new String("manojvivek")
console.log(str.toUpperCase())
console.log(str.charAt(3).toUpperCase())
console.log(str.indexOf('ano',1))
console.log(str.substring('vivek'))
console.log(str.trimEnd(str.length-1))
console.log(str.includes('ojv'))
console.log(str.replace('ano','kin'))
console.log(str.substr(2, str.length-1))
console.log(str.substring(0,5))
let strs = new String("         manojvivek H  ")
console.log(strs)
console.log(strs.trim())

// function start(){
//     console.log("started")
// }

// setTimeout(function(){
//     console.log("middle")
// },2000)

// function stop(){
//     console.log("stopped")
// }
// start()
// stop()

var array = [2,3,4,7,8,9,11,13,29,33]

var s=array.filter(function(){
    for(var i=0; i<array.length;i++){
        if(array[i]>0 && array[i]<=3){
           return array[i]
        }
        if(array[i]%2!=0 && array[i]%3!=0){
            return array[i]
        }
    }
})
console.log(s)
// var names = ['manoj','vivek','kiran','arun']
// var res = names.map(function(item){
//     return item+"ty"
// })
// console.log(res)

// var gangs = names.filter(function(names){
//     return names.includes('oj')
// })
// console.log(gangs)