function calculate() {
    const billAmount = document.getElementById("billAmount").value;
    const tipAmount = document.getElementById("tipAmount").value;
    const numOfPeople = document.getElementById("numOfPeople").value;

    if (billAmount === "" || tipAmount === 0) {
        alert('Please enter bill amount');
        return;
    }
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    var total = (billAmount * tipAmount) / numOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totalTipAmount").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

document.getElementById("totalTipAmount").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate-btn").onclick = function () {
    calculate();
}