var ttt = require('./index.js');

var readline = require('readline');
var reader = readline.createInterface(process.stdin,
                                      process.stdout, null);

var game = new ttt.Game(reader, "bmo", "ben");
// var game = new Game
game.play(reader.close.bind(reader));
