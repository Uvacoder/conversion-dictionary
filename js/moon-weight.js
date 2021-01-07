/*
    Calculate your effective weight on the Moon
*/

const wght = document.querySelector("#weight");
const submit = document.querySelector(".calc-moon");
const result = document.querySelector(".moon-result");

const earthGravity = 9.807; // m/s^2
const moonGravity = 9.807 * 0.17; // 17% of Earths gravity

/**
 * 
 * @param {Number} weight Your current weight on Earth. Input as a whole value integer value or floating-point value.
 * @return {Number} Returns your effective weight on the Moon.
 */
function calcWeight(weight) {
    const currentWeight = weight;
    res = (currentWeight / earthGravity) * moonGravity;
    console.log(typeof res);
    result.innerHTML = `Your Earth weight is ${currentWeight} lbs. Your effective weight on the Moon is ${res.toFixed(2)} lbs`;
    return result.innerHTML;
};


submit.addEventListener("click", function() {
    const val = wght.value;
    calcWeight(val);
});