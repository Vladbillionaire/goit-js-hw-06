const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;


btnDec.addEventListener('click',
    () => {
        counterValue -= 1;
        valueEl.textContent = counterValue;
    })

btnInc.addEventListener('click',
    () => {
        counterValue += 1;
        valueEl.textContent = counterValue;
    })

console.log(valueEl.textContent);