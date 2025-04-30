const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("🚀 Telegram Airdrop Server is running!");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
const TelegramBot = require('7637293918:AAHSptTosL8dQkr1xEGVZqxm2IlNT5zW0Fg');
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const url = "https://my-server-production-17ad.up.railway.app/";

    bot.sendMessage(chatId, "Click the button below to start the app", {
        reply_markup: {
            inline_keyboard: [[
                { text: "Open App", web_app: { url: url } }
            ]]
        }
    });
});
