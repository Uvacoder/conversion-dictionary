/*
    Calculate the distance between you (a listener) and a lightning strike.
*/

const input = document.querySelector("#time");
const result = document.querySelector(".distance");
const submit = document.querySelector("#cls");

const sound = 1100; // feet per second in air

function toMiles(d) {
    return (d / 5280).toFixed(2);
};

function calculate(time) {
    const t = time; // time interval between sound and seeing strike
    const distance = t * sound;
    return result.innerHTML = `Using a ${t}s time interval. The lightning strike is ${distance} ft away, or about ${toMiles(distance)} miles.`;
};

submit.addEventListener("click", function() {
    calculate(input.value);
});
