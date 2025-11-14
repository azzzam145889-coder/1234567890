import { createClient } from 'bedrock-protocol';
import http from 'http';

const BOT_NAME = 'ZolDekRonder_1326';
const HOST = 'scar.progamer.me';
const PORT_SERVER = 32423;

async function startBot() {
  try {
    const client = createClient({
      host: HOST,
      port: PORT_SERVER,
      username: BOT_NAME,
      offline: true
    });

    client.on('join', () => {
      console.log(`✅ البوت "${BOT_NAME}" دخل السيرفر بنجاح!`);

      // 📝 إرسال رسالة تلقائية في الشات كل 5 دقائق
      setInterval(() => {
        if (client && client.sendMessage) {
          client.sendMessage('البوت لا يزال يعمل ✅');
        }
      }, 10 * 60 * 1000);
    });

    client.on('disconnect', () => {
      console.log('⚠️ تم قطع الاتصال من السيرفر. إعادة المحاولة بعد 3 ثواني...');
      setTimeout(startBot, 3000);
    });

    client.on('error', (err) => {
      console.log('❌ خطأ في الاتصال:', err.message);
      setTimeout(startBot, 3000);
    });
  } catch (err) {
    console.log('🚫 فشل إنشاء الاتصال:', err.message);
    setTimeout(startBot, 3000);
  }
}

startBot();

const PORT_HTTP = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('✅ Bot is alive and running on Render!');
});

server.listen(PORT_HTTP, () => {
  console.log(`🌐 HTTP server running on port ${PORT_HTTP}`);
});

// 🔄 إبقاء السيرفر في MagmaNode شغال 24/7
setInterval(() => {
  http.get('https://zero987654321-df0r.onrender.com', (res) => {
    console.log(`💓 Ping sent to keep Render alive (${res.statusCode})`);
  }).on('error', (err) => {
    console.log('⚠️ خطأ أثناء إرسال Ping:', err.message);
  });

  http.get('https://emerald.magmanode.com', (res) => {
    console.log(`💎 Ping sent to MagmaNode (${res.statusCode})`);
  }).on('error', (err) => {
    console.log('⚠️ خطأ أثناء Ping إلى MagmaNode:', err.message);
  });
}, 10 * 60 * 1000);
