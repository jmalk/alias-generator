var adjectives = [
    'disgraced',
    'flawless',
    'furious',
    'silent',
    'stern',
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

function makeAlias() {
    'use strict';
    return getRandomElementOf(adjectives) + getRandomElementOf(nouns);
}

function printAliasToDocument() {
    'use strict';
    var aliasParagraph = document.getElementById("alias");
    aliasParagraph.innerHTML = makeAlias();
}
