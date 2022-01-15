
const lamp = document.querySelector('.lamp');
const light = document.querySelector('.light');
const audio = document.querySelector('#audio');
const on = document.querySelector('.btn_on');
const off = document.querySelector('.btn_off');

on.addEventListener('click', isOn);
off.addEventListener('click', isOn);

off.style.cssText = 'border: 2px solid red;';

function isOn() {
    audio.play();

    if (this.classList.contains('btn_on')) {
        light.classList.add('active');
        btnStyles(on, off);
    } else {
        light.classList.remove('active');
        btnStyles(off, on);
    }
}
function btnStyles(active, another) {
    active.classList.add('btn_active');
    another.classList.remove('btn_active');

    if (active.classList.contains('btn_on')) {
        on.style.cssText = 'border: 2px solid turquoise;';
        off.style.cssText = 'border: none;';     
    } else {
        another.style.cssText = 'border: 0px solid turquoise;';
        active.style.cssText = 'border: 2px solid red;';
    }
}