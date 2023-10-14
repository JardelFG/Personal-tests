const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

// effect zoom img
const zoom = $('.img-zoom');
const zoomed = $('.img-zoomed')
zoom.addEventListener('mousemove', function(event) {
  const zoomHeight = zoomed.offsetHeight - this.offsetHeight;
  
  const zoomWidth = zoomed.offsetWidth - this.offsetWidth;
  const top = ((this.offsetTop - event.pageY) * (zoomHeight / this.offsetHeight)) - this.offsetHeight;

  const left = ((this.offsetLeft - event.pageX) * (zoomWidth / this.offsetWidth)) - this.offsetWidth;
  const translate = left + 'px,' + top + 'px';
  
  zoomed.style.transform = 'translate(' + translate + ')';
});
// banner Silksong with 3d
function guieOverlay(){
    console.log("ta bien")
    const overlaySilksong = $("#panelOverlay")
    overlaySilksong.classList.toggle("invisible")
  }
  // effect 3d
  const wrapper = $('.wrapper')
  const ticket = $('.ticket')
  const { width, height } = wrapper.getBoundingClientRect()
  const halfWidth = width / 2
  const halfHeight = height / 2
  
  wrapper.addEventListener('mousemove', (event)=>{
    const { offsetX, offsetY } = event
    console.log(event)
    const rotationX = ((offsetX - halfWidth) / halfWidth) * 10
    const rotationY = ((offsetY - halfHeight) / halfHeight) * 10
    ticket.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
  })
  