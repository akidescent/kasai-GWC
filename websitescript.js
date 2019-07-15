
function makeBigger(x) {
    x.style.width = "400px";
    x.style.height = "400px";
}

function normalImg(x) {
  x.style.width = "200px";
  x.style.height = "200px";
}

function showHideSection(x) {
  var y = document.getElementById(x);
  if (y.style.display == "none"){
    y.style.display = "block";
    document.getElementById("show/hide").innerHTML="Hide Bio";
  }
  else{
    y.style.display = "none";
    document.getElementById("show/hide").innerHTML="Show Bio";
  }
}
