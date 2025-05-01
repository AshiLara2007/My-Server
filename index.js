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

// ✅ Set bot commands
bot.setMyCommands([
    { command: 'start', description: 'Start Game' },
    { command: 'Link', description: 'Referral link' },
]);

// /start handler
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const webAppUrl = "https://my-server-production-17ad.up.railway.app/";

    const message = `Welcome to our Game Dev Coin Project.
You can join hands with us and collect $DevG Coins.
You can withdraw those $DevG Coins every day after starting this project. So stay with us.
Also join our channels because we will be posting details every day. Thank you..`;

// /link command handler
bot.onText(/\/link/, (msg) => {
    const chatId = msg.chat.id;
    const referralLink = `https://t.me/game_dev_coin_bot?start=${chatId}`; // or custom link
    bot.sendMessage(chatId, `🔗 Your referral link:\n${referralLink}`);
});

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
