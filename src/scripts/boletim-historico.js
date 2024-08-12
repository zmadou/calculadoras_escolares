document.getElementById('historico-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const totalFalta = parseFloat(document.getElementById('total-falta').value);
    const cargaHorariaPresenca = parseFloat(document.getElementById('carga-horaria-presenca').value);

    if (isNaN(totalFalta) || isNaN(cargaHorariaPresenca) || cargaHorariaPresenca === 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const porcentagemFaltas = (totalFalta * 100) / cargaHorariaPresenca;
    const frequenciaPresenca = 100 - porcentagemFaltas;
    let resultSection = document.querySelector('.result');
    resultSection.textContent = `A porcentagem de faltas é: ${porcentagemFaltas.toFixed(2)}%. A frequência de presença é: ${frequenciaPresenca.toFixed(2)}%`;
    resultSection.classList.remove('d-none');
});
