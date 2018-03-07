const Nightmare = require('nightmare');
const fs = require('fs');
const colors = require('colors/safe');

module.exports = {};

module.exports.get_heroes = Nightmare({
    show: false,
    width: 1920,
    height: 1080
  }).goto('https://playoverwatch.com/fr-fr/heroes/')
  // .wait(1000)
  .evaluate(() => {
    let championsNumber = document.querySelectorAll('span.portrait-title').length;

    const informations = [];
    let target = document.querySelectorAll('div[data-groups]');

    for (let i = 0; i < championsNumber; i++) {
      informations[i] = {
        name: target[i].innerText,
        category: target[i].dataset.groups.replace(/\[|\]|\"/g, '').toLowerCase()
      };
    }
    return informations;
  })
  .end()
  .then((datas) => {
    datas = JSON.stringify(datas);
    fs.writeFile("./test.json", datas, function(err) {
      if (err) {
        return console.log(err);
      }

      console.log(colors.green("The file was saved!"));
    });
  })
  .catch(error => {
    console.error('Search failed:', error);
  });
