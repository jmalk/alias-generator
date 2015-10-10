var adjectives = [
    'flawless',
    'silent',
    'magnificent',
    'outrageous',
    'colorful',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violent'
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

function logAlias() {
    'use strict';
    console.log(getRandomElementOf(adjectives) + getRandomElementOf(nouns));
}
