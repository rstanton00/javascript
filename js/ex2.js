function closeMe() {
  x=document.getElementById("demo");
  x.style.display="none";
  //alternatively, could do: x.className="closed";
  //but you'd want a classname called closed in your css
  //document.getElementById("output").innerHtml = msg + " [response]";
}

function openMe() {
  x=document.getElementById("demo");
  x.style.display="block";
  //alternatively, x.className="open";
  //but you'd want a classname called open in your css
}

function displayDate() {
  document.getElementById("demo").innerHTML=Date();
}
