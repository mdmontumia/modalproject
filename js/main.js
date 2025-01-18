const form = document.querySelector('form')
const btn = document.querySelector('.btn')
const overlay = document.querySelector('.overlay')
const cross = document.querySelector ('.cross')
form.addEventListener('submit',(event)=>{
    event.preventDefault()
   
})
btn.addEventListener('click',()=>{
    overlay.classList.toggle('active')
    btn.style.display = 'block'
})
cross.addEventListener('click',()=>{
    overlay.classList.remove('active')
    btn.style.display = 'block'
})
