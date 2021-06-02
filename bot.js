const { Telegraf } = require('telegraf')

//const bot = new Telegraf(process.env.BOT_TOKEN)
const bot = new Telegraf('1878775895:AAFB6ZIpKDcVVkd8BZsNTiJZHTe6fy*****')


//////  COMANDOS  ///////

// Iniciamos el comando con '/' por ejemplo: "/start"
bot.start((ctx) => {
    //console.log(ctx.from)
    //console.log(ctx.chat)
    //console.log(ctx.message)
    //console.log(ctx.updateType)
    ctx.reply(`Hola ${ctx.from.first_name}. Has enviado un ${ctx.updateType}`)
})

bot.help((ctx) => {
    ctx.reply(`Ayuda!!!`)
})

bot.settings((ctx) => {
    ctx.reply('Configuraciones')
})

//Comando personalizado con arreglo
bot.command(['mycommando', 'MiCommando', 'test'], (ctx) => {
    ctx.reply('Mi commando personalizado')
})


//////  MÉTODOS   ///////

//Escucha lo que el usuario teclea sin '/'
bot.hears('movida', ctx => {
    ctx.reply('Hola, acabo de escuchar movida')
})

//Manda un sticker al recibir uno
bot.on('sticker', ctx => {
    ctx.reply('Te gustan los stickers ❤️')
})

//Comprueba si hace mencion a otro usuario, por ejemplo 'BotFather'
bot.mention('BotFather', ctx => {
    ctx.reply('Has mencionado a alguien')
})

bot.phone('+34 666 666 666', ctx => {
    ctx.reply('Eso es un teléfono!')
})

bot.hashtag('coding', ctx => {
    ctx.reply('Hastag!!')
})


//Arranca el bot
bot.launch()