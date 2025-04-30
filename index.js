const express = require("express");
const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("🚀 Telegram Airdrop Server is running!");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const webAppUrl = "https://my-server-production-17ad.up.railway.app/";

    const message = `Welcome to our Game Dev Coin Project.\n\n

You can join hands with us and collect $DevG Coins...`;

    bot.sendMessage(chatId, message, {
        reply_markup: {
            inline_keyboard: [
                [{ text: "Start Game !", web_app: { url: webAppUrl } }],
                [
                    { text: "Join Channel (EN)", url: "https://t.me/game_dev_coin_en" },
                    { text: "Join Channel (RU)", url: "https://t.me/game_dev_coin_ru" }
                ],
            ]
        }
    });
});
