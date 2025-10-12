import { createClient } from 'bedrock-protocol';

async function startBot() {
  try {
    const client = createClient({
      host: 'emerald.magmanode.com',
      port: 33760,
      username: 'RenderBot',
      offline: false
    });

    client.on('join', () => console.log('✅ البوت دخل السيرفر بنجاح!'));
    client.on('disconnect', () => console.log('⚠️ تم قطع الاتصال من السيرفر.'));
    client.on('error', (err) => console.log('❌ خطأ في الاتصال:', err.message));
  } catch (err) {
    console.log('🚫 فشل إنشاء الاتصال:', err.message);
  }
}

// إعادة المحاولة كل 5 دقائق بدون توقف السيرفر
startBot();
setInterval(startBot, 5 * 60 * 1000);
