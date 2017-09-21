const Discord = require('discord.js');
const Nayyf = new Discord.Client();
const config = require("./config.json")
console.log('Connecting...!! :D');
//Crash haltings
process.on('  ERROR FOR HELP JOIN MY SUPPORT SERVER https://discord.gg/EzAHsr6 ..  | 404 \n uncaughtException   :( )', err => {
    console.log(` Error: \n${err}`);
});
Nayyf.on('warnn', info => {
    console.log(` ERROR FOR HELP JOIN MY SUPPORT SERVER https://discord.gg/EzAHsr6 ..  | 404 \n D.js Warning: \n${info}`)
});
process.on('unhandledRejection', (reason) => {
    console.log(`ERROR FOR HELP JOIN MY SUPPORT SERVER https://discord.gg/EzAHsr6 ..  | 404 \n${reason}`);
});
Nayyf.on('ready', () => {
    Nayyf.user.setPresence({
  status: 'online',
  game: {
     type: 0,
     name: `${config.name}`,
     state: `${config.state}`,
     details: `${config.subText}`,
     application_id: `${config.applicationID}`,
     assets: {
        small_image: `${config.smallImgID}`,
        small_text: `${config.smallImgText}`,
        large_image: `${config.largeImgID}`,
        large_text: `By Yuzema YT` }
    }
    });
    console.log(` The Hack Is ON :D <3  \n Don't Forget to subscribe my channel in YT ( Yuzema )`);
});
Nayyf.login(`${config.token}`);
