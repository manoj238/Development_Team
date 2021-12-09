var data = new Date()
console.log(data)

var data = new Date('oct 29 2021')
console.log(data)

var data = new Date(87654)
console.log(data)

var data = new Date('oct 29')
console.log(data)

var data = new Date()
console.log("Seconds"+" "+data.getSeconds())
console.log("Minutes"+" "+data.getMinutes())
console.log("Year"+" "+data.getFullYear())
console.log("Day"+" "+data.getDay())
console.log("Date"+" "+data.getDate())
console.log("Month"+" "+data.getMonth())
console.log("Hour"+" "+data.getHours())
//Current Date
var dat = new Date()
var time = dat.getTime()
var c = dat.getDate()
var m = dat.getMonth()
if(m==11){
    var m = "December";
}
var y = dat.getFullYear()
console.log(c+"/"+m+"/"+y)

//Change Date
var changeDate = new Date()
var d = changeDate.getMonth()
    switch(d){
        case 0 :  d = "January"
                break;
        case 1 : d = "February"
                break;
        case 2 : d = "March"
                break;
        case 3 :d = "April"
                break;
                case 4 : d = "May"
                break;
                case 5 : d = "June"
                break;
                case 6 : d = "July"
                break;
                case 7 : d = "August"
                break;
                case 8 : d = "September"
                break;
                case 9 : d = "October"
                break;
                case 10 : d = "November"
                break;
                case 11 : d = "December"
                break;
    }
console.log(c+"/"+d+"/"+y) 


// var dt = new Date();
// if(dt.getMonth() + 1==12){
//     var m = "December"
// }
// console.log(dt.getDate()+ "/" + m + "/" + dt.getFullYear() );