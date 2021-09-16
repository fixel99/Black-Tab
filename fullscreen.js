var full = false;

document.body.addEventListener('click', function(){
  if(full==false){
    document.getElementById("mask").requestFullscreen()
    full = true;
  }
  else{
    document.exitFullscreen();
    full = false;
  }

})

var fired = false;

document.body.addEventListener('keydown', (f) => {
  if(fired==false){
    if(full==false){
      document.getElementById("mask").requestFullscreen()
      full = true;
      fired = true;
    }
    else{
      document.exitFullscreen();
      full = false;
      fired = true;
    }
  }
})

document.body.addEventListener('keyup', (f) => {
  fired = false;
})
