import { createClient } from "bedrock-protocol";

// إعدادات البوت
const client = createClient({
  host: "emerald.magmanode.com",  // سيرفر ماينكرافت
  port: 33760,                    // البورت
  username: "BotAFK",             // اسم البوت
  offline: true                   // وضع Offline Mode
});

// عند اتصال البوت بالسيرفر
client.on("connect", () => {
  console.log("✅ تم الاتصال بالسيرفر بنجاح!");
});

// عند استقبال رسالة من السيرفر
client.on("text", (packet) => {
  console.log("💬 رسالة من السيرفر:", packet.message);
});

// عند حدوث خطأ
client.on("error", (err) => {
  console.error("❌ حدث خطأ:", err);
});

// عند فصل الاتصال
client.on("disconnect", (packet) => {
  console.log("⚠️ تم قطع
