function upDate(previewPic){
  document.getElementById('image').style.backgroundColor="#000000";
  document.getElementById('image').style.backgroundImage="url("+previewPic.src+")";
  document.getElementById("image").innerHTML=previewPic.alt;
}

function unDo(){
  document.getElementById('image').style.backgroundColor="#8e68ff";
  document.getElementById('image').style.backgroundImage='';
  document.getElementById("image").innerHTML="Hover over an image below to display here."
}
