let progress = document.querySelector('.progress');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let circles = document.querySelectorAll('.circle');
let currentActive = 1;

next.addEventListener('click',()=>{
    if(currentActive < circles.length ){
        currentActive++
    }   
    console.log(currentActive)
    updateUi()
})

prev.addEventListener('click',()=>{
    if(currentActive > 1){
        currentActive--;
    }
    console.log(currentActive)
    updateUi()
})

function updateUi(){
    circles.forEach( (circle,index)=>{
        if(currentActive > index){
            circle.classList.add('active');
            progress.style.width = 30 * index + '%';
        }
        else{
            circle.classList.remove('active');
        }
    })


    if(currentActive === 1){
        prev.disabled = true;
    } else if(currentActive === circles.length){
        next.disabled = true
    } else{
        prev.disabled = false;
        next.disabled = false
        
    }

}