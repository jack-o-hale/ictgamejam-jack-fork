function changeCharacter(name) {
    let newSource = '';
    let newValue = 0;
    switch(name) {
        case 'Brian':
            newSource = 'img/characters/Brian.webp';
            newValue = 1;
            break;
        case 'Christen':
            newSource = 'img/characters/Christen.webp';
            newValue = 2;
            break;
        case 'Jack':
            newSource = 'img/characters/Jack.webp';
            newValue = 3;
            break;
        case 'Jarvis':
            newSource = 'img/characters/Jarvis.webp';
            newValue = 4;
            break;
        case 'Julian':
            newSource = 'img/characters/Julian.webp';
            newValue = 5;
            break;
        case 'Kenny':
            newSource = 'img/characters/Kenny.webp';
            newValue = 6;
            break;
        default:
            newSource = 'img/characters/Noone.webp';
    }
    document.getElementById('character-select').src = newSource;
    document.getElementById('hiddenCharacterSelectValue').value = newValue;
    document.getElementById('minigameStartButton').removeAttribute('disabled');
}