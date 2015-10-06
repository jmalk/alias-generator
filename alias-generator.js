var adjectives = ['flawless', 'silent'];
var nouns = ['cowboy', 'cartographer'];

function getRandomElementOf(array) {
    'use strict';
    return array[Math.floor(Math.random() * array.length)];
}

console.log(getRandomElementOf(adjectives), getRandomElementOf(nouns));
