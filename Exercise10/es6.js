function additionBy() {
    const numb1 = document.getElementById('numbOne').value;
    const numb2 = document.getElementById('numbTwo').value;
    const results = Number(numb1) + Number(numb2);
    document.getElementById('results').innerHTML = results;
}
function SubtractionBy() {
    numb1 = document.getElementById('numbOne').value;
    numb2 = document.getElementById('numbTwo').value;
    document.getElementById('results').innerHTML = numb1 - numb2;
}