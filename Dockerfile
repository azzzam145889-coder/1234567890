# استخدم Node.js 20
FROM node:20

# تثبيت أدوات البناء المطلوبة
RUN apt-get update && apt-get install -y make g++ cmake python3

# تثبيت cmake-js عالمياً
RUN npm install -g cmake-js

# تحديد مجلد العمل
WORKDIR /app

# نسخ ملفات المشروع
COPY . .

# تثبيت الحزم وإعادة بناء raknet-native
RUN npm install && npm rebuild raknet-native --build-from-source

# أمر تشغيل البوت
CMD ["node", "bot.js"]
