import pkg from 'bedrock-protocol';
const { createBot } = pkg;

const bot = createBot({
    host: 'emerald.magmanode.com', // السيرفر
    port: 33760,                   // البورت
    username: 'BotUsername',       // اسم البوت
    offline: true                  // إذا كان السيرفر بدون حساب مايكروسوفت
});

bot.on('spawn', () => {
    console.log('✅ تم دخول البوت للسيرفر!');
});

bot.on('message', (message) => {
    console.log('رسالة:', message.toString());
});

bot.on('kicked', (reason) => {
    console.log('⚠️ تم طرد البوت:', reason.toString());
});

bot.on('error', (err) => {
    console.error('❌ خطأ:', err);
});
