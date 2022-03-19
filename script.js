const submit = document.querySelector('.submit');
const container = document.querySelector('.container');

const stars = document.querySelector('.stars');

const buttons = document.querySelectorAll('.buttons button');
let curr = null;

buttons.forEach(button => {
    button.onclick = () => {
        removeActive();
        curr = button.dataset.star;
        button.classList.add('active');
    }
})

submit.onclick = () => {
    if (curr) {
        container.style.transform = 'rotateY(180deg)';
        stars.textContent = curr;
    }
}

function removeActive() {
    buttons.forEach(button => {
        button.classList.remove('active');
    })
}