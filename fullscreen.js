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
