# Gemini Pocket AI

Ye ek smart AI app hai jo Google Gemini 2.5 Flash model use karta hai. Isme Chatting, Image analysis aur ek cool Loading Screen (Splash Screen) included hai.

## 🛠️ VS Code Me Kaise Run Karein (Step-by-Step)

Agar aap is app ko apne computer (VS Code) me chalana chahte hain, to bas ye simple steps follow karein:

### Step 1: Folder Open Karein
1. Is poore code ko download karein.
2. **VS Code** open karein aur `File > Open Folder` karke is project folder ko select karein.

### Step 2: Terminal Open Karein
1. VS Code ke upar menu me `Terminal` > `New Terminal` par click karein.
2. Niche ek box khulega, wahan type karein:
   ```bash
   npm install
   ```
   _(Isse saari required files internet se download ho jayengi. Thoda wait karein.)_

### Step 3: API Key Lagayein (Zaroori Hai)
1. Left side me files ki list me dekhein, wahan right click karke **New File** banayein.
2. File ka naam rakhein: `.env` (sirf dot env).
3. Us file ke andar ye line paste karein:
   ```env
   API_KEY=YOUR_GEMINI_API_KEY_HERE
   ```
4. `YOUR_GEMINI_API_KEY_HERE` ki jagah apni asli Gemini API Key daalein.
   _(Agar key nahi hai to [Google AI Studio](https://aistudio.google.com/app/apikey) se free me lein.)_

### Step 4: App Run Karein 🚀
Terminal me ye command likhein aur Enter dabayein:
```bash
npm run dev
```

Ab terminal me apko ek link dikhega (jaise `http://localhost:5173/`).
Us link par **Ctrl + Click** karein ya browser me open karein.
Apka app start ho jayega loading screen ke saath!

---

### 📱 Mobile Par Test Karna Hai?
Agar aap chahte hain ki ye app apke phone ke browser me chale (PC run hote hue):
1. Ensure karein PC aur Phone **same WiFi** par connect hon.
2. Terminal me jo "Network" wala link aata hai (e.g. `http://192.168.1.5:5173/`), wo apne phone ke browser me type karein.

### 📦 APK Banane Ke Liye (Future)
Abhi ye web mode me hai. Jab aap ready hon, aap **CapacitorJS** use karke iska asli Android APK bana sakte hain.