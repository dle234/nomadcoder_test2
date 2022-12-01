const h1= document.querySelector("h1.hello");

function TitleClick(){
    h1.classList.toggle("wow")
}
function rewidth(){
  const size = window.innerWidth;
  if(size<700){
    document.body.style.backgroundColor = "tomato";
  }
  else if(size>700&& size<1400){
    document.body.style.backgroundColor="orange";
  }
  else{
    document.body.style.backgroundColor="green";
  }
}

h1.addEventListener("click",TitleClick);
window.addEventListener("resize", rewidth);
