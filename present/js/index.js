var $ = function(x) { return document.getElementById(x); }
var load = function(head, content) {
    $('header').innerHTML = '<h1>'+head+'</h1>';
    $('content').innerHTML = '<div>'+content.join('</div><div>')+'</div>';
}
var landing = function() {
    load('Happy Birthday!', [
        '<button onclick="likegaming();">Thanks</button>'
    ]);
}
var likegaming = function() {
    load('Do you like games?', [
        '<button onclick="whichgames();">Yeah!</button>',
        '<button onclick="loser();">Nah</button>'
    ]);
}
var whichgames = function() {
    load('What kinds?', [
        '<button onclick="loser();">Only vidya</button>',
        '<button onclick="usedice();">Tabletop is cool too</button>'
    ]);
}
var usedice = function() {
    load('Are we talkin\' board games or what?', [
        '<button onclick="loser();">Monopoly 4 lyfe</button>',
        '<button onclick="gooddice();">Eurogames, MTG, Tephra...</button>'
    ]);
}
var gooddice = function() {
    load('So you roll a lot of dice, huh?', [
        '<button onclick="lotsodice();">All day erry day</button>',
        '<button onclick="loser();">Dice are for nerrrrrrds</button>'
    ]);
}
var lotsodice = function() {
    load('Doesn\'t that tire out your hand?', [
        '<button onclick="derp();">Um, no?</button>',
        '<button onclick="derp();">Dawg dice are light</button>',
        '<button onclick="derp();">What weird-ass dice do you even use</button>'
    ]);
}
var derp = function() {
    load('Okay yeah that was a dumb question', [
        '<button onclick="srsly();">Seriously.</button>'
    ]);
}
var srsly = function() {
    load('But, like, it\'s mildly annoying to keep them on the table, right?', [
        '<button onclick="falloff();">Yeah, true</button>',
        '<button onclick="alaina();">Nah, I have a dice tray</button>',
        '<button onclick="loser();">Not really</button>'
    ]);
}
var alaina = function() {
    load('That doesn\'t stop Alaina :3', [
        '<button onclick="falloff();">...</button>'
    ]);
}
var falloff = function() {
    load('But you could just roll gently', [
        '<button onclick="hard();">I roll how I want</button>',
        '<button onclick="random();">That\'s insufficiently random</button>'
    ]);
}
var hard = function() {
    load('Aight man, you do you...', [
        '<button onclick="landing();">Damn straight (start over)</button>'
    ]);
}
var random = function() {
    load('*morpheus* What if I told you could roll gently and randomly?', [
        '<button onclick="loser();">I\'d assume you were scammin\' me</button>',
        '<button onclick="signup();">Sign me up bro</button>'
    ]);
}
var signup = function() {
    load('Way ahead of you: it\'s in the mail!', [
        '<img width="500px" src="img/cherry.jpg" />'
    ]);
}
var loser = function() {
    load('Oh. Okay.', [
        '<h3>This probably isn\'t for you then.</h3>',
        '<button onclick="landing();">(start over)</button>'
    ]);
}
window.onload = landing
