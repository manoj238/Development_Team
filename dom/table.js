function add(){
    var ele = document.createElement('tr')
    ele.innerHTML ='<td>1</td><td><button onclick="add()">Add</button></td> <td><button onclick="remove()">Remove</button></td>'
    var ele1 = document.getElementById('tb')
    ele1.appendChild(ele)
    var ele2 = document.getElementById('tbl')
    ele2.appendChild(ele1)
    document.body.appendChild(ele2)
}
function removed(){
   var ele = document.getElementById('frog')
   ele.remove()
}

// function add(){
//     var table = document.getElementById('tbl')
//     var row = table.insertRow(0)
//     var cell1 = table.insertCell(0)
//     var cell2 = table.insertCell(1)
//     var cell3 = table.insertCell(2)
//     cell1.innerHTML='1'
//     cell2.innerHTML='add'
//     cell3.innerHTML='remove'
// }