const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix, token } = require('./config.json')

client.login(process.env.TOKEN)

client.on('message', (message) => {
    if (!message.member.user.bot && message.guild.id == '798245258889658388') {

        const detectedEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'hey');

        //Commandes
        if (message.content.toLowerCase().startsWith(`${prefix}membres`)) {
            message.channel.send(`Le serveur compte actuellement ${message.guild.memberCount} bg et blg !`)
        }

            //Les gens du serveur
        else if (message.content.toLowerCase().startsWith(`${prefix}aki`))
            message.channel.send("C'est le pote de Came pas fou sur League of Legends")

        else if (message.content.toLowerCase().startsWith(`${prefix}came`))
            message.channel.send("C'est le pote de Aki mais c'est un gros rageux")

            //Autres
        else if (message.content.toLowerCase().startsWith(`${prefix}live`) || message.content.toLowerCase().startsWith(`${prefix}twitch`))
            message.channel.send("Catnip est peut-être en live, va voir ! https://twitch.tv/CatnippTV")

        else if (message.content.toLowerCase().startsWith(`${prefix}rs`))
            message.channel.send("Instagram : https://instagram.com/catnipptv/ \n Twitch : https://twitch.tv/CatnippTV \n Discord : On est dessus !! ahah pas mal la petite blague ? \n Twitter : https://twitter.com/rtCatnip \n Youtube : Soon...")

        else if (message.content.toLowerCase().startsWith(`${prefix}bot`))
            message.channel.send(`Je suis le AhriBot ! Le plus mignon de tous les bots eheh. J'ai été codé par Dadanouilles (le mec qui se fait mute tout le temps là)`)

        //Réactions 

            //hey
        if (message.content.includes(detectedEmoji) || message.content.toLowerCase() === 'salut') {
            const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'hey');
            message.react(reactionEmoji);

        }

            //caca
        if (message.content.toLowerCase().match('caca'))
            message.reply('prouuut !')

    }

})
