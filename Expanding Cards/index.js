var panel = document.querySelectorAll('.panel');
panel.forEach(element => {
    element.addEventListener('click', () => {
        removeActiveClass()
        element.classList.toggle('active')
    })
});

function removeActiveClass() {
    panel.forEach(panel => panel.classList.remove('active'))
}