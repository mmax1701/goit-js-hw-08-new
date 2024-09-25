import throttle from "lodash.throttle";

const KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form')


form.addEventListener('input', throttle(onInput, 2000))

form.addEventListener('submit', onSubmit)



function onInput(evt) {
    if (evt) {
        const formVal = {
        email: form.elements.email.value,
        message: form.elements.message.value
    }
    localStorage.setItem(KEY, JSON.stringify(formVal))
  }
}

function inInput() {
    const data = JSON.parse(localStorage.getItem(KEY))

    if (data) {
        form.elements.email.value = data.email;
        form.elements.message.value = data.message;
    }
}

inInput();



function onSubmit(evt) {
    evt.preventDefault();
    console.log(`email: ${evt.currentTarget.email.value}`);
    console.log(`message: ${evt.currentTarget.message.value}`);
    localStorage.removeItem(KEY)
    form.reset();
}