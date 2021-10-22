import geraSenha from './modules/geraSenha.js';

document.addEventListener('click', (e) => {
    const elemento = e.target;

    if(elemento.classList.contains('botao')) {
        const qnt = document.querySelector('.quantidade');
        mostraSenha(qnt.value);
    }
})

function mostraSenha(quantidade) {
    const checkList = document.querySelectorAll('.opcao:checked');
    const display = document.querySelector('.gerado');
    
    if(quantidade === '') {
        display.innerText = "Por favor, digite uma quantidade!!!";
        return;
    }
    if(quantidade < 1 || quantidade > 30) {
        display.innerText = "A quantidade tem que estar entre 1 e 30!!!";
        return;
    }
    if(checkList[0] == undefined) {
        display.innerText = "Nada foi selecionado!!!";
        return;
    }

    const check = [];
    for(let i = 0; i < checkList.length; i++) {
        check.push(checkList[i].value);
    }
    
    display.innerText = geraSenha(quantidade, check);
}