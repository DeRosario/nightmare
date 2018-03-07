const getHeroes = require("./getHeroes.js");
// const Nightmare = require('nightmare');
// const fs = require('fs');
// const colors = require('colors/safe');

let init = getHeroes.get_heroes;

init.then( console.log('hello') );
// console.log(start(getHeroes.nightmare))
