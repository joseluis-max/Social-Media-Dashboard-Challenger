"use strict"; 
const fondo = document.querySelector('body')
const header = document.querySelector('header')
const redes = document.querySelectorAll('.redes')
const tarjetas = document.querySelectorAll('.tarjeta')
const subtitle = document.getElementById("subtitle")
function changeDarkMode() {
  fondo.classList.toggle('darkmode')
  header.classList.toggle('headerDark')
  redes.forEach(r=>{
    r.classList.toggle('redesDark')
  })
  tarjetas.forEach(t=>{
    t.classList.toggle('tarjetasDark')
  })
  subtitle.classList.toggle('letter_white')
}
const darkMode = document.getElementById("darkmode")
darkMode.addEventListener('click',function(){
 this.firstElementChild.classList.toggle('drog')
 this.classList.toggle('background');
 changeDarkMode()
})