require('dotenv').config();
const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const message = 'Чтобы заказать у меня работу, откройте мини приложение по кнопке снизу!👇';
  
  bot.sendMessage(chatId, message, {
    reply_markup: {
      inline_keyboard: [[
        { text: 'Open Mini-App', web_app: { url: process.env.MINI_APP_URL } }
      ]]
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 