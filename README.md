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
 * Discord Token Extractor
 * Coded by @AyseTeam
 */

window.webpackChunkdiscord_app.push([
    [Symbol()],
    {},
    o => {
        for (let e of Object.values(o.c)) {
            try {
                if (!e.exports || e.exports === window) continue;
                if (e.exports?.getToken) {
                    token = e.exports.getToken();
                }
                for (let o in e.exports) {
                    if (e.exports?.[o]?.getToken && "IntlMessagesProxy" !== e.exports[o][Symbol.toStringTag]) {
                        token = e.exports[o].getToken();
                    }
                }
            } catch (err) {}
        }
    }
]);
window.webpackChunkdiscord_app.pop();
console.log("%c Your Token: ", "background: #7289da; color: white; font-weight: bold;", token);
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

* **`token is not defined`:** Ensure you have logged in to Discord before running the script.
* **Console blocking:** Modern browsers might block pasting for security. Type `allow pasting` to unlock it if prompted.
* **Script stopped working:** Discord updates its internal structure frequently. If this happens, please open an issue.

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
