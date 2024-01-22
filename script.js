const form = document.querySelector(`.form`);
const button = document.querySelector(`#button`);
const addName = document.querySelector(`#name`);
const addSecondName = document.querySelector(`#secondName`);
const addPhone = document.querySelector(`#phone`);
const addEmail = document.querySelector(`#email`);
const checkbox = document.querySelector(`#agree`);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    async function sendData() {
        const name = addName.value;
        const secondName = addSecondName.value;
        const phone = addPhone.value;
        const email = addEmail.value;
        const isOn = checkbox.checked;

        toggleLoader();


        const { status, error } = await fetch(`https://polinashneider.space/user`, {
            method: `POST`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: AliaksandraPapko'
            },
            body: JSON.stringify({
                "name": `${name}`,
                "secondName": `${secondName}`,
                "phone": `${phone}`,
                "email": `${email}`,
                "agree": `${isOn}`
            }),
        })

        toggleLoader();

        if (status === 200) {
            onSuccess(event.target)
        } else {
            onError(error)
        }
    }

    button.addEventListener('click', sendData);
})


function toggleLoader() {
    const loader = document.querySelector(`.loader`);
    loader.classList.toggle('hidden')
}

function onSuccess() {
    alert('Ваша анкета отправлена');
    form.reset()
}

function onError(error) {
    alert(error.message)
}