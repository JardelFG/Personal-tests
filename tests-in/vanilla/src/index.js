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

const allBtn = document.querySelectorAll('.switch-popover')
// const AllpopoverBoss = document.querySelectorAll('.popover-boss-info')
allBtn.forEach(div=>{
  div.addEventListener('click', ()=>{
   const divId = div.id
   console.log(divId)
  })
  console.log(allBtn)
})
