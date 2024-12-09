/* 

=========================================================================

  #- Credits By ZannMC
   Contact: https://6283104383637
   Youtube: https://youtube.com/@ZannMC
   Telegram: https://t.me/
    
  Developer : https://wa.me/6283104383637
  
  -[ ! ]- Jangan hapus contact developer! hargai pembuat script ini

=========================================================================

*/

const fs = require('fs');
const chalk = require('chalk');

// Settings Bot 
global.owner = '6281225386003'
global.versi = "1.0.0"
global.namaOwner = "ZannMC"
global.packname = 'Bot WhatsApp'
global.botname = 'JOs - BOT'
global.botname2 = 'JOs - BOT'

global.tempatDB = 'database.json' // Jangan ubah
global.pairing_code = true // Jangan ubah

// Settings Link / Tautan
global.linkOwner = "https://wa.me/6288272150093"
global.linkGrup = "https://chat.whatsapp.com/F3AX5tJkbU7Cu0SlwCm3YM"
global.linkGrup2 = "https://chat.whatsapp.com/F3AX5tJkbU7Cu0SlwCm3YM"

// Delay Jpm & Pushctc || 1000 = 1detik
global.delayJpm = 3000
global.delayPushkontak = 6000

// Settings Channel / Saluran
global.linkSaluran = "https://whatsapp.com/channel/0029VaxBJmYIN9ikXUTqdY1A"
global.idSaluran = "120363357271437243@newsletter"
global.namaSaluran = "ғᴜᴢᴀ sᴛᴏʀᴇ | ᴛᴇsᴛɪᴍᴏɴɪ"

global.merchantIdOrderKuota = "-"
global.apiOrderKuota = "-"
global.qrisOrderKuota = "-"

// Settings All Payment
global.dana = "083104383637"
global.ovo = "Tidak Tersedia"
global.gopay = "083104383637"
global.qris = "https://img100.pixhost.to/images/391/537221829_skyzopedia.jpg"

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://-"
global.apikey = "-" //ptla
global.capikey = "-" //ptlc

// Settings Api Panel Pterodactyl Server 2
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://-"
global.apikeyV2 = "-" //ptla
global.capikeyV2 = "-" //ptlc

// Settings Api Subdomain
global.subdomain = {
"skyzopedia.us.kg": {
"zone": "9e4e70b438a65c1d3e6d0e48b82d79de", 
"apitoken": "odilM9DpvLVPodbPyZwW7UcDKg1aIWsivJc0Vt_o"
}, 
"marketplace.us.kg": {
"zone": "2f33118c3db00b12c38d07cf1c823ed1", 
"apitoken": "6WS_Op6yuPOWcO17NiO-sOP8Vq9tjSAFZyAn82db"
}, 
"serverpanell.biz.id": {
"zone": "225512a558115605508656b7bdf29b28", 
"apitoken": "XasxSSnGp8M9QixvT6AAlh1vEm4icVgzDyz7KDiF"
}, 
"sincecraf.my.id": {
"zone": "a89500d3dcf7e531f5a6e25081c7c874", 
"apitoken": "aV-ilSaLRwfgIGz0c79ah6fbnpcLilDREvysdUsk"
}, 
"xyz-store.biz.id": {
"zone": "8ae812c35a94b7bd2da993a777b8b16d", 
"apitoken": "oqZafkd3mSt1bABD9MMTidpCtD9VZdiPTjElVKJB"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "4qOupI-Of-6yNrBaeS1-H0KySuKCd0wS-x0P5XQ4"
}
}

// Message Command 
global.mess = {
	owner: "* *ᴀᴋsᴇs ᴅɪᴛᴏʟᴀᴋ*\nғɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴏᴡɴᴇʀ ʙᴏᴛ!",
	admin: "* *ᴀᴋsᴇs ᴅɪᴛᴏʟᴀᴋ*\nғɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ!",
	botAdmin: "* *ᴀᴋsᴇs ᴅɪᴛᴏʟᴀᴋ*\nғɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴋᴇᴛɪᴋᴀ ʙᴏᴛ ᴍᴇɴᴊᴀᴅɪ ᴀᴅᴍɪɴ!",
	group: "* *ᴀᴋsᴇs ᴅɪᴛᴏʟᴀᴋ*\nғɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴅᴀʟᴀᴍ ɢʀᴏᴜᴘ!",
	private: "* *ᴀᴋsᴇs ᴅɪᴛᴏʟᴀᴋ*\nғɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴅᴀʟᴀᴍ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ!",
	prem: "* *ᴀᴋsᴇs ᴅɪᴛᴏʟᴀᴋ*\nғɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ!",
	wait: 'ʟᴏᴀᴅɪɴɢ...',
	error: 'ᴇʀʀᴏʀ!',
	done: 'ᴅᴏɴᴇ'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})