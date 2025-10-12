# استخدم Node 20
FROM node:20

# تثبيت أدوات البناء
RUN apt-get update && apt-get install -y make g++ cmake python3

# إنشاء مجلد العمل
WORKDIR /app

# نسخ الملفات
COPY package.json package-lock.json* ./
COPY . .

# تثبيت الحزم
RUN npm install && npm rebuild raknet-native --build-from-source

# تشغيل البوت
CMD ["npm", "start"]
