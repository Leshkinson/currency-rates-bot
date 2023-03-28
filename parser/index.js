import fs from "fs";
import axios from "axios";
import {JSDOM, VirtualConsole} from "jsdom";
import cloneDeep from "lodash/cloneDeep.js";
//import path from "path";
//import cron from "node-cron";

export class Parser_myFin {
    constructor(linkMyFin) {
        this.linkMyFin = linkMyFin
    }

    getListOfCurrencyRates() {
        return axios.get(this.linkMyFin).then(response => {
            const virtualConsole = new VirtualConsole();
            const dom = new JSDOM(response.data, {virtualConsole}).window.document;
            const arrayOfBank = dom.getElementById('currency-table').lastChild.rows;
            virtualConsole.sendTo(console)
            let currencyRatesOfBanks = [];
            let currencyRatesOfTheBank = {
                nameOfBank: "",
                currency: [
                    {
                        USA: {
                            buy: '',
                            sale: ''
                        }

                    },
                    {
                        EUR: {
                            buy: '',
                            sale: ''
                        }
                    },
                    {
                        RUB: {
                            buy: '',
                            sale: ''
                        }
                    },
                ]
            };
            for (let i = 6; i < arrayOfBank.length - 1; i++) {
                if (i % 2 === 0) {
                    const copyObject = cloneDeep(currencyRatesOfTheBank)
                    copyObject.nameOfBank = arrayOfBank[i].getElementsByTagName('a')[0].textContent;
                    copyObject.currency[0].USA.buy = arrayOfBank[i].getElementsByTagName('span')[1].textContent;
                    copyObject.currency[0].USA.sale = arrayOfBank[i].getElementsByTagName('span')[2].textContent;
                    copyObject.currency[1].EUR.buy = arrayOfBank[i].getElementsByTagName('span')[3].textContent;
                    copyObject.currency[1].EUR.sale = arrayOfBank[i].getElementsByTagName('span')[4].textContent;
                    copyObject.currency[2].RUB.buy = arrayOfBank[i].getElementsByTagName('span')[5].textContent;
                    copyObject.currency[2].RUB.sale = arrayOfBank[i].getElementsByTagName('span')[6].textContent;
                    currencyRatesOfBanks.push(copyObject);
                }
            }

            fs.writeFile('currency.json', JSON.stringify(currencyRatesOfBanks), (err) => {
                if (err) throw err;
                console.log('File created');
            });
        })
    }

    getHeader() {
        return axios.get(this.linkMyFin)
            .then(response => {
                const dom = new JSDOM(response.data).window.document;
                const header =  dom.getElementsByTagName('h1').item(0).textContent
                fs.writeFile('header.json', JSON.stringify(header), (err) => {
                    if (err) throw err;
                    console.log('Header created');
                });
            })
    }
}

const parser = new Parser_myFin('https://myfin.by/currency/minsk')

// cron.schedule('30 * * * 1-5', async () => {
//     await parser.getListOfCurrencyRates()
//         .then(() => console.log('good parsing'))
//         .catch((error) => console.log(error.message))
//
//     await parser.getHeader()
// });

await parser.getListOfCurrencyRates()
    .then(() => console.log('good parsing'))
    .catch((error) => console.log(error.message))

await parser.getHeader()
