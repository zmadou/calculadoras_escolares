document.querySelectorAll('[data-aulas]').forEach(button => {
    button.addEventListener('click', function() {

        document.querySelectorAll('[data-aulas]').forEach(btn => {
            btn.classList.remove('active');
        });

        this.classList.add('active');

        document.querySelector('#frequencia-form').classList.remove('d-none');
        document.querySelector('#error-message').classList.add('d-none');
    });
});

document.getElementById('frequencia-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const aulasPorDia = document.querySelector('.btn-custom.active').getAttribute('data-aulas');
    const diasLetivos = parseFloat(document.getElementById('dias-letivos').value) * parseFloat(aulasPorDia);
    const faltas = parseFloat(document.getElementById('faltas').value);

    if (isNaN(diasLetivos) || isNaN(faltas) || diasLetivos === 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const frequencia = ((diasLetivos - faltas) * 100) / diasLetivos;
    document.querySelector('.result').textContent = `A frequência do aluno é: ${frequencia.toFixed(2)}%`;
    document.querySelector('.result').classList.remove('d-none');
    let progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = `${frequencia}%`;
});
