module.exports.config = {
	name: "owner",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "AYAN CHOWDHURY",
	description: "info",
	commandCategory: "Owner",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.postimg.cc/XX6V60sM/FB-IMG-17117672646281762.jpg",
"https://i.postimg.cc/3wNWBY69/Screenshot-2024-04-10-06-17-08-49.jpg",
"https://i.postimg.cc/BnqYTbXN/IMG-20240406-164351.jpg"];
var callback = () => api.sendMessage({body:`𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎 ❤🪽

✰𝔹𝕠𝕥 ℕ𝕒𝕞𝕖︎︎︎✰: ${global.config.BOTNAME}

✿︎𝔹𝕠𝕥 𝔸𝕕𝕞𝕚𝕟✿︎ ☞︎︎︎ S O B H A N

༆ 𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐈𝐃 𝐋𝐢𝐧𝐤 :\n➪ https://www.facebook.com/moodsobhan 

👋𝔽𝕠𝕣 𝔸𝕟𝕪 𝕂𝕚𝕟𝕕 𝕆𝕗 ℍ𝕖𝕝𝕡 ℂ𝕠𝕟𝕥𝕒𝕔𝕥 𝕆𝕟 𝔽𝕓 :\n➪ ♕︎Sobhan prime ♕︎

✧━━━━━━━━━━━━━━━❤🪽

❀𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱❀: ➪ [ ${global.config.PREFIX} ] 

♕︎𝗕𝗼𝘁 𝗢𝘄𝗻𝗲𝗿♕︎:  S O B H A N

👑𝕌ℙ𝕋𝕀𝕄𝔼👑 𝟚𝟜/𝟟

✰𝐓𝐨𝐝𝐚𝐲 𝐢𝐬✰\n\n${juswa} 

᯾𝐁𝐨𝐭 𝐢𝐬 𝐫𝐮𝐧𝐧𝐢𝐧𝐠᯾ [ ${hours}:${minutes}:${seconds} ]

💟𝑻𝒉𝒂𝒏𝒌 𝒚𝒐𝒖 𝒇𝒐𝒓 𝒖𝒔𝒆𝒊𝒏𝒈 ${global.config.BOTNAME} 


♕︎𝗛𝗲𝗿𝗲 𝗶𝘀 𝗕𝗼𝘁 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲➪

♕︎𝐀𝐘𝐀𝐍 𝐂𝐇𝐎𝐔𝐃𝐇𝐔𝐑𝐘♕︎


`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
