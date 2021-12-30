var obj = {};
var objArr = [];
/*
function copypage1(event)
{

var email = document.getElementById('exampleInputEmail1').value
localStorage.setItem('email1',email);
var password = document.getElementById('exampleInputPassword1').value
localStorage.setItem('password1',password);


window.location.href= "page2.html";
event.preventDefault();

}
*/
document.getElementById('profession-form').addEventListener('submit',function(event) {

  if (document.getElementById('emailorg').value != "" || document.getElementById('workorg').value != "") {
    console.log("passed");
    buildObj();
    candidatedet();
    /*  //$("#candidate-selection").value("select");
      document.getElementById('candidate-selection').value
      //$("#email").val("");
      document.getElementById('emailorg').value
      //$("#work").val("");
      document.getElementById('workorg').value
      */
  }
event.preventDefault();
});

function buildObj() {
  obj = {};
  var emailorg = document.getElementById('emailorg').value
  localStorage.setItem('emailo', emailorg);
  var workorg = document.getElementById('workorg').value
  localStorage.setItem('worko', workorg);
  var name = document.getElementById('candidate-selection').value
  localStorage.setItem('nameo', name);
  obj["name"] = localStorage.getItem('nameo');
  obj["email"] = localStorage.getItem('emailo');
  obj["work"] = localStorage.getItem('worko');
  objArr.push(obj);
  console.log('objArr:' + JSON.stringify(objArr));
}
function deleteEvent(data){
  console.log(data);
  for(var i = 0; i < objArr.length; i++) {
      if(objArr[i].name === data){
          objArr.splice(i, 1);
         break;
      }
  }
  console.log('objArr:'+ JSON.stringify(objArr));
  candidatedet();
}

function candidatedet() {

  /*
var emailorg = document.getElementById('emailorg').value
localStorage.setItem('emailo',emailorg);
var workorg = document.getElementById('workorg').value
localStorage.setItem('worko',workorg);
var name = document.getElementById('candidate-selection').value
localStorage.setItem('nameo',name);
*/
  var html = "";
  //document.getElementById('table-body').innerHTML += html
  for (var i = 0; i < objArr.length; i++) {
    //html = html +  objArr[i].name  + objArr[i].email + objArr[i].work ;
    html = html+ "<tr><th scope='row'>"+(i+1)+"</th><td>"+objArr[i].name+
    "</td><td>"+objArr[i].email+"</td><td>"+objArr[i].work+
    "</td><td><button type='button' id='deletebtn' class='btn btn-danger btn-sm' onclick='deleteEvent(`"+objArr[i].name+"`)' data-button='"
    +objArr[i].name+"'>Delete</button></td></tr>";
    //document.getElementById('table-body').innerHTML+=html
   
  }
  //document.getElementById('table-body').append(html);
  document.getElementById('table-body').innerHTML=html;

}