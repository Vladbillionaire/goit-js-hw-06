function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const changeBtnEl = document.querySelector('.change-color');
const spanColor = document.querySelector('.color')

changeBtnEl.addEventListener('click', () => {
    const randomBgc = body.style.backgroundColor = getRandomColor();
    spanColor.textContent = randomBgc
})