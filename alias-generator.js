var adjectives = [
    'flawless',
    'silent',
    'magnificent',
    'outrageous',
    'colorful'
];

var nouns = [
    'cowboy',
    'cartographer',
    'fox',
    'greyhound',
    'otter',
    'parrot',
    'eagle',
    'butterfly',
    'haddock'
];

function getRandomElementOf(array) {
    'use strict';
    return array[Math.floor(Math.random() * array.length)];
}

console.log(getRandomElementOf(adjectives), getRandomElementOf(nouns));
