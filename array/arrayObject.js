var user ={
    firstName: 'John',
    lastName: 'Winchester',
    age: 18,
    address:{
        doorNo:222,
        city: 'Bangalore',
        State: 'Karnataka'
    }
}
for (const key in user) {
    console.log(user[key])
}