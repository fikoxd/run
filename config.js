/*
    * Created By QyuuNee
    * Subscribe Biar Work :3
    * Minimal Credit Nya Lah
    * Buy Panel? 088210828960
    * SC INI GRATIS! LU JUAL? DEPET TIKET NERAKA
*/

const fs = require('fs')
const chalk = require('chalk')

global.keyai = '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' // https://platform.openai.com/account/api-keys

global.namabot = 'HuTod'
global.namaowner = '𝚔𝚘𝚒'

global.owner = ['6288210828960']
global.ownernomer = "6288210828960"
global.premium = ['6288210828960']
global.nomorOwner = ['6288210828960']

global.packname = 'HuTod'
global.author = 'MultiDevice'

global.prefa = ['', '!', '.', '#', '$', ',']

global.mess = {
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    error: '🚫 Fitur Sedang Error !',
}

global.thumb = fs.readFileSync('./hutod.jpg')
global.botname = 'HuTod'
global.ttname = 'iamunderox_'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
