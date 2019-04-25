function upload(){
  var tabuser = JSON.parse(localStorage.getItem("courses"));
  var a=document.getElementById('crstitle').value;
  var b=document.getElementById('desctitle').value;
  var c=document.getElementById('desc').value;
  var img=document.getElementById('img').files[0].name;
  
  var categorie=document.getElementById('categorie').value;
  var file=document.getElementById('file').files[0].name;
  
  if (tabuser == null) {
    var tabuser = [];
}
var course = {
    "ct": a,
    "desct":b,
    "desc":c,
    "categorie":categorie,
    "file":'courses/'+file,
    "img":'courses/'+img,
    "crsId":Math.floor(Math.random() * 1000) + 1
}

tabuser.push(course);
localStorage.setItem("courses", JSON.stringify(tabuser));



}