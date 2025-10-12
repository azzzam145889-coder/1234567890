import { createBot } from 'bedrock-protocol';

const bot = createBot({
  host: 'localhost', // ضع هنا عنوان السيرفر
  port: 19132,       // منفذ السيرفر
  username: 'BotName' // اسم البوت
});

bot.on('spawn', () => {
  console.log('البوت دخل السيرفر بنجاح!');
});

bot.on('message', (packet) => {
  console.log(`[Message]: ${packet.message}`);
});

bot.on('error', (err) => {
  console.error('حدث خطأ:', err);
});

bot.on('end', () => {
  console.log('تم فصل البوت عن السيرفر.');
});
