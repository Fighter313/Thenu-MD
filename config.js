const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "gd5HkL7K#oRZyg64N0C1RPEAl-owGIXDHojrvA7VViLt1bzcWf6I",
MONGODB: process.env.MONGODB || "enter mongodb url",
PREFIX: process.env.PREFIX || ".",
BOT_NAME: process.env.BOT_NAME || "Thenu-MD",
BOT_NUMBER: process.env.BOT_NUMBER || "923493936980",

};
