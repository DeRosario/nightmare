const Nightmare = require('nightmare');
const fs = require('fs');
const colors = require('colors/safe');



const champions = ['doomfist', 'widowmaker'];
const presentation = [];

champions.forEach((champion) => {
  let nightmare = Nightmare({
    show: false,
    width: 1920,
    height: 1080
  });

  nightmare
    .goto('https://playoverwatch.com/fr-fr/heroes/' + champion + '/')
    .wait(1000)
    .evaluate(() => document.querySelector('#overview > div:nth-child(1) > p').innerHTML)
    .end()
    .then((link) => {
      console.log(colors.cyan('Pushing description of the champion : ' ) + colors.yellow(champion));
      presentation.push(link);
      if (champions[champions.length - 1] === champion && presentation.length === champions.length) {
        console.log('presentation : ', presentation);

        const obj = [];

        for (let i = 0; i < presentation.length; i++) {
          obj.push({
            champion: champions[i],
            description: presentation[i]
          });
        }

        var json = JSON.stringify(obj);

        console.log(json);
        fs.writeFile("./test.json", json, function(err) {
          if (err) {
            return console.log(err);
          }

          console.log("The file was saved!");
        });

      }
    })
    .catch(error => {
      console.error('Search failed:', error);
    });


});



//*[@id="heroes-selector-container"]/div[1]/a/span/span[2]


//
// var champions = ['1', '2'];
// var presentation = ['3', '4'];
//
//
// const obj = [];
//
// for (let i = 0; i < presentation.length; i++) {
//   obj.push({
//     champion: champions[i],
//     description: presentation[i]
//   });
// }
//
// var json = JSON.stringify(obj);
//
//
// fs.writeFile("./test.json", json, function(err) {
//   if (err) {
//     return console.log(err);
//   }
//
//   console.log("The file was saved!");
// });







// nightmare
//   .goto('https://playoverwatch.com/fr-fr/heroes/doomfist/')
//   .wait(1000)
//   .evaluate(() => document.querySelector('#overview > div:nth-child(1) > p').innerHTML)
//   .then((link) => {
//     console.log(link)
//   })
//   .catch(error => {
//     console.error('Search failed:', error)
//   });
//
//    nightmare = Nightmare({
//     show: true,
//     width: 1920,
//     height: 1080
//   });
//
// nightmare
//   .goto('https://playoverwatch.com/fr-fr/heroes/widowmaker/')
//   .wait(2000)
//   .evaluate(() => document.querySelector('#overview > div:nth-child(1) > p').innerHTML)
//   .end()
//   .then((link) => {
//     console.log(link)
//   })
//   .catch(error => {
//     console.error('Search failed:', error)
//   })





//
// nightmare
//   .goto('https://playoverwatch.com/fr-fr/heroes/widowmaker/')
//   .wait(2000)
//   // .screenshot('screenshot/screenshot.png')
//   // .type('#lst-ib', 'overwatch')
//   // .click('.jsb center input')
//   // .wait(2000)
//   // .screenshot('screenshot/screenshot.png')
//   // .click('#rhs_block > div > div.kp-blk.knowledge-panel._Rqb._RJe > div > div._OKe > div:nth-child(2) > div._G1d._wle._xle > div > div:nth-child(1) > div > div > div > span:nth-child(2) > a')
//
//   // .wait(500)
//   // .type('html', '\u000d')
//   // .click('#search_button_homepage')
//   // .wait('#r1-0 a.result__a')
//   .evaluate(() => document.querySelector('#overview > div:nth-child(1) > p').innerHTML)
//
//   // .end()
//   .then((link) => {
//
//     console.log(link)
//
//     // var obj = {
//     //   table: []
//     // };
//     //
//     // obj.table.push({
//     //   id: 1,
//     //   square: 2
//     // });
//     //
//     // var json = JSON.stringify(obj);
//
//     // fs.writeFile("./test.json", json, function(err) {
//     //   if (err) {
//     //     return console.log(err);
//     //   }
//     //
//     //   console.log("The file was saved!");
//     // });
//
//
//   })
//   .catch(error => {
//     console.error('Search failed:', error)
//   })
