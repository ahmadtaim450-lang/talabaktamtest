بنية الملفات — طلبك تم PWA
================================

/site
├── index.html          ← الموقع الرئيسي
├── manifest.json       ← إعدادات التطبيق PWA
├── sw.js               ← Service Worker للكاش والأوفلاين
├── offline.html        ← صفحة بدون إنترنت
├── css/
│   └── (مستقبلاً)
├── js/
│   └── firebase-config.js  ← إعدادات Firebase
└── images/
    ├── logo.png        ← لوجو الموقع (الهيدر + OG)
    ├── icon-app.webp   ← الأيقونة الدائرية بالهيرو
    ├── icon-192.png    ← أيقونة التطبيق 192x192
    ├── icon-512.png    ← أيقونة التطبيق 512x512
    ├── hero1.webp      ← صورة هيرو 1
    ├── hero2.webp      ← صورة هيرو 2
    ├── hero3.webp      ← صورة هيرو 3
    ├── cat-apt.webp    ← أيقونة قسم شقق
    ├── cat-car.webp    ← أيقونة قسم سيارات
    ├── cat-equip.webp  ← أيقونة قسم معدات
    └── cat-free.webp   ← أيقونة قسم إعلانات مجانية


خطوات الإعداد:
==============

1. حمّل الصور من الروابط القديمة واحفظها بالأسماء المذكورة فوق بمجلد images/

2. أنشئ أيقونة التطبيق:
   - icon-192.png (192x192 بكسل)
   - icon-512.png (512x512 بكسل)
   يمكنك استخدام اللوجو نفسه بأحجام مختلفة

3. ارفع كل الملفات على Cloudflare Pages

4. بعد الرفع، أضف الدومين بـ:
   Firebase Console → Authentication → Settings → Authorized domains
