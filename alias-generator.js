var adjectives = [
    'ambivalent',
    'blue',
    'colorful',
    'curious',
    'disgraced',
    'enormous',
    'flawless',
    'furious',
    'green',
    'happy',
    'indignant',
    'jolly',
    'killer',
    'magnificent',
    'miniature',
    'orange',
    'outrageous',
    'red',
    'silent',
    'stern',
    'violent',
    'yellow',
    'zen'
];

var nouns = [
    'alien',
    'butterfly',
    'cowboy',
    'cartographer',
    'eagle',
    'fox',
    'greyhound',
    'haddock',
    'otter',
    'parrot',
    'zebra'
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
