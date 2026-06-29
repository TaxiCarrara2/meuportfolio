/* Alterar entre o tema claro e escuro */

const btnTema = document.getElementById('mudar_tema');

btnTema.addEventListener('click', function() {
    document.body.classList.toggle('tema_escuro');
    document.body.classList.toggle('tema_claro');

    /* Trocar o ícone do botão */
    if (document.body.classList.contains('tema_escuro')) {
        btnTema.textContent = '☀️';
    } else {
        btnTema.textContent = '🌙';
    }
});

/* Confirmações do contato */

document.getElementById('form_contato').addEventListener('submit', function(event) {
    
    event.preventDefault();

    /* Captura os valores dos campos */
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    /* Verificar se os campos estão preenchidos */
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    /* Verificar se o e-mail tem formato válido */
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoEmail.test(email)) {
        alert('Por favor, insira um e-mail válido!');
        return;
    }

    /* Alerta de envio da emnsagem */
    alert('Mensagem enviada com sucesso! Obrigado por entrar em contato!');

    /* Limpar os campos depois de enviar */
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';
});