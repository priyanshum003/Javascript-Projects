const boxs = document.querySelectorAll('.box');
const container = document.querySelector('.container')

window.addEventListener('scroll',()=>{
   updateUi()
})
updateUi()


function updateUi(){
    const windowHeight = window.innerHeight
    boxs.forEach( (box)=>{
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < (windowHeight / 5 * 4)){
            box.classList.add('active')
        } else {
            box.classList.remove('active')
        }
    })
}