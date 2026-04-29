# 🔑 Get-Token-Discord

A lightweight and efficient JavaScript snippet to retrieve your **Discord Access Token** directly from your browser console or the Discord Desktop app.

---

### 📋 Prerequisites

1. **Access Discord:** Open Discord in your Web Browser (Chrome, Firefox, Edge) or open the Discord Desktop app.
2. **Open Developer Tools:** - **Browser:** Press `F12` or `Ctrl+Shift+I`.
   - **Desktop App:** This requires specific steps (usually enabling `DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOU_ARE_DOING` in settings).

---

### 🚀 Usage Instructions

#### 1. Open the Console
Go to the **Console** tab in the developer tools window.

#### 2. Paste the Script
Copy and paste the following code into the console and press **Enter**:

```javascript
/**
 * Discord Token Extractor (Iframe Method)
 * Coded by @AyseTeam
 */

(function() {
    try {
        const iframe = document.createElement("iframe");
        document.body.appendChild(iframe);
        const token = JSON.parse(iframe.contentWindow.localStorage.token || null);
        iframe.remove();

        if (token) {
            console.log("%c Success! ", "background: #43b581; color: white; font-weight: bold; border-radius: 3px;");
            console.log("%c Your Token: ", "color: #7289da; font-weight: bold;", token);
            console.warn("⚠️ DO NOT SHARE THIS TOKEN WITH ANYONE.");
        } else {
            console.error("Token not found. Make sure you are logged in to Discord!");
        }
    } catch (e) {
        console.error("An error occurred. Discord might have blocked this method.");
    }
})();
```

#### 3. Copy Your Token
The script will output your token in the console. Copy it safely.

---

### ⚠️ Security Warning

> [!CAUTION]
> **NEVER SHARE YOUR TOKEN.**
> Your token gives full access to your account. With it, someone can bypass your password and 2FA. Discord staff will **never** ask for this information.

---

### 🛠️ Troubleshooting

* **Token is `null` or "Not found":** Ensure you are fully logged into your Discord account in the browser tab where you are running the script.
* **Console blocking:** Modern browsers (like Chrome or Firefox) may block pasting for security. Type `allow pasting` and press **Enter** to unlock the console if prompted.
* **App vs Browser:** If the script fails on the **Discord Desktop app**, try running it on the **Web version** (discord.com/app). The desktop app has stricter security policies that can block `iframe` creation.
* **Script stopped working:** Discord occasionally updates its security policies. If the script no longer outputs your token, please open an **Issue** on this repository.

---

### 🤝 Contributing

Found a bug or have a better method?
* Open an **Issue**.
* Submit a **Pull Request**.

---

### 📜 License & Credits

* **Developer:** [@AyseTeam](https://github.com/AyseTeam)
* **License:** Educational purposes only. Use responsibly.

---

**Don't forget to ⭐ this repository if it helped you!**
