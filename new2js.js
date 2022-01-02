/*
var email2 = localStorage.getItem('email1');
var password2 = localStorage.getItem('password1');
document.getElementById('email2').innerHTML = email2;
document.getElementById('password2').innerHTML = password2;
*/
let objArr = window.localStorage.getItem("objArr");
console.log(JSON.parse(objArr));
for (var i = 0; i < objArr.length; i++) {
    //html = html +  objArr[i].name  + objArr[i].email + objArr[i].work ;
    html = html+ "<tr><th scope='row'>"+(i+1)+"</th><td>"+objArr[i].name+
    "</td><td>"+objArr[i].email+"</td><td>"+objArr[i].work+
    "</td><td><button type='button' id='deletebtn' class='btn btn-danger btn-sm' onclick='deleteEvent(`"+objArr[i].name+"`)' data-button='"
    +objArr[i].name+"'>Delete</button></td></tr>";
    //document.getElementById('table-body').innerHTML+=html
   
  }