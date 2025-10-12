import { createClient } from 'bedrock-protocol';

const client = createClient({
  host: 'emerald.magmanode.com',  // عنوان السيرفر
  port: 33760,                     // المنفذ
  username: 'BotUsername',         // ضع اسم البوت هنا
  version: '1.20.10'               // عدّل حسب نسخة السيرفر
});

client.on('connect', () => {
  console.log('تم الاتصال بالسيرفر!');
});

client.on('spawn', () => {
  console.log('البوت ظهر في العالم!');
});

client.on('message', (packet) => {
  console.log(`رسالة من السيرفر: ${packet.message}`);
});

client.on('disconnect', (packet) => {
  console.log(`تم قطع الاتصال: ${packet.reason}`);
});
