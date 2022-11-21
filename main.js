const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnSum = document.querySelector('#sumButton');
const btnRes = document.querySelector('#resButton');
const btnMul = document.querySelector('#mulButton');
const btnDiv = document.querySelector('#divButton');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumOnClick);
function sumOnClick(event) {
    console.log({event});
    event.preventDefault();
    const sumInput = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerHTML = `El resultado es: ${sumInput}`;
};

btnRes.addEventListener('click', resOnClick);
function resOnClick() {
    const resInput = parseInt(input1.value) - parseInt(input2.value);
    pResult.innerHTML = `El resultado es: ${resInput}`;
};

btnMul.addEventListener('click', mulOnClick);
function mulOnClick() {
    const mulInput = parseInt(input1.value) * parseInt(input2.value);
    pResult.innerHTML = `El resultado es: ${mulInput}`;
};

btnDiv.addEventListener('click', divOnClick);
function divOnClick() {
    const divInput = parseInt(input1.value) / parseInt(input2.value);
    pResult.innerHTML = `El resultado es: ${divInput}`;
};