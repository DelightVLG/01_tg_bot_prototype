import { Telegraf } from 'telegraf';
import 'dotenv/config';

const token = process.env.TG_BOT_TOKEN;
if (!token) {
  throw new Error('Environment TG_BOT_TOKEN must be specified');
}
const bot = new Telegraf(token);

bot.start((ctx) => ctx.reply('Добро пожаловать!'));
bot.hears('hi', (ctx) => ctx.reply('Приветики!'));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

console.log('APP Started');
