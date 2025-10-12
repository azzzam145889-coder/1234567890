# استخدم Node.js الرسمي
FROM node:20

# تثبيت أدوات البناء اللازمة
RUN apt-get update && apt-get install -y make g++ cmake python3

# تثبيت cmake-js عالمياً
RUN npm install -g cmake-js

# تحديد مجلد العمل
WORKDIR /app

# نسخ ملفات المشروع
COPY . .

# تثبيت حزم المشروع
RUN npm install

# أمر تشغيل البوت
CMD ["npm", "start"]
