const btnMenu = document.querySelector('.menu');
const menuBlock = document.querySelector('.menu__block');
const btnClose = document.querySelector('.close');
const link = document.querySelectorAll('.link');


btnMenu.addEventListener('click', function () {
  menuBlock.style.left = '0%'
  menuBlock.style.opacity = '1'
})
btnClose.addEventListener('click',()=>{
  menuBlock.style.left = '-100%'
  menuBlock.style.opacity = '0'
})

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener('click',()=>{
    for (let x = 0; x < link.length; x++) {
      link[x].classList.remove('active')
    }
    link[i].classList.add('active')
  })
}
const sliderBtns = document.querySelectorAll('.btns');
const mainBlockImg = document.querySelectorAll('.main__block-img');

mainBlockImg.forEach((slide,i) => {
  if (slide.classList.contains('active')) {
    activeSlide = i
  }
});
for (let i = 0; i < sliderBtns.length; i++) {
 sliderBtns[i].addEventListener('click',(e)=>{
  sliderMove(e.target.getAttribute('data-target'))
 })
}

function sliderMove(btn) {
  if (btn === 'next') {
     if (activeSlide < mainBlockImg.length -1) {
      activeSlide++
     }else{
      activeSlide = 0
     }
  }else{
    if (activeSlide > 0) {
      activeSlide--
    }else{
      activeSlide = mainBlockImg.length -1
    }
  }
}
mainBlockImg.forEach((item)=> item.classList.remove('active'))
mainBlockImg[activeSlide].classList.add('active')