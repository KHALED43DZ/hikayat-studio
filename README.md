# استوديو الحكايات

## النشر على GitHub Pages
1. فكّ ضغط الملف على جهازك.
2. في GitHub: New repository (مثلاً `hikayat-studio`) ثم Public.
3. Add file ← Upload files، ثم اسحب **محتويات** المجلد (index.html و sw.js و manifest.json و icons و .nojekyll) وليس الملف المضغوط. ثم Commit changes.
4. Settings ← Pages ← Source: Deploy from a branch ← Branch: main ← Folder: /(root) ← Save.
5. بعد دقيقة أو دقيقتين يظهر الرابط: `https://USERNAME.github.io/hikayat-studio/`
6. افتحه من الهاتف واضغط «تثبيت».

## عند كل تحديث
غيّر `APP_VERSION` في بداية الجزء البرمجي من index.html (الإصدار الحالي 1.7.0)، ثم ارفع الملفات المعدّلة. يتحدّث التخزين المؤقت تلقائياً، وقد تحتاج فتح التطبيق مرتين ليظهر الرقم الجديد.

## الدمج (الإصدار 1.7.0)
- يحمّل التطبيق أداة FFmpeg.wasm من الإنترنت عند أول دمج (نحو 30 ميغابايت) ثم يخزّنها.
- لتحميلها من موقعك بدل الإنترنت (أكثر ثباتاً)، اتبع `ffmpeg/README.txt`.
