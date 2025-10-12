# استخدم Node الرسمي
FROM node:20

# تثبيت أدوات البناء (مطلوبة لـ raknet-native)
RUN apt-get update && apt-get install -y make g++ cmake python3

# تثبيت cmake-js عالمياً
RUN npm install -g cmake-js

# مجلد العمل داخل الحاوية
WORKDIR /app

# نسخ جميع ملفات المشروع
COPY . .

# تثبيت حزم npm وإعادة بناء raknet-native
RUN npm install && npm rebuild raknet-native --build-from-source

# تشغيل البوت عند تشغيل الحاوية
CMD ["node", "bot.js"]
