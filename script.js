
function checkNumber() {
    var num = document.getElementById("numberInput").value;
    var resultDiv = document.getElementById("result");

    if (num === "") {
        resultDiv.textContent = "Please enter a number.";
        return;
    }

    num = parseInt(num);

    if (num % 2 === 0) {
        resultDiv.textContent = num + " is an even number.";
    } else {
        resultDiv.textContent = num + " is an odd number.";
    }
}