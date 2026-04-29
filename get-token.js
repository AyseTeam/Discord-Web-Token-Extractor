/**
 * Discord Token Extractor (Iframe Method)
 * Coded by @AyseTeam
 */

(function() {
    const iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    const token = JSON.parse(iframe.contentWindow.localStorage.token || null);
    iframe.remove();

    if (token) {
        console.log("%c Success! ", "background: #43b581; color: white; font-weight: bold; border-radius: 3px;");
        console.log("%c Your Token: ", "color: #7289da; font-weight: bold;", token);
        console.warn("DO NOT SHARE THIS TOKEN WITH ANYONE.");
    } else {
        console.error("Token not found. Make sure you are logged in!");
    }
})();
