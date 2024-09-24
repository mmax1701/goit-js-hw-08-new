import throttle from "lodash.throttle";

const KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form')

const throtForm = throttle(onInput, 500)

form.addEventListener('input', throtForm)
form.addEventListener('submit', onSubmit)

const data = JSON.parse(localStorage.getItem(KEY)) || {};

form.elements.email.value = data.email ?? "";
form.elements.message.value = data.message ?? "";


function onInput(evt) {
    const formVal = {
        email: evt.currentTarget.email.value,
        message: evt.currentTarget.message.value
    }

    localStorage.setItem(KEY, JSON.stringify(formVal))
}



function onSubmit(evt) {
    evt.preventDefault();
    console.log(`email: ${evt.currentTarget.email.value}`);
    console.log(`message: ${evt.currentTarget.message.value}`);
    localStorage.clear()
    form.reset();
}