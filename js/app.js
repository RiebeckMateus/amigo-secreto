let friends = [];

function adicionar() {
    let inputName = document.getElementById('nome-amigo').value;
    let includedList = document.getElementById('lista-amigos');
    
    if (inputName == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    if (friends.includes(inputName)) {
        alert('Nome já adicionado');
        return;
    }

    friends.push(inputName);
    
    if (inputName.trim() !== '') {
        if (includedList.textContent) {
            includedList.textContent += ', ';
        }
        includedList.textContent += inputName;
    }

    document.getElementById('nome-amigo').value = '';

}

function sortear() {

    if (friends.length < 4) {
        alert('Adiciona pelo menos 4 pessoas!')
        return;
    }

    sortingList(friends);
    let sortList = document.getElementById('lista-sorteio');
    sortList.innerHTML = '';
    for (let i=0; i < friends.length; i++) {
        if (i == friends.length - 1) {
            sortList.innerHTML = sortList.innerHTML + friends[i] + ' --> ' + friends[0] + '<br>';
        } else {
            sortList.innerHTML = sortList.innerHTML + friends[i] + ' --> ' + friends[i + 1] + '<br>';
        }
    }
}

function reiniciar() {
    friends = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}

function sortingList(list_) { // baseado no algorítimo de Fisher-Yates
    for (let i = list_.length; i; i--) {
        const iRandom = Math.floor(Math.random() * i);

        [list_[i-1], list_[iRandom]] = [list_[iRandom], list_[i-1]];
    }
}

// desafios

function validacaoNumero(n) {
    let z = parseFloat(n);

    if (z < 0) {
        console.log('Número negativo');
    } else if (z === 0) {
        console.log('Número é zero');
    } else {
        console.log('Número positivo');
    }
}

function validarIdade(n) {
    return n >=18 ? console.log('maior') : console.log('menor');
}

function stringVazia(string) {
    return string === '' ? alert('string vazia') : alert('string não vazia');
}

function anoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !==0) || (ano % 400 === 0)) {
        return alert('Ano bissexto');
    } else {
        return alert('Ano não bissexto');
    }
}

function media(...n) {
        let zLength = n.length;
        let z = n.reduce((total, valor) => total + valor, 0);
        return alert(z / zLength);
}

function arrayLength(array) {
    return alert(array.length);
}

function confirmarValorArray(x, array) {
    if (array.includes(x)) {
        return alert(`O valor ${x} está contido na lista`);
    } else {
        return alert(`O valor ${x} não está contido na lista`);

    }
}

let arrayStrings = ['um', 'dois', 'tres'];