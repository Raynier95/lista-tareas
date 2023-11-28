const button = document.getElementById('button')
const modal = document.getElementById('modal')
button.addEventListener(('click'),()=>{
    setTimeout(()=>{
        modal.classList.toggle('modal-active')
    },5000)
})