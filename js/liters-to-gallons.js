const result = document.querySelector(".lg-result");
const submit = document.querySelector("#calc-lg");
const input = document.querySelector("#input");
const iLiters = document.querySelector("#liters");
const iGallons = document.querySelector("#gallons");


function convert(val) {
    const r = val;
    if (iLiters.checked) {
        const g = r / 3.7854;
        result.innerHTML = `${r} liters is ${g.toFixed(2)} gallons.`
    } else if (iGallons.checked) {
        const l = r * 3.7854;
        result.innerHTML = `${r} gallons is ${l.toFixed(2)} liters.`;
    };
};

submit.addEventListener("click", function() {
    convert(input.value);
});