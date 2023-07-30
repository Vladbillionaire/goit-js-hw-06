const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', validation)

function validation() {
    if (inputText.value.length === Number(inputText.dataset.length)) {
        inputText.classList.replace('invalid', 'valid');
        return
    }

    inputText.classList.add('invalid');
    inputText.classList.replace('valid', 'invalid')
}