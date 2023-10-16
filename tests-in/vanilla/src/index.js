const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

// music background
const bgAudio = $("#back_music__audio")
const btnAudio = $("#back_music__btn_audio")
btnAudio.addEventListener('click', ()=>{
    if(bgAudio.volume === 1){
      bgAudio.volume = 0
    } else{
      bgAudio.volume = 1
    }
})

// overlay logic
function closeMainOverlay(){
    const overlay = $("#mainOverlay")
    overlay.togglePopover()
}

// nav scroll style
document.addEventListener("DOMContentLoaded", function() {
    var header = $(".nav-padding")
  
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
 const popoverBoss = $(`#boss-info`)

const allBtn = $$('.switch-popover')
allBtn.forEach(div=>{
  div.addEventListener('click', ()=>{
    const divId = div.id
    const popoverBoss = $(`#short-description-${divId}`)
    popoverBoss.classList.toggle("active-ppv-bossList")
    console.log(popoverBoss)
  })
})

// dialog logic hollow chibi
const btnHollowChibi = $("#show-dialog_hollowChibi");
const progressBar = $('#progressBar')

btnHollowChibi.addEventListener("click", function () {
  const alertDialogHollowChibi = $("#alert-dialog_hollowChibi");
  alertDialogHollowChibi.showModal();
});
function restartProgressBar(){
  progressBar.value = 50
  progressBar.style.accentColor = '#217500'
}
function reduccerProgress(){
  switch(progressBar.value){
    case 36:{
      progressBar.value -=2
      progressBar.style.accentColor = '#ffed58'
      break
    }
    case 20:{
      progressBar.value -=2
      progressBar.style.accentColor = 'ff0f1c'
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

// caoursel *pendiente*
// const carousel = $('.slider-item');
// const btnActive = $('#btn-active');

// const interval = setInterval(() => {
//   // Detener el scroll snap
//   carousel.scrollSnapStop();

//   // Mover el scroll a la siguiente posición de referencia
//   carousel.scrollTo(0, carousel.scrollHeight);

//   // Reactivar el scroll snap
//   carousel.scrollSnapStart();
// }, 1000); // 3 segundos

// // Agrega un evento de click para detener el scroll snap
// btnActive.addEventListener('click', () => {
//   clearInterval(interval);
// });


