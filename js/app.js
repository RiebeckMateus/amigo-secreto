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