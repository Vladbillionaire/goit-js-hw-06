const form = document.querySelector('.login-form');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const { elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Все поля должны быть заполнены!");
    }
    
    const formData = {
        email: email.value,
        password: password.value,
    }

    console.log(formData)

    event.currentTarget.reset()
}