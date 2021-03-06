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


window.addEventListener("contextmenu", function(e) { e.preventDefault(); })


document.body.addEventListener('mousedown', clicked, false);

function clicked(e) {
    switch (e.button) {
        case 0:
          // left mouse button
          break;
        case 1:
          // middle mouse button
          break;
        default:
          setTimeout(function(){
            window.close()
          }, 100);
    }
}

//window.addEventListener("contextmenu", function(e) { e.preventDefault(); }) //disable context menu on right click
