var bot1 = getUrlParam('bot');
var bot2 = 'testbot';
var rounds = getUrlParam('rounds');
var speed = getUrlParam('speed')
if (!bot1) {
    bot1 = 'testbot';
}

if (!rounds) {
    rounds = 5;
}

if (!speed) {
    speed = 20;
}

rounds = parseInt(rounds);
var bot1File = (bot1.startsWith('/') ? '' : 'bots/') + bot1 + '/main.js';
var bot2File = (bot2.startsWith('/') ? '' : 'bots/') + bot2 + '/main.js';

duel = new Duel(bot1File, bot2File, rounds, speed);
duel.drawScans = getUrlParam('drawScans') != null;
duel.drawDebug = getUrlParam('drawDebug') != null;

duel.drawScans = true;

duel.onFinished = function (bot1score, bot2score) {
    if (window != window.top) {
        top.battleFinished(bot1score, bot2score);
    }
    if (getUrlParam('redirecturl')) {
        var url = getUrlParam('redirecturl') + '?bot1=' + bot1 + '&bot2=' + bot2 + '&score1=' + bot1score + '&score2=' + bot2score;

        window.location.href = url;
    }
}

duel.start();