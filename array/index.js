var king = [
    { 
        name: 'manoj',
        id:7
    },
    { 
        name: 'vivek',
        id:2
    },
    { 
        name: 'harsha',
        id:5
    },
    { 
        name: 'kajal',
        id:1
    },
    { 
        name: 'vaibhavi',
        id:3
    },
    {

    }
]
king[true]={name: 'jay',id:23};

console.log("Using for loop")
for (i = 0;i<king.length;i++){
    console.log(king[i])
}
console.log("Using for of")
for (const rule of king) {
    console.log(rule)
}
console.log("Using for in")
for (const rule in king) {
    console.log(rule+" "+king[rule].name+" "+king[rule].id)
}

var num = [10,20,30,40,50]
for (i=0;i<num.length;i++) {
    if(num[i]===30){
        console.log(num[i]) 
        break
    }
}