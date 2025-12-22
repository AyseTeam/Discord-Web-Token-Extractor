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
