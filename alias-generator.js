var adjectives = [
    'ambivalent',
    'blue',
    'curious',
    'disgraced',
    'enormous',
    'flawless',
    'furious',
    'happy',
    'indignant',
    'jolly',
    'killer',
    'magnificent',
    'miniature',
    'orange',
    'outrageous',
    'silent',
    'stern',
    'violent',
    'zen'
];

var nouns = [
    'alien',
    'butterfly',
    'cowboy',
    'cartographer',
    'cyborg',
    'dingo',
    'eagle',
    'fox',
    'greyhound',
    'haddock',
    'martian',
    'nanobot',
    'otter',
    'parrot',
    'robot',
    'spy',
    'warrior',
    'wizard',
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
