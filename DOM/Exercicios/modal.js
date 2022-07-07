/*const openWindow = document.getElementById('openModdal')
const windowEsc = document.getElementById('windowEsc')

openWindow.addEventListener('click', openW)

function openW() {
    windowEsc.removeAttribute('invisible')
}

windowEsc.addEventListener('keypress: Esc', windowE)

function windowE() {
    windowEsc.append('invisible')
}*/

const buttonOpenModal = document.getElementById('openModal')
const modalWrapper = document.getElementById('windowEsc')

buttonOpenModal.addEventListener('click', function (){
    modalWrapper.removeAttribute('hidden')
})


document.addEventListener('keypress', function(event) {
    console.log(event)
    const isEscKey = event.key === 'a'
    if(isEscKey)
    {
        console.log('Pressed')
        modalWrapper.setAttribute('hidden', true)
    }
})