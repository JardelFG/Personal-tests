// music background
const bgAudio = document.getElementById("back_music__audio")
const btnAudio = document.getElementById("back_music__btn_audio")
btnAudio.addEventListener('click', ()=>{
    if(bgAudio.volume === 1){
      bgAudio.volume = 0
    } else{
      bgAudio.volume = 1
    }
})

// overlay logic
function switchOverlay(){
    const overlay = document.getElementById("panelOverlay")
    
    overlay.classList.toggle("switch")
}

// nav scroll style
document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector(".nav-padding")
  
    window.addEventListener("scroll", function() {
      var scroll = window.scrollY || document.documentElement.scrollTop
  
      if (scroll >= 10) {
        header.classList.remove("nav-padding")
        header.classList.add("scroll-on")
      } else {
        header.classList.remove("scroll-on")
        header.classList.add("nav-padding")
      }
    });
  });


 // Cerrar el popover al hacer clic en el botón de cierre
 const popoverBoss = document.querySelector(`#boss-info`)

const allBtn = document.querySelectorAll('.switch-popover')
allBtn.forEach(div=>{
  div.addEventListener('click', ()=>{
    const divId = div.id
    const popoverBoss = document.querySelector(`#short-description-${divId}`)
    popoverBoss.classList.toggle("active-ppv-bossList")
    console.log(popoverBoss)
  })
})

// dialog logic
const showButton = document.querySelector("#show-button");
const progressBar = document.getElementById('progressBar')

showButton.addEventListener("click", function () {
  const alertDialog = document.querySelector("#alert-dialog");
  alertDialog.showModal();
});
function restartProgressBar(){
  progressBar.value = 50
  progressBar.style.accentColor = 'green'
}
function reduccerProgress(){
  switch(progressBar.value){
    case 35:{
      progressBar.value -=5
      progressBar.style.accentColor = 'yellow'
      break
    }
    case 20:{
      progressBar.value -=5
      progressBar.style.accentColor = 'red'
      break
    }
    default:{
      if( progressBar.value > 0){
        progressBar.value -= 2
      }else{
        return
      }
    }
  }
}
setInterval(reduccerProgress, 3000)
