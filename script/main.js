//get the class of panel
const panels = document.querySelectorAll('.panel');

//create a function to activate class of open
function toggleAll() {
    this.classList.toggle('open');
}

//create function to check class of open-active
function lookActive(e) {
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}

//listen for a click event
panels.forEach(panel => panel.addEventListener('click', toggleAll));

//listen for a transitionend event
panels.forEach(panel => panel.addEventListener('transitionend', lookActive));




