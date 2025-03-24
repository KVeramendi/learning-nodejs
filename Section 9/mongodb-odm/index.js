const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
const axios = require('axios');
const cheerio = require('cheerio');
const cron = require('node-cron');
const { BreakingNew } = require('./models');

console.log('Debugging:');
console.log('MONGO_URI:' + MONGO_URI);

mongoose.connect(MONGO_URI, { useNewUrlParser: true }, { useUnifiedTopology: true });

cron.schedule('* * * * * *', async () => {
    console.log('Cron job Executed');
    const html = await axios.get('https://www.vidaextra.com/');
    const $ = cheerio.load(html.data);
    const titles = $('.abstract-title');
    titles.each((index, element) => {
        const breakingNew = {
            title: $(element).children().text(),
            link: $(element).children().attr('href')
        };
        BreakingNew.create([breakingNew]);
    });
});
