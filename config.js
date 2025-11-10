const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "JK~H4sIAAAAAAAAA5VUW5OiOBj9L3nVGrkIilVdtQgoaoOIt5atfYgkQJBbJ0HEKf/7Ft3T0/OwO9vLU0hS5zvfOefLd1CUhOEVbsHkO6gouUKOuyVvKwwmYFpHEaagDxDkEEzASo9L2xF3z607ZTUaBNJiRWfReKTEgqweuaVk6vGQtcph/AQefVDV54yEvwHcWqpC6f747DXxxtFXp+weG+GI+oerltp3eWxcT+n9OXHS0xN4dIiQUFLEVpXgHFOYrXDrQUK/Rt+xQ3fFNoZKnl3X99eC+5oJUXBS4SlHwtxYP9euM+BLY3/5Gv383DvvF9pcGkJ7sPPgPVDmV8cLDg4nPOVwY2TTl2G64XH5Tp+RuMBogXDBCW+/rLs63S80Wsv2vWrWLyohUuPa5snae/MqWGMztGEm1jvbzBZfI16L80ILvHHrn1IqnhuFidJQXmdrc6MN5kl2bPKgEetB6ze/EvfoR1Yu/0f3eKkjXVzuJOdmHFdSrSVqFag9fTvy1eW2pzizaiyYssXF4dfoj3s0H7He0K0P+vg6ay7IduPmMr/eto0oSyfG6LOe1YPT8fRJH/Ka/o4l9YwjW8CAJqPzZoC0uJgNgqmahz0vn7nD8ywSxnf+Yt/jceA6sq1sx7u7URX21TDO855uvkjmZQ0vPSXWbJSWPaRMp83TW0cX3C4QmIiPPqA4JoxTyElZdHuSPOoDiK5bHFLM3+QFNp4JScjiyLDQLFniMYQwjZpK8r1osF4mCA3MatMOvV35BPqgomWIGcPIJoyXtHUwYzDGDEz+/KsPCnzj78Z15WSxDyJCGd8XdZWVEH24+nEIw7CsC75ti9DoFpiCifC5jTknRcw6HesC0jAhV2wkkDMwiWDG8M8OMcUITDit8c+pNUrUCb+ydXdnGTbog/zNEILABGjiSBBHqqKJ0nAykv9g35oOFlbVtwJz0AfZ2zVRE8eKJKuypqjSSO1udgePnww7QIQ5JBkDE2A4W7FxLNvyeuMbi+dzfRHrRqyDz44+ovEu/VG7RahOXu/blS9kgn+3bNPT7FMvj1btmvu7+XgnGBWJj87TP4CACdg0Zbx+XblGUEtxu9sEm3a4EmNxcTFNK5/pm4OvtHO/yS8LOFvLoxd3z3rDaVQwGWHfZHYQaDlK8sPwNU1ishZ3B6xvnrpqCF9JiH8tdleIOlhmvlpeZ3Mrimd1zYzd/VzGfugPUllx5GUkXdPT1mSrRZqbHixelFB2SjSfwvsuEa3MOQsD4aypJyuIUq3gb8U+hib78ViRtzh1XnW/EcFvs1/AzsH/9u6deBcx4dH/BePHa/IvEzk9XMMX+VxCJpALWiIrvE2b+8CXvKpoWUr3+9vV0vTXUzlLwePxVx9UGeRRSXMwAbBAtCQI9AEt6y6ziyIqf1PM0BcLQ4/drvMMMq5/zsGO5JhxmFdgIo661EnySHq/5dGysiFLOoBhtHS7TLd6VW055B9TBfTuM0MdPP4GKVbbJHEHAAA=",  // Your bot's session ID (keep it secure)
    XDEV: process.env.XDEV || "",  // Github Username 
    PREFIX: getConfig("PREFIX") || ".",  // Command prefix (e.g., "., / ! * - +")
    CHATBOT: getConfig("CHATBOT") || "off", // on/off chat bot 
    BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "RAHUL-LP",  // Bot's display name
    MODE: getConfig("MODE") || process.env.MODE || "public",        // Bot mode: public/private/group/inbox
    REPO: process.env.REPO || "https://github.com/JawadTechXD/KHAN-MD",  // Bot's GitHub repo
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",  // Bot's BAILEYS

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "917017659124",  // Owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "Panchal TᴇᴄʜX",           // Owner's name
    DEV: process.env.DEV || "917017659124",                     // Developer's contact number
    DEVELOPER_NUMBER: '917017659124@s.whatsapp.net',            // Developer's WhatsApp ID

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "false",              // Enable/disable auto-reply
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",// Reply to status updates?
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*RAHUL LP VIEWED YOUR STATUS 🤖*",  // Status reply message
    READ_MESSAGE: process.env.READ_MESSAGE || "false",          // Mark messages as read automatically?
    REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "false",              // Auto-react to messages?
    OWNER_REACT: process.env.OWNER_REACT || "false",              // Auto-react to messages?
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",          // Use custom emoji reactions?
    CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",  // set custom reacts
    STICKER_NAME: process.env.STICKER_NAME || "RAHUL-LP",     // Sticker pack name
    AUTO_STICKER: process.env.AUTO_STICKER || "false",          // Auto-send stickers?
    // ===== MEDIA & AUTOMATION =====
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",      // Auto-record voice notes?
    AUTO_TYPING: process.env.AUTO_TYPING || "false",            // Show typing indicator?
    MENTION_REPLY: process.env.MENTION_REPLY || "false",   // reply on mentioned message 
    MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://i.ibb.co/sJKv3mG5/1762764433534.png",  // Bot's "alive" menu mention image

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // true antidelete to recover deleted messages 
    ANTI_CALL: process.env.ANTI_CALL || "false", // enble to reject calls automatically 
    ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",    // Block bad words?
    ANTI_LINK: process.env.ANTI_LINK || "true",    // Block links in groups
    ANTI_VV: process.env.ANTI_VV || "true",   // Block view-once messages
    DELETE_LINKS: process.env.DELETE_LINKS || "false",          // Auto-delete links?
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", // inbox deleted messages (or 'same' to resend)
    ANTI_BOT: process.env.ANTI_BOT || "true",
    PM_BLOCKER: process.env.PM_BLOCKER || "true",

    // ===== BOT BEHAVIOR & APPEARANCE =====
    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Panchal TᴇᴄʜX*",  // Bot description
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",              // Allow public commands?
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",        // Show bot as always online?
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // React to status updates?
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true", // VIEW to status updates?
    AUTO_BIO: process.env.AUTO_BIO || "false", // ture to get auto bio 
    WELCOME: process.env.WELCOME || "false", // true to get welcome in groups 
    GOODBYE: process.env.GOODBYE || "false", // true to get goodbye in groups 
    ADMIN_ACTION: process.env.ADMIN_ACTION || "false", // true if want see admin activity 
};
        
