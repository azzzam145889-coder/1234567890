# استخدم صورة Node.js رسمية
FROM node:22

# أنشئ مجلد العمل داخل الحاوية
WORKDIR /usr/src/app

# انسخ ملفات المشروع (بدون node_modules)
COPY package*.json ./
COPY bot.js ./

# ثبّت الحزم
RUN npm install

# شغّل البوت عند بدء الحاوية
CMD ["npm", "start"]
