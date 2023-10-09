document.getElementById("submitButton").addEventListener("click", function() {
    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);

    if (!isNaN(campoA) && !isNaN(campoB) && campoB > campoA) {
        document.getElementById("resultMessage").textContent = "Formulário válido! B é maior que A.";
        document.getElementById("resultMessage").style.color = "green";
    } else {
        document.getElementById("resultMessage").textContent = "Formulário inválido! B deve ser maior que A.";
        document.getElementById("resultMessage").style.color = "red";
    }
});