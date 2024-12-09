const fs = require("fs")
const os = require('os');
const m2 = "`"
global.khas = '∨'
global.khasbawah = 'ꕤ'
global.khasatas1 = '[ ⏤͟͟͞͞ '
global.khasatas2 = ' ͟͟͞͞⏤ ]'
global.footer = 'FuZa - STORE'

let handler = async (m, { Sky, isCreator, isPremium, qtext, runtime }) => {
let teksnya = `
 *乂 I N F O R M A T I O N*
  • *Botname :* ${global.botname2}
  • *Mode :* ${Sky.public ? "Public": "Self"}
  • *Creator :* @${global.owner}
  • *Runtime Bot :* ${runtime(process.uptime())}
  • *Uptime Vps :* ${runtime(os.uptime())}
  
 *乂 I N F O - U S E R*
  • *Number :* ${m.sender.split("@")[0]}
  • *Status :* ${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}

╭┈──────────────────
│ *${m2}${khasatas1} O T H E R ${khasatas2}${m2}*
╭┈──────────────────
│  ◦  .ᴄᴇᴋɪᴅᴄʜ
│  ◦  .ᴄᴇᴋɪᴅɢᴄ
│  ◦  .ǫᴄ
│  ◦  .ʀᴇᴀᴅᴠɪᴇᴡᴏɴᴄᴇ
│  ◦  .sᴛɪᴄᴋᴇʀᴡᴍ
│  ◦  .sᴛɪᴄᴋᴇʀ
│  ◦  .ᴀᴅᴅᴘʀᴇᴍɪᴜᴍ
│  ◦  .ᴅᴇʟᴘʀᴇᴍɪᴜᴍ
│  ◦  .ʟɪsᴛᴘʀᴇᴍɪᴜᴍ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} S E A R C H ${khasatas2}${m2}*
╭┈──────────────────
│  ◦  .ʏᴛs
│  ◦  .ᴀᴘᴋᴍᴏᴅ
│  ◦  .ᴘɪɴᴛᴇʀᴇsᴛ
│  ◦  .ᴋᴏᴅᴇʙᴀʜᴀꜱᴀ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} T O O L S ${khasatas2}${m2}*
╭┈──────────────────
│  ◦  .ᴀɪ
│  ◦  .ɢᴘᴛ
│  ◦  .ᴛᴏᴜʀʟ
│  ◦  .ᴛᴏᴜʀʟ2
│  ◦  .ꜱsᴡᴇʙ
│  ◦  .ᴛʀᴀɴsʟᴀᴛᴇ
│  ◦  .ᴛᴏʜᴅ
│  ◦  .sʜᴏʀᴛʟɪɴᴋ
│  ◦  .sʜᴏʀᴛʟɪɴᴋ2
│  ◦  .ᴇɴᴄ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} S H O P ${khasatas2}${m2}*
╭┈──────────────────
│ 
│  ◦  .ʙᴜʏᴘᴀɴᴇʟ
│ 
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} D O W N L O A D ${khasatas2}${m2}*
╭┈──────────────────
│  ◦  .ᴛɪᴋᴛᴏᴋ
│  ◦  .ᴛɪᴋᴛᴏᴋᴍᴘ3
│  ◦  .ɪɴsᴛᴀɢʀᴀᴍ
│  ◦  .ʏᴛᴍᴘ3
│  ◦  .ʏᴛᴍᴘ4
│  ◦  .ᴘʟᴀʏ
│  ◦  .ᴘʟᴀʏᴠɪᴅ
│  ◦  .ɢɪᴛᴄʟᴏɴᴇ
│  ◦  .ᴍᴇᴅɪᴀғɪʀᴇ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} S T O R E ${khasatas2}${m2}*
╭┈──────────────────
│  ◦  .ᴀᴅᴅʀᴇsᴘᴏɴ
│  ◦  .ᴅᴇʟʀᴇsᴘᴏɴ
│  ◦  .ʟɪsᴛʀᴇsᴘᴏɴ
│  ◦  .ᴅᴏɴᴇ
│  ◦  .ᴘʀᴏsᴇs
│  ◦  .ᴊᴘᴍ
│  ◦  .ᴊᴘᴍ2
│  ◦  .ᴊᴘᴍᴛᴇsᴛɪ
│  ◦  .ᴊᴘᴍsʟɪᴅᴇ
│  ◦  .ᴊᴘᴍsʟɪᴅᴇʜᴛ
│  ◦  .sᴇɴᴅᴛᴇsᴛɪ
│  ◦  .ᴘᴜsʜᴋᴏɴᴛᴀᴋ
│  ◦  .ᴘᴜsʜᴋᴏɴᴛᴀᴋ2
│  ◦  .ᴘᴀʏᴍᴇɴᴛ
│  ◦  .ᴘʀᴏᴅᴜᴋ
│  ◦  .sᴜʙᴅᴏᴍᴀɪɴ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} P T E R O - V 1 ${khasatas2}${m2}*
╭┈──────────────────
│  ◦  .1ɢʙ
│  ◦  .2ɢʙ
│  ◦  .3ɢʙ
│  ◦  .4ɢʙ
│  ◦  .5ɢʙ
│  ◦  .6ɢʙ
│  ◦  .7ɢʙ
│  ◦  .8ɢʙ
│  ◦  .9ɢʙ
│  ◦  .10ɢʙ
│  ◦  .ᴜɴʟɪᴍɪᴛᴇᴅ
│  ◦  .ᴄᴀᴅᴍɪɴ
│  ◦  .ᴅᴇʟᴘᴀɴᴇʟ
│  ◦  .ᴅᴇʟᴀᴅᴍɪɴ
│  ◦  .ʟɪsᴛᴘᴀɴᴇʟ
│  ◦  .ʟɪsᴛᴀᴅᴍɪɴ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} P T E R O - V 2 ${khasatas2}${m2}*
╭┈──────────────────
│  ◦  .1ɢʙ-ᴠ2
│  ◦  .2ɢʙ-ᴠ2
│  ◦  .3ɢʙ-ᴠ2
│  ◦  .4ɢʙ-ᴠ2
│  ◦  .5ɢʙ-ᴠ2
│  ◦  .6ɢʙ-ᴠ2
│  ◦  .7ɢʙ-ᴠ2
│  ◦  .8ɢʙ-ᴠ2
│  ◦  .9ɢʙ-ᴠ2
│  ◦  .10ɢʙ-ᴠ2
│  ◦  .ᴜɴʟɪᴍɪᴛᴇᴅ-ᴠ2
│  ◦  .ᴄᴀᴅᴍɪɴ-ᴠ2
│  ◦  .ᴅᴇʟᴘᴀɴᴇʟ-ᴠ2
│  ◦  .ᴅᴇʟᴀᴅᴍɪɴ-ᴠ2
│  ◦  .ʟɪsᴛᴘᴀɴᴇʟ-ᴠ2
│  ◦  .ʟɪsᴛᴀᴅᴍɪɴ-ᴠ2
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} I N S T A L ${khasatas2}${m2}*
╭┈──────────────────
│  ◦  .ʜᴀᴄᴋʙᴀᴄᴋᴘᴀɴᴇʟ
│  ◦  .ɪɴsᴛᴀʟʟᴘᴀɴᴇʟ
│  ◦  .ɪɴsᴛᴀʟʟᴛᴇᴍᴀsᴛᴇʟʟᴀʀ
│  ◦  .ɪɴsᴛᴀʟʟᴛᴇᴍᴀʙɪʟʟɪɴɢ
│  ◦  .ɪɴsᴛᴀʟʟᴛᴇᴍᴀᴇɴɪɢᴍᴀ
│  ◦  .ᴜɴɪɴsᴛᴀʟʟᴘᴀɴᴇʟ
│  ◦  .ᴜɴɪɴsᴛᴀʟʟᴛᴇᴍᴀ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} G R O U P ${khasatas2}${m2}*
╭┈──────────────────
│  ◦  .ᴀᴅᴅ
│  ◦  .ᴋɪᴄᴋ
│  ◦  .ᴄʟᴏsᴇ
│  ◦  .ᴏᴘᴇɴ
│  ◦  .ʜɪᴅᴇᴛᴀɢ
│  ◦  .ᴋᴜᴅᴇᴛᴀɢᴄ
│  ◦  .ʟᴇᴀᴠᴇ
│  ◦  .ᴛᴀɢᴀʟʟ
│  ◦  .ᴘʀᴏᴍᴏᴛᴇ
│  ◦  .ᴅᴇᴍᴏᴛᴇ
│  ◦  .ʀᴇsᴇᴛʟɪɴᴋɢᴄ
│  ◦  .ᴏɴ
│  ◦  .ᴏғғ
│  ◦  .ʟɪɴᴋɢᴄ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} O W N E R ${khasatas2}${m2}*
╭┈──────────────────
│  ◦  .ᴀᴜᴛᴏʀᴇᴀᴅ
│  ◦  .ᴀᴜᴛᴏᴘʀᴏᴍᴏsɪ
│  ◦  .ᴀᴜᴛᴏʀᴇᴀᴅsᴡ
│  ◦  .ᴀᴜᴛᴏᴛʏᴘɪɴɢ
│  ◦  .ᴀᴅᴅᴘʟᴜɢɪɴs
│  ◦  .ʟɪsᴛᴘʟᴜɢɪɴs
│  ◦  .ᴅᴇʟᴘʟᴜɢɪɴs
│  ◦  .ɢᴇᴛᴘʟᴜɢɪɴs
│  ◦  .sᴀᴠᴇᴘʟᴜɢɪɴs
│  ◦  .ᴀᴅᴅᴏᴡɴᴇʀ
│  ◦  .ʟɪsᴛᴏᴡɴᴇʀ
│  ◦  .ᴅᴇʟᴏᴡɴᴇʀ
│  ◦  .sᴇʟғ/ᴘᴜʙʟɪᴄ
│  ◦  .sᴇᴛɪᴍɢᴍᴇɴᴜ
│  ◦  .sᴇᴛɪᴍɢғᴀᴋᴇ
│  ◦  .sᴇᴛᴘᴘʙᴏᴛ
│  ◦  .ᴄʟᴇᴀʀsᴇssɪᴏɴ
│  ◦  .ᴄʟᴇᴀʀᴄʜᴀᴛ
│  ◦  .ʀᴇsᴇᴛᴅʙ
│  ◦  .ʀᴇsᴛᴀʀᴛʙᴏᴛ
│  ◦  .ɢᴇᴛsᴄ
│  ◦  .ɢᴇᴛᴄᴀsᴇ
│  ◦  .ʟɪsᴛɢᴄ
│  ◦  .ᴊᴏɪɴɢᴄ
│  ◦  .ᴊᴏɪɴᴄʜ
│  ◦  .ᴜᴘᴄʜᴀɴɴᴇʟ
│  ◦  .ᴜᴘᴄʜᴀɴɴᴇʟ2
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢
`
await Sky.sendMessage(m.chat, {document: fs.readFileSync("./package.json"), mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", caption: `${teksnya}`, fileName: `${botname2} V${global.versi}`, contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${global.botname}`, newsletterJid: global.idSaluran }, 
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender], externalAdReply: {containsAutoReply: true, thumbnail: await fs.readFileSync("./src/media/menu.jpg"), title: `© Copyright By ${namaOwner}`, 
renderLargerThumbnail: true, sourceUrl: global.linkSaluran, mediaType: 1}}}, {quoted: qtext})
}

handler.command = ["menu"]

module.exports = handler