var adjectives = ['flawless'];
var nouns = ['cowboy'];

function getRandomElementOf(array) {
    'use strict';
    return array[Math.floor(Math.random() * array.length)];
}

console.log(getRandomElementOf(nouns));
console.log(adjectives[0] + nouns[0]);
