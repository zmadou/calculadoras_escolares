document.getElementById('aproveitamento-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const totalPresenca = parseFloat(document.getElementById('total-presenca').value);
    const totalAproveitamento = parseFloat(document.getElementById('total-aproveitamento').value);
    const cargaHoraria = parseFloat(document.getElementById('carga-horaria').value);

    if (isNaN(totalPresenca) || isNaN(totalAproveitamento) || isNaN(cargaHoraria) || cargaHoraria === 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const aproveitamento = (totalPresenca + totalAproveitamento) * 100 / cargaHoraria;
    let resultSection = document.querySelector('.result');
    resultSection.textContent = `O aproveitamento é: ${aproveitamento.toFixed(2)}%`;
    resultSection.classList.remove('d-none');
});