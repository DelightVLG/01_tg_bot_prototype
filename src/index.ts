import { Telegraf } from 'telegraf';
import 'dotenv/config';

const token = process.env.TG_BOT_TOKEN;
if (!token) {
  throw new Error('Environment TG_BOT_TOKEN must be specified');
}
const bot = new Telegraf(token);

bot.start(async ctx => {
  await ctx.reply(`Hello ${ctx.from.first_name} `);
  await ctx.sendSticker(
    'https://tlgrm.eu/_/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/256/7.webp',
  );
  await bot.telegram.setMyCommands([
    { command: 'yo', description: 'Сказать йоу' },
    { command: 'wazup', description: 'Сказать вазап' },
  ]);
});

bot.command('yo', async ctx => {
  await ctx.reply('Yo yo yo yo ✌️🤙🫶 ');

  await ctx.sendSticker(
    'https://tlgrm.eu/_/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/256/21.webp',
  );
});

bot.command('wazup', async ctx => {
  await ctx.reply('Wazuuuuuuup 🧖👋🖐️');
  await ctx.sendSticker(
    'https://tlgrm.eu/_/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/256/15.webp',
  );
});

bot.on('text', async ctx =>
  ctx.reply(
    'Я пока слишком тупой, что бы понять что ты мне пишешь, но я скоро закинусь ChatGpt 4 и будет хорошо 😈😈😈',
  ),
);

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

console.log('APP Started');
