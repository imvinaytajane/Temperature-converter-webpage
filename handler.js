document.getElementById('temp_form').onsubmit = (e) => e.preventDefault();

document.getElementById('celcius').onkeyup = celciusUpdated;
document.getElementById('celcius').onmouseup = celciusUpdated;
document.getElementById('farenheit').onkeyup = farenheitUpdated;
document.getElementById('farenheit').onmouseup = farenheitUpdated;
document.getElementById('kelvin').onkeyup = kelvinUpdated;
document.getElementById('kelvin').onmouseup = kelvinUpdated;

function celciusUpdated() {
    let celcius = parseFloat(document.getElementById('celcius').value);
    if (isNaN(celcius)) celcius = 0;
    setValues(celcius, convertCelciusToFarenheit(celcius).toFixed(2), convertCelciusToKelvin(celcius).toFixed(2));
}
function farenheitUpdated() {
    let farenheit = parseFloat(document.getElementById('farenheit').value);
    if (isNaN(farenheit)) farenheit = 0;
    const celcius = convertFarenheitToCelcius(farenheit);
    setValues(celcius.toFixed(2), farenheit, convertCelciusToKelvin(celcius).toFixed(2));
}
function kelvinUpdated() {
    let kelvin = parseFloat(document.getElementById('kelvin').value);
    if (isNaN(kelvin)) kelvin = 0;
    const celcius = convertKelvinToCelcius(kelvin);
    setValues(celcius.toFixed(2), convertCelciusToFarenheit(celcius).toFixed(2), kelvin);
}
function setValues(celcius, farenheit, kelvin) {
    document.getElementById('celcius').value = celcius;
    document.getElementById('farenheit').value = farenheit;
    document.getElementById('kelvin').value = kelvin;
}