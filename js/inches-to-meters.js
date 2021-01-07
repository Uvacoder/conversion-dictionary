/*
    Converting between inches and meters

    1 meter = 39.37 inches
    1 inch = 1 / 39.37 meters
*/


const input = document.querySelector("#input");
const submit = document.querySelector("#calc-im");
const result = document.querySelector(".im-result");

const iRadio = document.querySelector("#inches");
const mRadio = document.querySelector("#meters");

function convert(length) {
    const l = length;
    if (iRadio.checked) {
        const m = l / 39.37;
        result.innerHTML = `${l} inches is ${m.toFixed(3)} meters.`;
    } else if (mRadio.checked) {
        const i = l * 39.37;
        result.innerHTML = `${l} meters is ${i.toFixed(3)} inches.`;
    }
};

submit.addEventListener("click", function() {
    convert(input.value);
});