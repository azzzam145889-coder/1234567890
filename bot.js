// 📦 استيراد مكتبة bedrock-protocol و http
import { createClient } from 'bedrock-protocol';
import http from 'http';

// 🟢 تشغيل البوت
async function startBot() {
  try {
    const client = createClient({
      host: 'emerald.magmanode.com',
      port: 33760,
      username: 'RenderBot',
      offline: false
    });

    client.on('join', () => {
      console.log('✅ البوت دخل السيرفر بنجاح!');
    });

    client.on('disconnect', () => {
      console.log('⚠️ تم قطع الاتصال من السيرفر.');
    });

    client.on('error', (err) => {
      console.log('❌ خطأ في الاتصال:', err.message);
    });

    // 🕓 عندما يتغير وقت العالم داخل السيرفر
    client.on('packet', (packet, meta) => {
      if (meta.name === 'set_time') {
        const time = packet.time; // رقم الوقت داخل اللعبة
        if (time >= 12500 && time <= 23000) {
          console.log('🌙 حان وقت النوم! يحاول البوت النوم الآن...');
          trySleep(client);
        }
      }
    });

  } catch (err) {
    console.log('🚫 فشل إنشاء الاتصال:', err.message);
  }
}

// 🛏️ دالة تحاول جعل البوت ينام
function trySleep(client) {
  try {
    // يرسل أمر النوم إلى السيرفر (يحتاج صلاحية)
    client.queue('command_request', {
      command: '/me يذهب للنوم 💤',
      origin: { type: 0 },
      internal: false,
      version: 52
    });

    // إذا كان للسيرفر أوامر مفعلة يمكن أيضاً:
    // client.queue('command_request', { command: '/sleep', origin: { type: 0 }, internal: false, version: 52 });

  } catch (e) {
    console.log('😅 فشل في محاولة النوم:', e.message);
  }
}

// 🔁 إعادة التشغيل كل 5 دقائق
startBot();
setInterval(startBot, 5 * 60 * 1000);

// 🌍 إبقاء البوت شغال في Render
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('✅ Bot is alive and running on Render!');
}).listen(PORT, () => {
  console.log(`🌐 HTTP server running on port ${PORT}`);
});
