import { Bot } from 'grammy';
import dotenv from 'dotenv';

dotenv.config();

const bot = new Bot(process.env.BOT_TOKEN || '');

bot.command('start', async (ctx) => {
  await ctx.reply('Чтобы заказать у меня работу, откройте мини приложение по кнопке снизу!👇', {
    reply_markup: {
      inline_keyboard: [[
        {
          text: 'Open Mini-App',
          web_app: { url: process.env.MINI_APP_URL || '' }
        }
      ]]
    }
  });
});

bot.start(); 