const form = document.getElementById('form');
let linhas = '';
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';

        linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    alert(`
    O contato: ${inputNome.value} 
    de numero:  ${inputNumero.value} 
    foi cadastrado! `)

    inputNome.value = '';
    inputNumero.value = '';

})

