import fs from "fs";
import dotenv from 'dotenv';
import TelegramApi from "node-telegram-bot-api";

dotenv.config();

const bot = new TelegramApi(`${process.env.TELEGRAM_API_TOKEN}`, {polling: true})


    bot.on('message', async msg => {
        const text = msg.text
        const chatId = msg.chat.id;

        const form = {
            reply_markup: ({
                keyboard: [
                    [{text: `🇺🇸 USD`}, {text: `🇪🇺 EUR`}, {text: `🇷🇺 RUB`}],
                ],
                resize_keyboard: true,
                one_time_keyboard: true,
            })
        }
        if (text === '/start') {
            // const form = {
            //     reply_markup: ({
            //         keyboard: [
            //             [{text: `🇺🇸 USD`}, {text: `🇪🇺 EUR`}, {text: `🇷🇺 RUB`}],
            //         ],
            //         resize_keyboard: true,
            //         one_time_keyboard: true,
            //     }),
            // };
            await bot.sendMessage(chatId, `Выберите нужную Вам валюту`, form);

            return
        }

        if (text === '🇺🇸 USD') {
            const header = JSON.parse(fs.readFileSync('./parser/header.json', 'utf8'))
            fs.readFile('./parser/currency.json', 'utf8', async (err, data) => {
                if (err) throw err;
                const usa = JSON.parse(data);
                const answer = `*${header}*
            
🇺🇸 *USD* 🇺🇸            
*ПОКУПКА / ПРОДАЖА*
🏦 _${usa[0].nameOfBank}_:   *${usa[0].currency[0].USA.buy} / ${usa[0].currency[0].USA.sale}*
🏦 _${usa[1].nameOfBank}_:   *${usa[1].currency[0].USA.buy} / ${usa[1].currency[0].USA.sale}*
🏦 _${usa[2].nameOfBank}_:   *${usa[2].currency[0].USA.buy} / ${usa[2].currency[0].USA.sale}*
🏦 _${usa[3].nameOfBank}_:   *${usa[3].currency[0].USA.buy} / ${usa[3].currency[0].USA.sale}*
🏦 _${usa[4].nameOfBank}_:   *${usa[4].currency[0].USA.buy} / ${usa[4].currency[0].USA.sale}*
🏦 _${usa[5].nameOfBank}_:   *${usa[5].currency[0].USA.buy} / ${usa[5].currency[0].USA.sale}*
🏦 _${usa[6].nameOfBank}_:   *${usa[6].currency[0].USA.buy} / ${usa[6].currency[0].USA.sale}*
🏦 _${usa[7].nameOfBank}_:   *${usa[7].currency[0].USA.buy} / ${usa[7].currency[0].USA.sale}*
🏦 _${usa[8].nameOfBank}_:   *${usa[8].currency[0].USA.buy} / ${usa[8].currency[0].USA.sale}*
🏦 _${usa[9].nameOfBank}_:   *${usa[9].currency[0].USA.buy} / ${usa[9].currency[0].USA.sale}*
🏦 _${usa[10].nameOfBank}_:   *${usa[10].currency[0].USA.buy} / ${usa[10].currency[0].USA.sale}*
🏦 _${usa[11].nameOfBank}_:   *${usa[11].currency[0].USA.buy} / ${usa[11].currency[0].USA.sale}*
🏦 _${usa[12].nameOfBank}_:   *${usa[12].currency[0].USA.buy} / ${usa[12].currency[0].USA.sale}*
🏦 _${usa[13].nameOfBank}_:   *${usa[13].currency[0].USA.buy} / ${usa[13].currency[0].USA.sale}*
🏦 _${usa[14].nameOfBank}_:   *${usa[14].currency[0].USA.buy} / ${usa[14].currency[0].USA.sale}*
🏦 _${usa[15].nameOfBank}_:   *${usa[15].currency[0].USA.buy} / ${usa[15].currency[0].USA.sale}*
🏦 _${usa[16].nameOfBank}_:   *${usa[16].currency[0].USA.buy} / ${usa[16].currency[0].USA.sale}*
🏦 _${usa[17].nameOfBank}_:   *${usa[17].currency[0].USA.buy} / ${usa[17].currency[0].USA.sale}*
🏦 _${usa[18].nameOfBank}_:   *${usa[18].currency[0].USA.buy} / ${usa[18].currency[0].USA.sale}*
🏦 _${usa[19].nameOfBank}_:   *${usa[19].currency[0].USA.buy} / ${usa[19].currency[0].USA.sale}*
🏦 _${usa[20].nameOfBank}_:   *${usa[20].currency[0].USA.buy} / ${usa[20].currency[0].USA.sale}*
🏦 _${usa[21].nameOfBank}_:   *${usa[21].currency[0].USA.buy} / ${usa[21].currency[0].USA.sale}*`;
                await bot.sendMessage(chatId, answer, {parse_mode: "Markdown"});
            })
        }

        if (text === '🇪🇺 EUR') {
            const header = JSON.parse(fs.readFileSync('./parser/header.json', 'utf8'))
            fs.readFile('./parser/currency.json', 'utf8', async (err, data) => {
                if (err) throw err;
                const usa = JSON.parse(data);
                const answer = `*${header}*
            
🇪🇺 *EUR* 🇪🇺           
*ПОКУПКА / ПРОДАЖА*
🏦 _${usa[0].nameOfBank}_:   *${usa[0].currency[1].EUR.buy} / ${usa[0].currency[1].EUR.sale}*
🏦 _${usa[1].nameOfBank}_:   *${usa[1].currency[1].EUR.buy} / ${usa[1].currency[1].EUR.sale}*
🏦 _${usa[2].nameOfBank}_:   *${usa[2].currency[1].EUR.buy} / ${usa[2].currency[1].EUR.sale}*
🏦 _${usa[3].nameOfBank}_:   *${usa[3].currency[1].EUR.buy} / ${usa[3].currency[1].EUR.sale}*
🏦 _${usa[4].nameOfBank}_:   *${usa[4].currency[1].EUR.buy} / ${usa[4].currency[1].EUR.sale}*
🏦 _${usa[5].nameOfBank}_:   *${usa[5].currency[1].EUR.buy} / ${usa[5].currency[1].EUR.sale}*
🏦 _${usa[6].nameOfBank}_:   *${usa[6].currency[1].EUR.buy} / ${usa[6].currency[1].EUR.sale}*
🏦 _${usa[7].nameOfBank}_:   *${usa[7].currency[1].EUR.buy} / ${usa[7].currency[1].EUR.sale}*
🏦 _${usa[8].nameOfBank}_:   *${usa[8].currency[1].EUR.buy} / ${usa[8].currency[1].EUR.sale}*
🏦 _${usa[9].nameOfBank}_:   *${usa[9].currency[1].EUR.buy} / ${usa[9].currency[1].EUR.sale}*
🏦 _${usa[10].nameOfBank}_:   *${usa[10].currency[1].EUR.buy} / ${usa[10].currency[1].EUR.sale}*
🏦 _${usa[11].nameOfBank}_:   *${usa[11].currency[1].EUR.buy} / ${usa[11].currency[1].EUR.sale}*
🏦 _${usa[12].nameOfBank}_:   *${usa[12].currency[1].EUR.buy} / ${usa[12].currency[1].EUR.sale}*
🏦 _${usa[13].nameOfBank}_:   *${usa[13].currency[1].EUR.buy} / ${usa[13].currency[1].EUR.sale}*
🏦 _${usa[14].nameOfBank}_:   *${usa[14].currency[1].EUR.buy} / ${usa[14].currency[1].EUR.sale}*
🏦 _${usa[15].nameOfBank}_:   *${usa[15].currency[1].EUR.buy} / ${usa[15].currency[1].EUR.sale}*
🏦 _${usa[16].nameOfBank}_:   *${usa[16].currency[1].EUR.buy} / ${usa[16].currency[1].EUR.sale}*
🏦 _${usa[17].nameOfBank}_:   *${usa[17].currency[1].EUR.buy} / ${usa[17].currency[1].EUR.sale}*
🏦 _${usa[18].nameOfBank}_:   *${usa[18].currency[1].EUR.buy} / ${usa[18].currency[1].EUR.sale}*
🏦 _${usa[19].nameOfBank}_:   *${usa[19].currency[1].EUR.buy} / ${usa[19].currency[1].EUR.sale}*
🏦 _${usa[20].nameOfBank}_:   *${usa[20].currency[1].EUR.buy} / ${usa[20].currency[1].EUR.sale}*
🏦 _${usa[21].nameOfBank}_:   *${usa[21].currency[1].EUR.buy} / ${usa[21].currency[1].EUR.sale}*`;
                await bot.sendMessage(chatId, answer, {parse_mode: "Markdown"});
            })
        }

        if (text === '🇷🇺 RUB') {
            const header = JSON.parse(fs.readFileSync('./parser/header.json', 'utf8'))
            fs.readFile('./parser/currency.json', 'utf8', async (err, data) => {
                if (err) throw err;
                const usa = JSON.parse(data);
                const answer = `*${header}*
            
🇷🇺 *RUB(100)* 🇷🇺            
*ПОКУПКА / ПРОДАЖА*
🏦 _${usa[0].nameOfBank}_:   *${usa[0].currency[2].RUB.buy} / ${usa[0].currency[2].RUB.sale}*
🏦 _${usa[1].nameOfBank}_:   *${usa[1].currency[2].RUB.buy} / ${usa[1].currency[2].RUB.sale}*
🏦 _${usa[2].nameOfBank}_:   *${usa[2].currency[2].RUB.buy} / ${usa[2].currency[2].RUB.sale}*
🏦 _${usa[3].nameOfBank}_:   *${usa[3].currency[2].RUB.buy} / ${usa[3].currency[2].RUB.sale}*
🏦 _${usa[4].nameOfBank}_:   *${usa[4].currency[2].RUB.buy} / ${usa[4].currency[2].RUB.sale}*
🏦 _${usa[5].nameOfBank}_:   *${usa[5].currency[2].RUB.buy} / ${usa[5].currency[2].RUB.sale}*
🏦 _${usa[6].nameOfBank}_:   *${usa[6].currency[2].RUB.buy} / ${usa[6].currency[2].RUB.sale}*
🏦 _${usa[7].nameOfBank}_:   *${usa[7].currency[2].RUB.buy} / ${usa[7].currency[2].RUB.sale}*
🏦 _${usa[8].nameOfBank}_:   *${usa[8].currency[2].RUB.buy} / ${usa[8].currency[2].RUB.sale}*
🏦 _${usa[9].nameOfBank}_:   *${usa[9].currency[2].RUB.buy} / ${usa[9].currency[2].RUB.sale}*
🏦 _${usa[10].nameOfBank}_:   *${usa[10].currency[2].RUB.buy} / ${usa[10].currency[2].RUB.sale}*
🏦 _${usa[11].nameOfBank}_:   *${usa[11].currency[2].RUB.buy} / ${usa[11].currency[2].RUB.sale}*
🏦 _${usa[12].nameOfBank}_:   *${usa[12].currency[2].RUB.buy} / ${usa[12].currency[2].RUB.sale}*
🏦 _${usa[13].nameOfBank}_:   *${usa[13].currency[2].RUB.buy} / ${usa[13].currency[2].RUB.sale}*
🏦 _${usa[14].nameOfBank}_:   *${usa[14].currency[2].RUB.buy} / ${usa[14].currency[2].RUB.sale}*
🏦 _${usa[15].nameOfBank}_:   *${usa[15].currency[2].RUB.buy} / ${usa[15].currency[2].RUB.sale}*
🏦 _${usa[16].nameOfBank}_:   *${usa[16].currency[2].RUB.buy} / ${usa[16].currency[2].RUB.sale}*
🏦 _${usa[17].nameOfBank}_:   *${usa[17].currency[2].RUB.buy} / ${usa[17].currency[2].RUB.sale}*
🏦 _${usa[18].nameOfBank}_:   *${usa[18].currency[2].RUB.buy} / ${usa[18].currency[2].RUB.sale}*
🏦 _${usa[19].nameOfBank}_:   *${usa[19].currency[2].RUB.buy} / ${usa[19].currency[2].RUB.sale}*
🏦 _${usa[20].nameOfBank}_:   *${usa[20].currency[2].RUB.buy} / ${usa[20].currency[2].RUB.sale}*
🏦 _${usa[21].nameOfBank}_:   *${usa[21].currency[2].RUB.buy} / ${usa[21].currency[2].RUB.sale}*`;
                await bot.sendMessage(chatId, answer, {parse_mode: "Markdown"});
            })
        }

        await bot.sendMessage(chatId, `Выберите нужную Вам, валюту`, form)

        console.log(msg)
    });

// bot.on('message', async msg => {
//     const text = msg.text;
//     const chatId = msg.chat.id;
//     console.log(msg)
//     if (text === '/start') {
//         await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/a6f/1ae/a6f1ae15-7c57-3212-8269-f1a0231ad8c2/1.webp');
//         await bot.sendMessage(chatId, ` Привет ${msg.from?.username} 😟`)
//
//         return
//     }
//     if (text === '/currency') {
//         // await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/a6f/1ae/a6f1ae15-7c57-3212-8269-f1a0231ad8c2/27.webp');
//         // await bot.sendMessage(chatId, `Этот бот пока умеет только так, ${msg.from?.username}`)
//         //
//         // return
//
//         fs.readFile('./parser/currency.json', 'utf8', async (err, data) => {
//             if (err) throw err;
//             let some = JSON.parse(data)
//             const responseMessage = "/answer"
//             await bot.sendMessage(chatId, responseMessage)
//         })
//
//     }
//
//     await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/a6f/1ae/a6f1ae15-7c57-3212-8269-f1a0231ad8c2/8.webp');
//     await bot.sendMessage(chatId, `Не пиши ерунду, иначе наваляю, ${msg.from?.username}`)
//
//     console.log(msg)
// })