const express = require("express");
const TelegramBot = require("node-telegram-bot-api"); // Telegram bot package
require("dotenv").config(); // Load .env file

const app = express();
const port = process.env.PORT || 3000;

// Optional: Serve frontend files from "public" folder
app.use(express.static("public"));

// Health check or default route
app.get("/", (req, res) => {
    res.send("🚀 Telegram Airdrop Server is running!");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// Create bot using token from .env file
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// Handle /start command and show Mini App button
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
